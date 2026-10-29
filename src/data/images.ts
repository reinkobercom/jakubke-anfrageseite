// ─────────────────────────────────────────────────────────────
// Alle Bilder mit Alternativtext (für Screenreader und Google).
// Neues Bild: Datei nach src/assets/images/ legen, hier eintragen.
// ─────────────────────────────────────────────────────────────
import type { ImageMetadata } from 'astro';

import begleitungSenioren from '../assets/images/begleitung-senioren.jpg';
import gabrielaCiernioch from '../assets/images/gabriela-ciernioch.jpg';
import firmenwagen from '../assets/images/jakubke-firmenwagen.jpg';
import pflegealltag from '../assets/images/pflegealltag.jpg';
import silkeHermans from '../assets/images/silke-hermans.jpg';
import silkeHermansPortrait from '../assets/images/silke-hermans-portrait.jpg';
import wgAussenansicht from '../assets/images/wg-aussenansicht.jpg';
import wgBrinkhof from '../assets/images/wg-brinkhof.jpg';
import wgFelix from '../assets/images/wg-felix.jpg';
import wgGemeinschaftsbereich from '../assets/images/wg-gemeinschaftsbereich.jpg';
import wgHerbstzeit from '../assets/images/wg-herbstzeit.jpg';
import wgHomannsHof from '../assets/images/wg-homanns-hof.jpg';
import wgHombrede from '../assets/images/wg-hombrede.jpg';
import wgJuffernkamp from '../assets/images/wg-juffernkamp.jpg';

export type Img = { src: ImageMetadata; alt: string };

export const images = {
  begleitungSenioren: { src: begleitungSenioren, alt: 'Mitarbeiterin begleitet zwei Seniorinnen im Alltag' },
  begleitungSeniorenWg: { src: begleitungSenioren, alt: 'Mitarbeiterin begleitet Bewohnerinnen im Alltag' },
  pflegealltag: { src: pflegealltag, alt: 'Mitarbeiterin des Pflegedienstes Jakubke im Einsatz' },
  firmenwagen: { src: firmenwagen, alt: 'Dienstfahrzeug des Pflegedienstes Constanze Jakubke' },
  firmenwagenWerne: { src: firmenwagen, alt: 'Dienstfahrzeug des Pflegedienstes Constanze Jakubke in Werne' },
  silkeHermans: { src: silkeHermans, alt: 'Silke Hermans' },
  silkeHermansPortrait: { src: silkeHermansPortrait, alt: 'Silke Hermans' },
  gabrielaCiernioch: { src: gabrielaCiernioch, alt: 'Gabriela Ciernioch' },
  wgAussenansicht: { src: wgAussenansicht, alt: 'Aussenansicht einer Senioren-Wohngemeinschaft' },
  wgGemeinschaftsbereich: { src: wgGemeinschaftsbereich, alt: 'Gemeinschaftsbereich einer Senioren-Wohngemeinschaft' },
  wgJuffernkamp: { src: wgJuffernkamp, alt: 'Wohngemeinschaft Juffernkamp in Werne' },
  wgBrinkhof: { src: wgBrinkhof, alt: 'Essbereich der Wohngemeinschaft Brinkhof in Werne' },
  wgHerbstzeit: { src: wgHerbstzeit, alt: 'Wohngemeinschaft HerbstZeit in Werne-Stockum' },
  wgFelix: { src: wgFelix, alt: 'Wohnbereich der Wohngemeinschaft Felix in Lünen-Brambauer' },
  wgHombrede: { src: wgHombrede, alt: 'Wohngemeinschaft Hombrede in Ascheberg-Herbern' },
  wgHombredeFaq: { src: wgHombrede, alt: 'Senioren-Wohngemeinschaft des Pflegedienstes Constanze Jakubke' },
  wgHomannsHof: { src: wgHomannsHof, alt: 'Wohngemeinschaft Homanns-Hof in Ascheberg-Herbern' },
} satisfies Record<string, Img>;
