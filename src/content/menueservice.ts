// Texte der Seite /menueservice – ENTWURF zur Prüfung durch den Kunden (kompakte Seite).
// Grundlage: ihr-pflegestuetzpunkt.de/menueservice (warmes Mittagessen täglich 11–13 Uhr,
// Speisepläne auf Anfrage, kostenloses Probeessen, Zuschüsse nach SGB XII).
// Text in [[doppelten eckigen Klammern]] ist ein Platzhalter und erscheint gelb markiert.
import { images } from '../data/images';
import { yearsSinceFounding } from '../data/site';
import * as hh from './haushaltshilfe';

const PHONE = '(0 23 89) 900 520';
const PHONE_HREF = 'tel:+492389900520';
const CTA = 'Kostenloses Probeessen anfragen';

export const meta = {
  title: 'Menüservice in Werne und Umgebung | Pflegedienst Jakubke',
  description:
    'Warmes Mittagessen frei Haus: Der Menüservice des Pflegedienstes Constanze Jakubke liefert täglich zwischen 11 und 13 Uhr. Probeessen kostenlos, Speisepläne auf Anfrage.',
};

export const hero = {
  logoAlt: 'Ambulanter und Palliativ-Pflegedienst Constanze Jakubke',
  eyebrow: 'Menüservice aus Werne',
  headline: 'Jeden Tag ein warmes Mittagessen. Direkt an die Haustür.',
  subline:
    'Unser Menüservice liefert täglich zwischen 11 und 13 Uhr ein warmes Mittagessen zu Ihnen oder Ihren Eltern nach Hause. Probieren Sie es aus – das erste Essen ist kostenlos.',
  bullets: [
    { text: 'Warmes Mittagessen, geliefert zwischen 11 und 13 Uhr' },
    { text: 'Kostenloses Probeessen für Interessenten' },
    { text: 'Speisepläne schicken wir Ihnen gern zu' },
  ],
  stats: [
    { value: '11–13', label: 'Uhr Lieferzeit' },
    { value: '0 €', label: 'Probeessen' },
    { value: String(yearsSinceFounding()), dynamicYears: true, label: 'Jahre in Werne' },
  ],
  expertImage: undefined,
  expertName: 'Menüservice',
  expertRole: 'Pflegedienst Constanze Jakubke',
  phoneLabel: `Lieber direkt sprechen: ${PHONE}`,
  phoneHref: PHONE_HREF,
  formTitle: 'Probeessen und Speiseplan anfragen',
  formSubtitle: 'Drei kurze Schritte. Danach melden wir uns persönlich bei Ihnen.',
  stepLabel: 'Schritt',
  ofLabel: 'von',
  disclaimer: 'Kostenlos und unverbindlich. Rückruf innerhalb von 24 Stunden an Werktagen.',
  backLabel: 'Zurück',
  nextLabel: 'Weiter',
  submitLabel: 'Anfrage senden',
  sendingLabel: 'Wird gesendet ...',
  errorText: `Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns unter ${PHONE} an.`,
  requiredError: 'Bitte ausfüllen',
  step1Title: 'Für wen ist das Essen?',
  step1Options: [{ label: 'Für meine Eltern oder Angehörige' }, { label: 'Für mich selbst' }],
  step2Title: 'Was möchten Sie?',
  step2Hint: 'Mehrfachauswahl möglich',
  step2Options: [
    { label: 'Kostenloses Probeessen' },
    { label: 'Speisepläne zugeschickt bekommen' },
    { label: 'Regelmäßige Lieferung starten' },
    { label: 'Fragen zu Zuschüssen' },
  ],
  kontaktTitle: 'Wohin dürfen wir zurückrufen?',
  nameLabel: 'Ihr Name',
  namePlaceholder: 'Maria Musterfrau',
  phoneFieldLabel: 'Telefonnummer',
  phonePlaceholder: '0170 1234567',
  emailLabel: 'E-Mail (optional)',
  emailPlaceholder: 'maria@beispiel.de',
  reachLabel: 'Wann erreichen wir Sie am besten?',
  reachOptions: hh.hero.reachOptions,
  consentText: hh.hero.consentText,
  consentLinkLabel: hh.hero.consentLinkLabel,
  consentLinkHref: hh.hero.consentLinkHref,
  bgColor: 'var(--color-kit-light)',
  cardColor: 'var(--color-kit-white)',
  anchorId: 'anfrage',
};

