// Texte der Seite /ambulante-pflege – ENTWURF zur Prüfung durch den Kunden.
// Grundlage: Angaben von ihr-pflegestuetzpunkt.de (Behandlungspflege, Leistungen der
// Pflegeversicherung, Palliative Versorgung, Ansprechpartner).
// Text in [[doppelten eckigen Klammern]] ist ein Platzhalter und erscheint gelb markiert.
import { images } from '../data/images';
import { yearsSinceFounding } from '../data/site';
import * as hh from './haushaltshilfe';

const PHONE = '(0 23 89) 900 520';
const PHONE_HREF = 'tel:+492389900520';
const CTA = 'Kostenlosen Rückruf anfordern';

export const meta = {
  title: 'Ambulante Pflege in Werne und Umgebung | Pflegedienst Jakubke',
  description:
    'Ambulante Pflege zuhause: Grundpflege, Behandlungspflege auf ärztliche Verordnung, Wundmanagement und palliative Versorgung vom Pflegedienst Constanze Jakubke aus Werne. Kostenloser Rückruf.',
};

export const hero = {
  logoAlt: 'Ambulanter und Palliativ-Pflegedienst Constanze Jakubke',
  eyebrow: 'Ambulanter Pflegedienst aus Werne',
  headline: 'Gute Pflege zuhause. Damit Ihre Eltern bleiben können, wo sie sich wohlfühlen.',
  subline:
    'Körperpflege, Behandlungspflege nach ärztlicher Verordnung und palliative Versorgung – von unserem Pflegedienst aus Werne. Je nach Leistung übernimmt die Pflegekasse oder die Krankenkasse die Kosten.',
  bullets: [
    { text: 'Behandlungspflege auf ärztliche Verordnung, abgerechnet mit der Krankenkasse' },
    { text: 'Wundmanagerinnen im Team für die Versorgung von Wunden' },
    { text: 'Seit 2015 anerkannter Palliativpflegedienst' },
  ],
  stats: [
    { value: String(yearsSinceFounding()), dynamicYears: true, label: 'Jahre in Werne' },
    { value: '135', label: 'Mitarbeitende' },
    { value: '10', label: 'Fachkräfte Palliative Care' },
  ],
  // Foto folgt (Hauptseite), bis dahin ohne Bild
  expertImage: undefined,
  expertName: 'Birgit Budde',
  expertRole: 'Pflegedienstleitung ambulante Pflege',
  phoneLabel: `Lieber direkt sprechen: ${PHONE}`,
  phoneHref: PHONE_HREF,
  formTitle: 'In 60 Sekunden zum kostenlosen Rückruf',
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
  step1Title: 'Für wen suchen Sie Pflege?',
  step1Options: [{ label: 'Für meine Eltern oder Angehörige' }, { label: 'Für mich selbst' }],
  step2Title: 'Welche Unterstützung wird gebraucht?',
  step2Hint: 'Mehrfachauswahl möglich',
  step2Options: [
    { label: 'Körperpflege und Grundpflege' },
    { label: 'Behandlungspflege (z. B. Medikamente, Spritzen, Verbände)' },
    { label: 'Wundversorgung' },
    { label: 'Palliative Versorgung' },
    { label: 'Beratungsbesuch nach § 37.3 SGB XI' },
    { label: 'Weiß ich noch nicht' },
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
  claim: 'Seit 1998 versorgen wir Menschen in Werne und Umgebung zuhause – von der Körperpflege bis zur palliativen Begleitung.',
  stats: [
    { value: String(yearsSinceFounding()), dynamicYears: true, suffix: ' Jahre', label: 'am Standort Werne' },
    { value: '135', suffix: '', label: 'Mitarbeitende im Team' },
    { value: '10', suffix: '', label: 'Fachkräfte mit Weiterbildung Palliative Care' },
    { value: '2015', suffix: '', label: 'als Palliativpflegedienst anerkannt' },
  ],
  bgColor: 'var(--color-kit-key1)',
  valueColor: 'var(--color-kit-key2)',
};

export const kostenuebernahme = {
  kicker: 'Wer bezahlt das?',
  headline: 'Je nach Leistung zahlt die Pflegekasse oder die Krankenkasse.',
  intro:
    'Viele Leistungen der ambulanten Pflege werden ganz oder teilweise übernommen. Im Rückruf klären wir kostenlos, was in Ihrem Fall gilt.',
  highlightValue: 'Pflegegrad 1 bis 5',
  highlightLabel: 'Die Höhe von Pflegegeld und Pflegesachleistung richtet sich nach dem Pflegegrad.',
  highlightFootnote: '[[Eigenanteil / Preise: Angabe vom Kunden (Preisliste ab 01.01.2025)]]',
  steps: [
    {
      title: 'Behandlungspflege über die Krankenkasse',
      text: 'Medikamentengabe, Verbände oder Injektionen verordnet der Haus- oder Facharzt. Die Kosten übernimmt in der Regel die Krankenkasse.',
    },
    {
      title: 'Grundpflege über die Pflegekasse',
      text: 'Körperpflege, Ernährung, Mobilisation und hauswirtschaftliche Versorgung rechnen wir als Pflegesachleistung ab – die Höhe hängt vom Pflegegrad ab.',
    },
    {
      title: 'Entlastungsbetrag nutzen',
      text: 'Den Entlastungsbetrag können Sie für unsere Alltags- und Seniorenbegleitung oder für die Haushaltshilfe einsetzen.',
    },
    {
      title: 'Beratungsbesuche nach § 37.3 SGB XI',
      text: 'Wer Pflegegeld bezieht, bekommt von uns die vorgeschriebenen Beratungsbesuche zuhause.',
    },
  ],
  ctaLabel: CTA,
  ctaHref: '#anfrage',
  ctaNote: 'Kostenlos und unverbindlich. Dauert 60 Sekunden.',
  bgColor: 'var(--color-kit-white)',
};

export const leistungen = {
  kicker: 'Unsere Leistungen',
  headline: 'Pflege, die zu Ihrem Alltag passt',
  intro: 'Sie sagen uns, was gebraucht wird. Wir stimmen die Einsätze mit Ihnen und den behandelnden Ärzten ab.',
  services: [
    { icon: 'heart', title: 'Grundpflege', text: 'Körperpflege wie Duschen, An- und Auskleiden, Hilfe beim Essen und bei der Mobilisation.' },
    { icon: 'check-circle', title: 'Behandlungspflege', text: 'Medikamente, Injektionen, Verbände, Kompressionsstrümpfe, medizinische Einreibungen sowie Blutdruck- und Blutzuckerkontrollen.' },
    { icon: 'shield', title: 'Wundmanagement', text: 'Phasengerechte, individuelle Wundversorgung durch unsere Wundmanagerinnen, in enger Abstimmung mit Angehörigen und Fachärzten.' },
    { icon: 'sparkle', title: 'Palliative Versorgung', text: 'Beratung, Begleitung und Versorgung schwerkranker Menschen – zuhause, in unseren Wohngemeinschaften und im Hospiz am Wallgang.' },
    { icon: 'home', title: 'Hauswirtschaftliche Versorgung', text: 'Einkauf, Reinigung des Wohnbereichs und Wäschepflege als Teil der Pflegeleistungen.' },
    { icon: 'clock', title: 'Beratungsbesuche', text: 'Beratungsbesuche nach § 37.3 SGB XI für alle, die Pflegegeld beziehen.' },
  ],
  ctaLabel: CTA,
  ctaHref: '#anfrage',
  ctaNote: 'Auch einzelne Leistungen sind möglich. Sagen Sie uns einfach, was Sie brauchen.',
  bgColor: 'var(--color-kit-light)',
};

export const menschen = {
  kicker: 'Die Menschen, die kommen',
  headline: 'Pflege braucht Zeit, Fachwissen und Vertrauen.',
  quote: '[[Zitat von Birgit Budde, Pflegedienstleitung – bitte vom Kunden]]',
  quoteName: 'Birgit Budde',
  quoteRole: 'Pflegedienstleitung ambulante Pflege',
  quoteImage: undefined,
  imageMain: images.begleitungSenioren.src,
  imageMainAlt: 'Mitarbeiterin begleitet zwei Seniorinnen im Alltag',
  imageSecond: images.pflegealltag.src,
  imageSecondAlt: 'Mitarbeiterin des Pflegedienstes Jakubke im Einsatz',
  imageThird: images.firmenwagen.src,
  imageThirdAlt: 'Dienstfahrzeug des Pflegedienstes Constanze Jakubke',
  points: [
    { text: 'Wundmanagerinnen im Team' },
    { text: 'Zehn Pflegefachkräfte mit Weiterbildung Palliative Care' },
    { text: 'Enge Zusammenarbeit mit Haus- und Fachärzten' },
    { text: 'Seit 2008 in der palliativen Pflege tätig' },
  ],
  ctaLabel: CTA,
  ctaHref: '#anfrage',
  phoneLabel: PHONE,
  phoneHref: PHONE_HREF,
  bgColor: 'var(--color-kit-dark)',
};

export const kundenstimmen = { ...hh.kundenstimmen, headline: 'Was Familien über uns sagen' };

export const einzugsgebiet = {
  ...hh.einzugsgebiet,
  intro: 'Wir arbeiten bewusst nur in unserer Region. Kurze Wege bedeuten pünktliche Einsätze. [[Einzugsgebiet der ambulanten Pflege bitte bestätigen]]',
  ctaLabel: CTA,
};

export const abschluss = {
  kicker: 'Ein Gedanke zum Schluss',
  headline: 'Je früher Sie anrufen, desto mehr Zeit bleibt für eine gute Planung.',
  body: 'Pflegebedarf entsteht oft plötzlich, nach einem Sturz oder einem Krankenhausaufenthalt. Ein kurzes Gespräch klärt, welche Unterstützung möglich ist und wer die Kosten übernimmt.',
  ctaLabel: CTA,
  ctaHref: '#anfrage',
  ctaNote: '60 Sekunden, kostenlos, unverbindlich',
  phoneIntro: 'Oder rufen Sie einfach an:',
  phoneLabel: PHONE,
  phoneHref: PHONE_HREF,
  reassurances: [{ text: 'Kostenloser Rückruf' }, { text: 'Unverbindliche Beratung' }, { text: 'Rückruf innerhalb von 24 Stunden' }],
  bgColor: 'var(--color-kit-key1)',
};

export const faq = {
  kicker: 'Häufige Fragen',
  headline: 'Das fragen uns Angehörige am häufigsten',
  image: images.firmenwagen.src,
  imageAlt: 'Dienstfahrzeug des Pflegedienstes Constanze Jakubke in Werne',
  boxTitle: 'Ihre Frage ist nicht dabei?',
  boxText: 'Stellen Sie sie uns direkt. Im Rückruf beantworten wir alles, auch wenn Sie sich am Ende anders entscheiden.',
  ctaLabel: CTA,
  ctaHref: '#anfrage',
  faqs: [
    { question: 'Wer bezahlt die Behandlungspflege?', answer: 'Behandlungspflege wird vom Haus- oder Facharzt verordnet. Die Kosten übernimmt in der Regel die Krankenkasse.' },
    { question: 'Was übernimmt die Pflegekasse?', answer: 'Bei vorhandenem Pflegegrad übernimmt die Pflegekasse Leistungen wie Körperpflege, Ernährung, Mobilisation und hauswirtschaftliche Versorgung als Pflegesachleistung. Die Höhe hängt vom Pflegegrad ab.' },
    { question: 'Was kostet die ambulante Pflege für uns?', answer: '[[Antwort vom Kunden – z. B. Eigenanteil, Verweis auf die Preisliste ab 01.01.2025]]' },
    { question: 'Wir haben noch keinen Pflegegrad. Was nun?', answer: '[[Antwort vom Kunden – z. B. Unterstützung beim Antrag]]' },
    { question: 'Wie schnell können Sie anfangen?', answer: '[[Antwort vom Kunden]]' },
    { question: 'Begleiten Sie auch am Lebensende?', answer: 'Ja. Wir sind seit 2008 in der palliativen Pflege tätig und seit 2015 als Palliativpflegedienst anerkannt. Zehn Pflegefachkräfte haben die Weiterbildung Palliative Care. Wir begleiten zuhause, in unseren Wohngemeinschaften und im Hospiz am Wallgang in Lünen.' },
    { question: 'Wofür kann ich den Entlastungsbetrag nutzen?', answer: 'Zum Beispiel für unsere Alltags- und Seniorenbegleitung oder für die Haushaltshilfe.' },
  ],
  bgColor: 'var(--color-kit-white)',
};

export const footer = hh.footer;
