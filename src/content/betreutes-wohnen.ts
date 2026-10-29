// Texte der Seite /betreutes-wohnen – ENTWURF zur Prüfung durch den Kunden.
// Grundlage: ihr-pflegestuetzpunkt.de/betreutes-wohnen (Werne + Hamm, Pflegedienst im Haus,
// Ansprechpartnerin Tabea Böttcher). Die Hauptseite enthält nur wenige Fakten,
// daher sind viele Stellen als [[Platzhalter]] markiert (erscheinen gelb).
import { images } from '../data/images';
import { yearsSinceFounding } from '../data/site';
import * as hh from './haushaltshilfe';

const PHONE = '(0 23 89) 900 520';
const PHONE_HREF = 'tel:+492389900520';
const CTA = 'Beratung anfragen';

export const meta = {
  title: 'Betreutes Wohnen in Werne und Hamm | Pflegedienst Jakubke',
  description:
    'Betreutes Wohnen in Werne und Hamm: eigene Wohnung mit ambulantem Pflegedienst im Haus. Selbstständig leben, Unterstützung, wenn sie gebraucht wird. Jetzt kostenlos beraten lassen.',
};

export const hero = {
  logoAlt: 'Ambulanter und Palliativ-Pflegedienst Constanze Jakubke',
  eyebrow: 'Wohnanlagen in Werne und Hamm',
  headline: 'Die eigene Wohnung behalten. Und Hilfe im Haus, wenn sie gebraucht wird.',
  subline:
    'In unseren Wohnanlagen leben Sie selbstständig in Ihrer eigenen Wohnung – mit unserem ambulanten Pflegedienst direkt im Haus und einem vielseitigen Betreuungsangebot.',
  bullets: [
    { text: 'Eigene Wohnung, so selbstbestimmt wie möglich' },
    { text: 'Ambulanter Pflegedienst direkt in der Wohnanlage' },
    { text: '[[Weiterer Vorteil vom Kunden, z. B. Notruf, Gemeinschaftsräume]]' },
  ],
  stats: [
    { value: String(yearsSinceFounding()), dynamicYears: true, label: 'Jahre in Werne' },
    { value: '2', label: 'Standorte' },
    { value: '[[?]]', label: 'Wohnungen' },
  ],
  expertImage: undefined,
  expertName: 'Tabea Böttcher',
  expertRole: 'Ansprechpartnerin Betreutes Wohnen',
  phoneLabel: `Lieber direkt sprechen: ${PHONE}`,
  phoneHref: PHONE_HREF,
  formTitle: 'Beratung zum Betreuten Wohnen anfragen',
  formSubtitle: 'Drei kurze Schritte. Danach melden wir uns persönlich bei Ihnen.',
  stepLabel: 'Schritt',
  ofLabel: 'von',
  disclaimer: 'Kostenlos und unverbindlich. Rückruf innerhalb von 24 Stunden an Werktagen.',
  backLabel: 'Zurück',
  nextLabel: 'Weiter',
  submitLabel: CTA,
  sendingLabel: 'Wird gesendet ...',
  errorText: `Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns unter ${PHONE} an.`,
  requiredError: 'Bitte ausfüllen',
  step1Title: 'Für wen suchen Sie eine Wohnung?',
  step1Options: [
    { label: 'Für meine Mutter oder meinen Vater' },
    { label: 'Für einen anderen Angehörigen' },
    { label: 'Für mich selbst' },
  ],
  step2Title: 'Welcher Standort kommt infrage?',
  step2Hint: 'Mehrfachauswahl möglich',
  step2Options: [{ label: 'Werne' }, { label: 'Hamm' }, { label: 'Noch offen, bitte beraten' }],
  kontaktTitle: 'Wen dürfen wir zurückrufen?',
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
  claim: 'Seit 1998 begleiten wir Menschen in Werne und Umgebung – zuhause, in unseren Wohngemeinschaften und im Betreuten Wohnen.',
  stats: [
    { value: String(yearsSinceFounding()), dynamicYears: true, suffix: ' Jahre', label: 'am Standort Werne' },
    { value: '135', suffix: '', label: 'Mitarbeitende im Team' },
    { value: '2', suffix: '', label: 'Standorte: Werne und Hamm' },
    { value: '6', suffix: '', label: 'eigene Senioren-Wohngemeinschaften' },
  ],
  bgColor: 'var(--color-kit-key1)',
  valueColor: 'var(--color-kit-key2)',
};

