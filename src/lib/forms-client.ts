// Formular-Logik im Browser (ohne Framework, ca. 3 KB).
// Verhalten 1:1 wie die Onepage-Formulare: Kacheln wählen, automatisch weiter,
// Pflichtfelder prüfen. Versand an /api/anfrage, danach Weiterleitung auf /danke.

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type Data = Record<string, string | string[] | boolean>;

function tracking(): Record<string, string> {
  const out: Record<string, string> = {};
  const q = new URLSearchParams(window.location.search);
  q.forEach((value, key) => {
    if (key.startsWith('utm_') || ['gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'].includes(key)) out[key] = value.slice(0, 300);
  });
  out.seite = window.location.pathname;
  if (document.referrer) out.referrer = document.referrer.slice(0, 300);
  return out;
}

function setPressed(btn: HTMLElement, on: boolean) {
  btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  const cls = btn.dataset.selectedClass;
  if (cls) btn.classList.toggle(cls, on);
}

/** Kacheln einer Gruppe auswerten: einfach → String, mehrfach → Liste */
function readOptions(form: HTMLElement): Data {
  const data: Data = {};
  form.querySelectorAll<HTMLElement>('[data-option]').forEach((btn) => {
    const name = btn.dataset.name!;
    const on = btn.getAttribute('aria-pressed') === 'true';
    if (btn.hasAttribute('data-multiple')) {
      if (name === 'datenschutz') {
        data[name] = on;
        return;
      }
      const list = (data[name] as string[]) || [];
      if (on) list.push(btn.dataset.value!);
      data[name] = list;
    } else if (on) {
      data[name] = btn.dataset.value!;
    } else if (!(name in data)) {
      data[name] = '';
    }
  });
  return data;
}

function readFields(form: HTMLFormElement): Data {
  const data: Data = {};
  form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[name], textarea[name]').forEach((el) => {
    data[el.name] = el.value;
  });
  return data;
}

function showFieldError(form: HTMLElement, name: string, msg: string | null) {
  const wrap = form.querySelector<HTMLElement>(`[data-field="${name}"]`);
  if (!wrap) return;
  const input = wrap.querySelector<HTMLElement>('input, textarea')!;
  const err = wrap.querySelector<HTMLElement>('[data-error]')!;
  const cls = wrap.dataset.invalidClass!;
  input.classList.toggle(cls, !!msg);
  input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  err.textContent = msg || '';
  err.hidden = !msg;
}

function showBox(form: HTMLElement, msg: string | null) {
  const box = form.querySelector<HTMLElement>('[data-error-box]');
  const text = form.querySelector<HTMLElement>('[data-error-message]');
  if (!box || !text) return;
  text.textContent = msg || '';
  box.hidden = !msg;
}

async function send(form: HTMLFormElement, payload: Data): Promise<{ ok: boolean; redirect?: string; error?: string }> {
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = await res.json().catch(() => ({}));
    return { ok: res.ok && json.ok === true, redirect: json.redirect, error: json.error };
  } catch {
    return { ok: false };
  }
}

function bindOptions(form: HTMLElement, onSingleInStep: (btn: HTMLElement) => void, onChange: () => void) {
  form.querySelectorAll<HTMLElement>('[data-option]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      if (btn.hasAttribute('data-multiple')) {
        setPressed(btn, btn.getAttribute('aria-pressed') !== 'true');
      } else {
        form.querySelectorAll<HTMLElement>(`[data-option][data-name="${name}"]`).forEach((b) => setPressed(b, b === btn));
        onSingleInStep(btn);
      }
      onChange();
    });
  });
}

