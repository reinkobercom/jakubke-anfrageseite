// ─────────────────────────────────────────────────────────────
// Hinweise / Termine, die oben als schmales Band erscheinen
// (z. B. „Am 24.12. nur telefonisch erreichbar“).
//
// visible      – Hauptschalter (true/false)
// visibleFrom  – ab diesem Tag sichtbar (JJJJ-MM-TT), optional
// visibleUntil – bis einschließlich diesem Tag sichtbar, optional
// pages        – auf welchen Seiten, z. B. ['/haushaltshilfe'] – leer = alle
//
// Derzeit gibt es keine Hinweise. Beispiel zum Kopieren:
// {
//   text: 'Zwischen den Feiertagen sind wir telefonisch erreichbar.',
//   visible: true,
//   visibleFrom: '2026-12-20',
//   visibleUntil: '2027-01-02',
//   pages: [],
// },
// ─────────────────────────────────────────────────────────────

export type Announcement = {
  text: string;
  visible: boolean;
  visibleFrom?: string;
  visibleUntil?: string;
  pages?: string[];
  href?: string;
};

export const announcements: Announcement[] = [];

/** Liefert die Hinweise, die heute auf der angegebenen Seite sichtbar sind. */
export function activeAnnouncements(pathname: string, today = new Date()): Announcement[] {
  const day = today.toISOString().slice(0, 10);
  return announcements.filter((a) => {
    if (!a.visible) return false;
    if (a.visibleFrom && day < a.visibleFrom) return false;
    if (a.visibleUntil && day > a.visibleUntil) return false;
    if (a.pages && a.pages.length > 0 && !a.pages.includes(pathname)) return false;
    return true;
  });
}