export const kostenuebernahme = {
  kicker: 'So funktioniert es',
  headline: 'Selbstständig wohnen, mit Sicherheit im Rücken.',
  intro:
    'Betreutes Wohnen ist für Menschen, die je nach Lebenslage unterschiedliche Hilfe brauchen. Ziel ist größtmögliche Selbstständigkeit – und Unterstützung genau dort, wo sie nötig ist.',
  highlightValue: '[[Miete / Betreuungspauschale]]',
  highlightLabel: '[[Kosten und Leistungen der Grundbetreuung – Angabe vom Kunden]]',
  highlightFootnote: '[[Hinweis z. B. zu Wohnberechtigungsschein oder Zuschüssen]]',
  steps: [
    { title: 'Beratung und Rückruf', text: 'Wir rufen Sie an, klären Ihre Situation und sagen offen, an welchem Standort etwas frei ist oder frei wird. [[Ablauf bitte bestätigen]]' },
    { title: 'Besichtigung', text: '[[Ablauf der Besichtigung – Angabe vom Kunden]]' },
    { title: 'Einzug', text: '[[Ablauf Vertrag und Einzug – Angabe vom Kunden]]' },
    { title: 'Pflege, wenn sie gebraucht wird', text: 'Unser ambulanter Pflegedienst ist direkt im Haus. Pflegeleistungen werden – je nach Leistung – mit der Pflege- oder Krankenkasse abgerechnet.' },
  ],
  ctaLabel: CTA,
  ctaHref: '#anfrage',
  ctaNote: 'Kostenlos und unverbindlich. Dauert 60 Sekunden.',
  bgColor: 'var(--color-kit-white)',
};

export const leistungen = {
  kicker: 'Das bietet das Betreute Wohnen',
  headline: 'Eigene vier Wände – und alles Wichtige ganz nah',
  intro: 'Sie leben in Ihrer eigenen Wohnung und entscheiden selbst, welche Unterstützung Sie in Anspruch nehmen.',
  services: [
    { icon: 'home', title: 'Eigene Wohnung', text: 'Ihr eigenes Zuhause mit Ihren eigenen Möbeln. [[Größe / Ausstattung der Wohnungen]]' },
    { icon: 'heart', title: 'Pflegedienst im Haus', text: 'Unser ambulanter Pflegedienst ist in der Wohnanlage integriert – kurze Wege, wenn Hilfe gebraucht wird.' },
    { icon: 'sparkle', title: 'Betreuungsangebot', text: 'Ein vielseitiges Betreuungsangebot für Austausch und Gemeinschaft. [[Beispiele vom Kunden]]' },
    { icon: 'shield', title: '[[Sicherheit, z. B. Hausnotruf]]', text: '[[Angabe vom Kunden]]' },
    { icon: 'clock', title: '[[Service, z. B. Hausmeister, Reinigung]]', text: '[[Angabe vom Kunden]]' },
    { icon: 'check-circle', title: 'Selbstbestimmt leben', text: 'So viel Selbstständigkeit wie möglich, so viel Unterstützung wie nötig.' },
  ],
  ctaLabel: CTA,
  ctaHref: '#anfrage',
  ctaNote: 'Wir beraten Sie gern zu freien Wohnungen und zu den Kosten.',
  bgColor: 'var(--color-kit-light)',
};

export const menschen = {
  kicker: 'Ihre Ansprechpartnerin',
  headline: 'Persönlich beraten, bevor Sie sich entscheiden.',
  quote: '[[Zitat von Tabea Böttcher – bitte vom Kunden]]',
  quoteName: 'Tabea Böttcher',
  quoteRole: 'Ansprechpartnerin Betreutes Wohnen',
  quoteImage: undefined,
  // Fotos der Wohnanlagen folgen von der Hauptseite / vom Kunden
  imageMain: images.begleitungSenioren.src,
  imageMainAlt: 'Mitarbeiterin begleitet zwei Seniorinnen im Alltag',
  imageSecond: images.pflegealltag.src,
  imageSecondAlt: 'Mitarbeiterin des Pflegedienstes Jakubke im Einsatz',
  imageThird: images.firmenwagen.src,
  imageThirdAlt: 'Dienstfahrzeug des Pflegedienstes Constanze Jakubke',
  points: [
    { text: 'Ambulanter Pflegedienst direkt im Haus' },
    { text: 'Vielseitiges Betreuungsangebot' },
    { text: 'Wohnanlagen in Werne und Hamm' },
    { text: '[[Weiterer Punkt vom Kunden]]' },
  ],
  ctaLabel: CTA,
  ctaHref: '#anfrage',
  phoneLabel: PHONE,
  phoneHref: PHONE_HREF,
  bgColor: 'var(--color-kit-dark)',
};