export const vertrauensleiste = {
  kicker: 'Ambulanter und Palliativ-Pflegedienst Constanze Jakubke',
  claim: 'Seit 1998 kümmern wir uns um Menschen in Werne und Umgebung. Der Menüservice ist Teil davon.',
  stats: [
    { value: String(yearsSinceFounding()), dynamicYears: true, suffix: ' Jahre', label: 'am Standort Werne' },
    { value: '135', suffix: '', label: 'Mitarbeitende im Team' },
    { value: '11', suffix: ' Uhr', label: 'ab dann warm geliefert, bis 13 Uhr' },
    { value: '0', suffix: ' €', label: 'für das Probeessen' },
  ],
  bgColor: 'var(--color-kit-key1)',
  valueColor: 'var(--color-kit-key2)',
};

export const leistungen = {
  kicker: 'So funktioniert es',
  headline: 'Ein warmes Essen am Tag – ohne Einkaufen und Kochen',
  intro: 'Sie sagen uns, für wen das Essen ist und ab wann. Den Rest übernehmen wir.',
  services: [
    { icon: 'utensils', title: 'Warm geliefert', text: 'Wir liefern täglich zwischen 11 und 13 Uhr ein warmes Mittagessen an Ihre Adresse.' },
    { icon: 'sparkle', title: 'Probeessen kostenlos', text: 'Interessenten liefern wir gern ein kostenloses Probeessen – so können Sie in Ruhe testen.' },
    { icon: 'check-circle', title: 'Speisepläne', text: 'Bei Interesse schicken wir Ihnen die aktuellen Speisepläne zu. [[Auswahl, z. B. Anzahl Menüs, Schonkost – Angabe vom Kunden]]' },
    { icon: 'heart', title: 'Zuschüsse möglich', text: 'Bedürftige können Zuschüsse nach SGB XII beantragen. [[Paragraf bitte prüfen – Hauptseite nennt § 79 SGB XII]]' },
    { icon: 'home', title: 'Liefergebiet', text: '[[Orte, in die geliefert wird – Angabe vom Kunden]]' },
    { icon: 'clock', title: 'Preis', text: '[[Preis pro Menü – Angabe vom Kunden]]' },
  ],
  ctaLabel: CTA,
  ctaHref: '#anfrage',
  ctaNote: 'Kostenlos und unverbindlich. Wir melden uns persönlich bei Ihnen.',
  bgColor: 'var(--color-kit-light)',
};

export const kundenstimmen = { ...hh.kundenstimmen, headline: 'Was Familien über uns sagen' };

export const faq = {
  kicker: 'Häufige Fragen',
  headline: 'Das fragen uns Angehörige zum Menüservice',
  image: images.firmenwagen.src,
  imageAlt: 'Dienstfahrzeug des Pflegedienstes Constanze Jakubke in Werne',
  boxTitle: 'Ihre Frage ist nicht dabei?',
  boxText: 'Rufen Sie uns an oder fordern Sie einen Rückruf an. Wir beantworten alles gern.',
  ctaLabel: CTA,
  ctaHref: '#anfrage',
  faqs: [
    { question: 'Wann wird geliefert?', answer: 'Wir liefern täglich zwischen 11 und 13 Uhr ein warmes Mittagessen. [[Bitte bestätigen: auch am Wochenende und an Feiertagen?]]' },
    { question: 'Kann ich das Essen erst einmal testen?', answer: 'Ja. Interessenten liefern wir gern ein kostenloses Probeessen.' },
    { question: 'Was kostet ein Essen?', answer: '[[Antwort vom Kunden]]' },
    { question: 'Gibt es Zuschüsse?', answer: 'Bedürftige können Zuschüsse nach SGB XII beantragen. [[Paragraf bitte prüfen]]' },
    { question: 'Kann ich auch nur an einzelnen Tagen bestellen?', answer: '[[Antwort vom Kunden]]' },
    { question: 'In welche Orte liefern Sie?', answer: '[[Antwort vom Kunden]]' },
  ],
  bgColor: 'var(--color-kit-white)',
};

export const footer = hh.footer;
