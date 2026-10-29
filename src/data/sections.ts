// ─────────────────────────────────────────────────────────────
// Sektionen ein- und ausschalten.
// true  = Sektion wird angezeigt
// false = Sektion ist ausgeblendet (Inhalt bleibt erhalten)
// Nach dem Speichern baut Vercel die Seite automatisch neu.
// ─────────────────────────────────────────────────────────────

export const sections = {
  // Startseite „/“ (Linkliste)
  start: {
    linktree: true, // Logo, Links, Instagram, Impressum/Datenschutz
  },

  // /haushaltshilfe
  haushaltshilfe: {
    hero: true, // Überschrift + 5-Schritt-Anfrageformular
    vertrauensleiste: true, // Blaues Band mit Zahlen (Jahre, Mitarbeitende …)
    kostenuebernahme: true, // „Was kostet das?“ – Pflegekasse, 131 €
    leistungen: true, // Sechs Leistungs-Kacheln
    menschen: true, // Fotos + Zitat Silke Hermans (dunkelblau)
    kundenstimmen: true, // Google-Bewertungen (Trustindex-Slider)
    einzugsgebiet: true, // Orte + Standorte in Werne
    abschluss: true, // Blauer Abschluss-Aufruf
    faq: true, // Häufige Fragen
    footer: true,
  },

  // /senioren-wg
  seniorenWg: {
    hero: true, // Überschrift + 5-Schritt-Anfrageformular
    vertrauensleiste: true, // Blaues Band mit Zahlen
    wgStattHeim: true, // Vergleich Pflegeheim / WG
    haeuser: true, // Die sechs Wohngemeinschaften
    betreuungskonzept: true, // Betreuungskonzept + Fotos (dunkelblau)
    ablauf: true, // Drei Schritte + Ansprechpartnerin
    abschluss: true, // Blauer Abschluss-Aufruf
    faq: true, // Häufige Fragen
    footer: true,
  },

  // /kontakt
  kontakt: {
    kontakt: true, // Kontaktdaten + Kontaktformular
    footer: true,
  },
} as const;