export function initMultistepForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-multistep-form]').forEach((form) => {
    if (form.dataset.ready) return;
    form.dataset.ready = '1';

    const total = Number(form.dataset.total);
    const steps = [...form.querySelectorAll<HTMLElement>('[data-step]')];
    const back = form.querySelector<HTMLButtonElement>('[data-back]')!;
    const next = form.querySelector<HTMLButtonElement>('[data-next]')!;
    const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
    const submitText = form.querySelector<HTMLElement>('[data-submit-text]')!;
    const fill = form.querySelector<HTMLElement>('[data-progress]')!;
    const current = form.querySelector<HTMLElement>('[data-step-current]')!;
    let step = 0;
    let busy = false;

    const canContinue = () => {
      const el = steps[step];
      if (!el || el.hasAttribute('data-contact')) return true;
      return el.querySelector('[data-option][aria-pressed="true"]') !== null;
    };

    const render = () => {
      fill.style.width = `${((step + 1) / total) * 100}%`;
      current.textContent = String(step + 1);
      back.hidden = step === 0;
      const last = step === total - 1;
      next.hidden = last;
      submit.hidden = !last;
      next.disabled = !canContinue();
    };

    const go = (to: number) => {
      to = Math.max(0, Math.min(to, total - 1));
      if (to === step) return;
      const from = steps[step];
      const target = steps[to];
      const show = () => {
        from.hidden = true;
        target.hidden = false;
        step = to;
        render();
        if (!reduceMotion()) {
          target.animate([{ opacity: 0, transform: 'translateX(18px)' }, { opacity: 1, transform: 'none' }], { duration: 240, easing: 'ease-out' });
        }
      };
      if (reduceMotion()) return show();
      from.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(-18px)' }], { duration: 240, easing: 'ease-out' }).onfinish = show;
    };

    bindOptions(
      form,
      (btn) => {
        // Einfachauswahl in einem Frage-Schritt → nach 190 ms automatisch weiter (wie im Original)
        const inStep = btn.closest<HTMLElement>('[data-step]');
        if (inStep && !inStep.hasAttribute('data-contact') && !inStep.hasAttribute('data-multiple')) {
          window.setTimeout(() => go(step + 1), 190);
        }
      },
      () => render(),
    );

    next.addEventListener('click', () => canContinue() && go(step + 1));
    back.addEventListener('click', () => go(step - 1));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (busy) return;
      if (step !== total - 1) return go(step + 1);
      const requiredError = form.dataset.requiredError!;
      const fields = readFields(form);
      const opts = readOptions(form);

      let invalid = false;
      for (const name of ['name', 'telefon']) {
        const empty = String(fields[name] || '').trim() === '';
        showFieldError(form, name, empty ? requiredError : null);
        invalid ||= empty;
      }
      const email = String(fields.email || '').trim();
      if (email && !isEmail(email)) {
        showFieldError(form, 'email', requiredError);
        invalid = true;
      } else showFieldError(form, 'email', null);
      if (invalid) return showBox(form, null);
      if (!opts.erreichbarkeit || opts.datenschutz !== true) return showBox(form, requiredError);

      showBox(form, null);
      busy = true;
      submit.disabled = true;
      submitText.textContent = form.dataset.sendingLabel!;
      const result = await send(form, { form: form.dataset.form!, ...opts, ...fields, tracking: tracking() as any });
      if (result.ok) {
        window.location.href = result.redirect || '/danke';
        return;
      }
      busy = false;
      submit.disabled = false;
      submitText.textContent = form.dataset.submitLabel!;
      showBox(form, result.error || form.dataset.errorText!);
    });

    render();
  });
}

export function initContactForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-contact-form]').forEach((form) => {
    if (form.dataset.ready) return;
    form.dataset.ready = '1';
    const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
    const submitText = form.querySelector<HTMLElement>('[data-submit-text]')!;
    let busy = false;

    bindOptions(form, () => {}, () => {});

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (busy) return;
      const requiredError = form.dataset.requiredError!;
      const fields = readFields(form);
      const opts = readOptions(form);

      let invalid = false;
      const check = (name: string, bad: boolean) => {
        showFieldError(form, name, bad ? requiredError : null);
        invalid ||= bad;
      };
      check('name', String(fields.name || '').trim() === '');
      check('email', !isEmail(String(fields.email || '')));
      check('nachricht', String(fields.nachricht || '').trim() === '');
      const tel = String(fields.telefon || '').trim();
      if (invalid) return showBox(form, null);
      if (!opts.betreff || opts.datenschutz !== true) return showBox(form, form.dataset.consentError!);

      showBox(form, null);
      busy = true;
      submit.disabled = true;
      submitText.textContent = form.dataset.sendingLabel!;
      const result = await send(form, { form: 'kontakt', ...opts, ...fields, telefon: tel, tracking: tracking() as any });
      if (result.ok) {
        window.location.href = result.redirect || '/danke';
        return;
      }
      busy = false;
      submit.disabled = false;
      submitText.textContent = form.dataset.submitLabel!;
      showBox(form, result.error || form.dataset.errorText!);
    });
  });
}
