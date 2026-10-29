// Formular-Endpunkt für alle drei Formulare (Haushaltshilfe, Senioren-WG, Kontakt).
// Läuft on demand als Vercel-Funktion, verschickt die Anfrage per Resend.
// Eine Anfrage darf nie still verloren gehen: Jeder Fehler wird protokolliert
// (Vercel → Logs) und dem Besucher mit Telefonnummer als Ausweg gemeldet.
import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { getSecret } from 'astro:env/server';
import { forms, mail, thankYouPath, type FormKey } from '../../data/forms';
import { site } from '../../data/site';
import * as hh from '../../content/haushaltshilfe';
import * as wg from '../../content/senioren-wg';
import * as kt from '../../content/kontakt';

export const prerender = false;

const FAIL = `Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns unter ${site.phone.label} an.`;
const INVALID = `Bitte prüfen Sie Ihre Angaben. Bei Fragen erreichen Sie uns unter ${site.phone.label}.`;

// ── Spamschutz: einfache Begrenzung je IP (max. 5 Anfragen in 10 Minuten) ──
const WINDOW = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > LIMIT;
}

// ── Feld-Definitionen: Beschriftung in der Mail, Pflicht, erlaubte Werte ──
type FieldDef = { key: string; label: string; required?: boolean; options?: string[]; multiple?: boolean; email?: boolean; max?: number };
const labels = (o: { label: string }[]) => o.map((x) => x.label);