export const kundenstimmen = { ...hh.kundenstimmen, headline: 'Was Familien über uns sagen' };

export const einzugsgebiet = {
  kicker: 'Standorte',
  headline: 'Unsere Wohnanlagen',
  intro: 'Betreutes Wohnen bieten wir an zwei Standorten an.',
  places: [{ name: 'Werne' }, { name: 'Hamm' }],
  noteTitle: 'Noch unsicher, welcher Standort passt?',
  noteText: 'Fragen Sie trotzdem an. Wir beraten Sie zu beiden Standorten und auch zu unseren Senioren-Wohngemeinschaften.',
  addressTitle: 'Adressen der Wohnanlagen',
  addressOne: '[[Adresse Wohnanlage Werne]]',
  addressTwo: '[[Adresse Wohnanlage Hamm]]',
  ctaLabel: CTA,
  ctaHref: '#anfrage',
  bgColor: 'var(--color-kit-light)',
};

export const abschluss = {
  kicker: 'Ein Gedanke zum Schluss',
  headline: 'Wer sich früh umschaut, kann in Ruhe wählen.',
  body: 'Ein Beratungsgespräch verpflichtet zu nichts. Es verschafft Ihnen nur die Möglichkeit, die Wohnanlage kennenzulernen und in Ruhe zu entscheiden.',
  ctaLabel: CTA,
  ctaHref: '#anfrage',
  ctaNote: '60 Sekunden, kostenlos, unverbindlich',
  phoneIntro: 'Oder rufen Sie einfach an:',
  phoneLabel: PHONE,
  phoneHref: PHONE_HREF,
  reassurances: [{ text: 'Unverbindliche Beratung' }, { text: 'Beide Standorte gleichzeitig anfragen' }, { text: 'Rückruf innerhalb von 24 Stunden' }],
  bgColor: 'var(--color-kit-key1)',
};

export const faq = {
  kicker: 'Häufige Fragen',
  headline: 'Das fragen uns Angehörige vor dem Einzug',
  image: images.firmenwagen.src,
  imageAlt: 'Dienstfahrzeug des Pflegedienstes Constanze Jakubke in Werne',
  boxTitle: 'Ihre Frage ist nicht dabei?',
  boxText: 'Stellen Sie sie uns direkt. Im Rückruf beantworten wir alles, auch wenn Sie sich am Ende anders entscheiden.',
  ctaLabel: CTA,
  ctaHref: '#anfrage',
  faqs: [
    { question: 'Was ist der Unterschied zur Senioren-WG?', answer: 'Im Betreuten Wohnen leben Sie in Ihrer eigenen Wohnung und nehmen Pflege und Betreuung bei Bedarf in Anspruch. In unseren Senioren-Wohngemeinschaften leben mehrere Menschen in einer Gemeinschaft zusammen, mit Betreuung rund um die Uhr.' },
    { question: 'Was kostet eine Wohnung?', answer: '[[Antwort vom Kunden]]' },
    { question: 'Wird ein Wohnberechtigungsschein benötigt?', answer: '[[Antwort vom Kunden]]' },
    { question: 'Gibt es aktuell freie Wohnungen?', answer: '[[Antwort vom Kunden]]' },
    { question: 'Was passiert, wenn mehr Pflege gebraucht wird?', answer: 'Unser ambulanter Pflegedienst ist direkt im Haus und kann die Pflege übernehmen. [[Bitte ergänzen, z. B. Grenzen der Versorgung]]' },
    { question: 'Kann ich meinen eigenen Pflegedienst behalten?', answer: '[[Antwort vom Kunden]]' },
  ],
  bgColor: 'var(--color-kit-white)',
};

export const footer = hh.footer;
