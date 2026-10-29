// ─────────────────────────────────────────────────────────────
// Zentrale Kontaktdaten. Was hier steht, erscheint überall auf der Seite.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Ambulanter Pflegedienst Constanze Jakubke',
  shortName: 'Pflegedienst Jakubke',
  url: 'https://anfrage.ihr-pflegestuetzpunkt.de',
  mainWebsite: 'https://www.ihr-pflegestuetzpunkt.de/',

  // Gründungsjahr – daraus wird „28 Jahre in Werne“ automatisch berechnet
  foundedYear: 1998,

  phone: {
    label: '(0 23 89) 900 520',
    href: 'tel:+492389900520',
    e164: '+492389900520',
  },
  email: 'info@ihr-pflegestuetzpunkt.de',

  address: {
    label: 'Steinstraße 42 bis 44, 59368 Werne',
    street: 'Steinstraße 42-44',
    zip: '59368',
    city: 'Werne',
  },
  secondAddress: 'Am Schwanenplatz 1, 59368 Werne',

  // Erreichbarkeit (Kontaktseite)
  hours: 'Montag bis Freitag, 8 bis 17 Uhr',
  openingHoursSpec: [{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' }],

  social: [{ label: 'Instagram', href: 'https://www.instagram.com/pflegedienst_jakubke', icon: 'instagram' }],

  legal: {
    impressum: 'https://www.ihr-pflegestuetzpunkt.de/impressum/',
    datenschutz: 'https://www.ihr-pflegestuetzpunkt.de/datenschutzerklaerung/',
  },
} as const;

/** Jahre seit Gründung, z. B. 28 im Jahr 2026 */
export const yearsSinceFounding = (): number => new Date().getFullYear() - site.foundedYear;
