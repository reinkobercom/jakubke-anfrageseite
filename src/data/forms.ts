// ─────────────────────────────────────────────────────────────
// Formulare: Empfänger und Absender der Benachrichtigungs-Mails.
// Mehrere Empfänger einfach als weitere Einträge in der Liste.
// Nach dem Speichern baut Vercel die Seite automatisch neu.
// ─────────────────────────────────────────────────────────────

export const mail = {
  // Absender – die Domain muss in Resend verifiziert sein
  from: 'Reinkober Leadportal <leads@reinkober-leadportal.com>',
};

export const forms = {
  haushaltshilfe: {
    title: 'Haushaltshilfe – Anfrage',
    recipients: ['leads@reinkober.agency', 'info@ihr-pflegestuetzpunkt.de'],
  },
  seniorenWg: {
    title: 'Senioren-Wohngemeinschaften – Anfrage',
    recipients: ['info@ihr-pflegestuetzpunkt.de', 'leads@reinkober.agency'],
  },
  kontakt: {
    title: 'Kontaktformular',
    recipients: ['info@ihr-pflegestuetzpunkt.de', 'leads@reinkober.agency'],
  },
} as const;

export type FormKey = keyof typeof forms;

/** Seite, auf die nach erfolgreichem Absenden weitergeleitet wird */
export const thankYouPath = '/danke';
