// ─────────────────────────────────────────────────────────────
// Formulare: Empfänger und Absender der Benachrichtigungs-Mails.
// Mehrere Empfänger einfach als weitere Einträge in der Liste.
// Nach dem Speichern baut Vercel die Seite automatisch neu.
// ─────────────────────────────────────────────────────────────

export const mail = {
  // Absender – die Domain muss in Resend verifiziert sein
  from: 'Reinkober Leadportal <leads@reinkober-leadportal.com>',
  // Betreff: „Neue Anfrage | Kundenname - reinkober.com | Thema“
  client: 'Pflegedienst Jakubke',
};

export const forms = {
  haushaltshilfe: {
    title: 'Haushaltshilfe – Anfrage',
    topic: 'Haushaltshilfe',
    recipients: ['leads@reinkober.agency', 'info@ihr-pflegestuetzpunkt.de'],
  },
  seniorenWg: {
    title: 'Senioren-Wohngemeinschaften – Anfrage',
    topic: 'Senioren-WG',
    recipients: ['info@ihr-pflegestuetzpunkt.de', 'leads@reinkober.agency'],
  },
  menueservice: {
    title: 'Menüservice – Anfrage',
    topic: 'Menüservice',
    recipients: ['info@ihr-pflegestuetzpunkt.de', 'leads@reinkober.agency'],
  },
  ambulantePflege: {
    title: 'Ambulante Pflege – Anfrage',
    topic: 'Ambulante Pflege',
    recipients: ['info@ihr-pflegestuetzpunkt.de', 'leads@reinkober.agency'],
  },
  betreutesWohnen: {
    title: 'Betreutes Wohnen – Anfrage',
    topic: 'Betreutes Wohnen',
    recipients: ['info@ihr-pflegestuetzpunkt.de', 'leads@reinkober.agency'],
  },
  kontakt: {
    title: 'Kontaktformular',
    topic: 'Kontaktformular', // + gewähltes Thema, z. B. „Kontaktformular – Bewerbung“
    recipients: ['info@ihr-pflegestuetzpunkt.de', 'leads@reinkober.agency'],
  },
} as const;

export type FormKey = keyof typeof forms;

/** Seite, auf die nach erfolgreichem Absenden weitergeleitet wird */
export const thankYouPath = '/danke';