const DEFS: Record<FormKey, FieldDef[]> = {
  haushaltshilfe: [
    { key: 'fuer_wen', label: 'Für wen', required: true, options: labels(hh.hero.step1Options) },
    { key: 'ort', label: 'Ort', required: true, options: labels(hh.hero.step2Options) },
    { key: 'leistungen', label: 'Gewünschte Unterstützung', required: true, options: labels(hh.hero.step3Options), multiple: true },
    { key: 'pflegegrad', label: 'Pflegegrad vorhanden', required: true, options: labels(hh.hero.step4Options) },
    { key: 'name', label: 'Name', required: true, max: 200 },
    { key: 'telefon', label: 'Telefon', required: true, max: 60 },
    { key: 'email', label: 'E-Mail', email: true, max: 200 },
    { key: 'erreichbarkeit', label: 'Beste Erreichbarkeit', required: true, options: labels(hh.hero.reachOptions) },
  ],
  seniorenWg: [
    { key: 'fuer_wen', label: 'Für wen', required: true, options: labels(wg.hero.step1Options) },
    { key: 'wohngemeinschaften', label: 'Gewünschte Wohngemeinschaften', required: true, options: labels(wg.hero.step2Options), multiple: true },
    { key: 'zeitpunkt', label: 'Einzugszeitpunkt', required: true, options: labels(wg.hero.step3Options) },
    { key: 'pflegegrad', label: 'Pflegegrad', required: true, options: labels(wg.hero.step4Options) },
    { key: 'name', label: 'Name', required: true, max: 200 },
    { key: 'telefon', label: 'Telefon', required: true, max: 60 },
    { key: 'email', label: 'E-Mail', email: true, max: 200 },
    { key: 'erreichbarkeit', label: 'Beste Erreichbarkeit', required: true, options: labels(wg.hero.reachOptions) },
    { key: 'anmerkung', label: 'Anmerkung', max: 5000 },
  ],
  kontakt: [
    { key: 'betreff', label: 'Worum geht es?', required: true, options: labels(kt.kontakt.subjectOptions) },
    { key: 'name', label: 'Name', required: true, max: 200 },
    { key: 'email', label: 'E-Mail', required: true, email: true, max: 200 },
    { key: 'telefon', label: 'Telefon', max: 60 },
    { key: 'nachricht', label: 'Nachricht', required: true, max: 5000 },
  ],
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const clean = (v: unknown, max = 500) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let body: Record<string, unknown>;
  try {
    const type = request.headers.get('content-type') || '';
    body = type.includes('application/json') ? await request.json() : Object.fromEntries((await request.formData()).entries());
  } catch {
    return json(400, { ok: false, error: INVALID });
  }

  const formKey = String(body.form || '') as FormKey;
  if (!(formKey in forms)) return json(400, { ok: false, error: INVALID });

  // Honeypot: unsichtbares Feld ausgefüllt → Bot. Freundlich „ok“ antworten, nichts senden.
  if (clean(body.website)) {
    console.warn('[anfrage] Honeypot ausgelöst', { form: formKey });
    return json(200, { ok: true, redirect: thankYouPath });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || clientAddress || 'unbekannt';
  if (rateLimited(ip)) {
    console.warn('[anfrage] Rate-Limit erreicht', { form: formKey });
    return json(429, { ok: false, error: `Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es in ein paar Minuten erneut oder rufen Sie uns unter ${site.phone.label} an.` });
  }

  // ── Serverseitige Prüfung ──
  const rows: { label: string; value: string }[] = [];
  const errors: string[] = [];
  const values: Record<string, string> = {};
  for (const def of DEFS[formKey]) {
    const raw = body[def.key];
    let value: string;
    if (def.multiple) {
      const arr = (Array.isArray(raw) ? raw : raw ? [raw] : []).map((x) => clean(x, 200)).filter(Boolean);
      if (def.options && arr.some((x) => !def.options!.includes(x))) errors.push(def.key);
      value = arr.join(', ');
    } else {
      value = clean(raw, def.max ?? 300);
      if (value && def.options && !def.options.includes(value)) errors.push(def.key);
    }
    if (def.required && !value) errors.push(def.key);
    if (def.email && value && !isEmail(value)) errors.push(def.key);
    values[def.key] = value;
    rows.push({ label: def.label, value: value || '–' });
  }
  if (body.datenschutz !== true && body.datenschutz !== 'true' && body.datenschutz !== 'ja') errors.push('datenschutz');

  if (errors.length) {
    console.warn('[anfrage] Ungültige Eingaben', { form: formKey, fields: errors });
    return json(422, { ok: false, error: INVALID, fields: errors });
  }
  rows.push({ label: 'Einwilligung Datenschutz', value: 'Ja' });

  // ── Herkunft der Anfrage (Anzeige, Kampagne) ──
  const tracking: { label: string; value: string }[] = [];
  if (body.tracking && typeof body.tracking === 'object') {
    for (const [k, v] of Object.entries(body.tracking as Record<string, unknown>).slice(0, 20)) {
      const key = clean(k, 40);
      if (/^(utm_[a-z_]+|gclid|gbraid|wbraid|fbclid|msclkid|seite|referrer)$/.test(key)) tracking.push({ label: key, value: clean(v, 300) });
    }
  }

  const cfg = forms[formKey];
  const when = new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/Berlin' }).format(new Date());
  // Betreff: „Neue Anfrage | Pflegedienst Jakubke - reinkober.com | Haushaltshilfe“
  const topic = formKey === 'kontakt' && values.betreff ? `${cfg.topic} – ${values.betreff}` : cfg.topic;
  const subject = `Neue Anfrage | ${mail.client} - reinkober.com | ${topic}`;

  const table = (list: { label: string; value: string }[]) =>
    list
      .map(
        (r) =>
          `<tr><td style="padding:8px 14px 8px 0;vertical-align:top;color:#4d6aa8;white-space:nowrap">${esc(r.label)}</td><td style="padding:8px 0;color:#003595;white-space:pre-wrap">${esc(r.value)}</td></tr>`,
      )
      .join('');

  const html = `<!doctype html><html lang="de"><body style="margin:0;padding:24px;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5">
<div style="max-width:640px;margin:0 auto;background:#fff;border-radius:14px;border-top:5px solid #FFDD00;padding:24px 28px">
<h1 style="margin:0 0 4px;font-size:20px;color:#003595">${esc(cfg.title)}</h1>
<p style="margin:0 0 18px;color:#4d6aa8">Eingegangen am ${esc(when)} über anfrage.ihr-pflegestuetzpunkt.de</p>
<table style="border-collapse:collapse;width:100%">${table(rows)}</table>
${values.email ? `<p style="margin:18px 0 0;color:#003595">Über „Antworten“ geht Ihre Mail direkt an ${esc(values.email)}.</p>` : `<p style="margin:18px 0 0;color:#003595">Keine E-Mail angegeben – bitte telefonisch zurückrufen.</p>`}
${tracking.length ? `<hr style="border:0;border-top:1px solid #e3e8f3;margin:22px 0 12px"><p style="margin:0 0 6px;font-size:13px;color:#4d6aa8">Herkunft</p><table style="border-collapse:collapse;width:100%;font-size:13px">${table(tracking)}</table>` : ''}
</div></body></html>`;

  const text = [
    cfg.title,
    `Eingegangen am ${when} über anfrage.ihr-pflegestuetzpunkt.de`,
    '',
    ...rows.map((r) => `${r.label}: ${r.value}`),
    ...(tracking.length ? ['', 'Herkunft:', ...tracking.map((r) => `${r.label}: ${r.value}`)] : []),
  ].join('\n');

  const apiKey = getSecret('RESEND_API_KEY');
  if (!apiKey) {
    console.error('[anfrage] RESEND_API_KEY fehlt – Anfrage NICHT versendet', { form: formKey, subject, text });
    return json(500, { ok: false, error: FAIL });
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: mail.from,
      to: [...cfg.recipients],
      subject,
      html,
      text,
      ...(values.email ? { replyTo: values.email } : {}),
      tags: [{ name: 'formular', value: formKey }],
    });
    if (error) {
      // Inhalt mitprotokollieren, damit die Anfrage im Vercel-Log wiederherstellbar ist
      console.error('[anfrage] Resend-Fehler – Anfrage NICHT versendet', { form: formKey, error, subject, text });
      return json(502, { ok: false, error: FAIL });
    }
    console.info('[anfrage] versendet', { form: formKey, id: data?.id });
    return json(200, { ok: true, redirect: thankYouPath });
  } catch (err) {
    console.error('[anfrage] Versand fehlgeschlagen – Anfrage NICHT versendet', { form: formKey, err: String(err), subject, text });
    return json(502, { ok: false, error: FAIL });
  }
};

export const ALL: APIRoute = () => json(405, { ok: false, error: 'Methode nicht erlaubt' });
