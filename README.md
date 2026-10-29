# anfrage.ihr-pflegestuetzpunkt.de

Anfrage-Seiten des Ambulanten Pflegedienstes Constanze Jakubke – 1:1 aus Onepage übernommen,
gebaut mit [Astro](https://astro.build), gehostet auf Vercel.

| Seite | Adresse |
|---|---|
| Linkliste | `/` |
| Haushaltshilfe (mit 5-Schritt-Formular) | `/haushaltshilfe` |
| Senioren-Wohngemeinschaften (mit 5-Schritt-Formular) | `/senioren-wg` |
| Kontakt (mit Kontaktformular) | `/kontakt` |
| Dankeseite nach dem Absenden | `/danke` |

Alle Seiten stehen bewusst auf **noindex** (Anzeigen-Landingpages, wie bisher in Onepage).

---

## Inhalte pflegen (ohne Programmierkenntnisse)

Jede Änderung direkt auf GitHub im Browser machen („Edit“-Stift) und speichern („Commit changes“).
Vercel baut die Seite danach automatisch neu – nach ca. 1 Minute ist sie live.

| Was | Datei |
|---|---|
| Telefon, E-Mail, Adresse, Erreichbarkeit, Instagram, Gründungsjahr | `src/data/site.ts` |
| Sektionen ein-/ausschalten | `src/data/sections.ts` |
| Hinweis-Band oben (z. B. Feiertage) mit Zeitraum | `src/data/announcements.ts` |
| Bilder und Alternativtexte | `src/data/images.ts` (Bilddateien in `src/assets/images/`) |
| Formular-Empfänger und Absender | `src/data/forms.ts` |
| Texte der Seite Haushaltshilfe | `src/content/haushaltshilfe.ts` |
| Texte der Seite Senioren-WG | `src/content/senioren-wg.ts` |
| Texte Kontaktseite | `src/content/kontakt.ts` |
| Texte Linkliste | `src/content/start.ts` |
| Texte Dankeseite | `src/content/danke.ts` |

Wichtig beim Bearbeiten der Textdateien: Nur den Text zwischen den Anführungszeichen ändern,
Anführungszeichen und Kommas stehen lassen.

### Sektion ausschalten

In `src/data/sections.ts` den Wert von `true` auf `false` setzen, z. B.

```ts
kundenstimmen: false, // Google-Bewertungen (Trustindex-Slider)
```

### Formular-Empfänger ändern

In `src/data/forms.ts` die Liste `recipients` des jeweiligen Formulars anpassen:

```ts
haushaltshilfe: {
  title: 'Haushaltshilfe – Anfrage',
  recipients: ['leads@reinkober.agency', 'info@ihr-pflegestuetzpunkt.de'],
},
```

### Kundenstimmen (Google-Bewertungen)

Die Bewertungen kommen über Trustindex. Die beiden Widget-IDs stehen in
`src/content/haushaltshilfe.ts` unter `kundenstimmen` (`trustindexButton`, `trustindexSlider`).
Welche Bewertungen gezeigt werden, wird im Trustindex-Konto eingestellt.

---

## Formulare – wie sie funktionieren

- Alle drei Formulare senden an `src/pages/api/anfrage.ts` (Vercel-Funktion).
- Versand per [Resend](https://resend.com) von `leads@reinkober-leadportal.com`.
- „Antworten“ in der Mail geht direkt an die Adresse, die der Besucher eingetragen hat
  (bei Haushaltshilfe und WG ist die E-Mail optional – dann steht in der Mail „bitte telefonisch zurückrufen“).
- In der Mail stehen unten die Herkunftsdaten der Anzeige (UTM-Parameter, gclid/fbclid, Seite).
- Spamschutz: unsichtbares Honeypot-Feld + max. 5 Anfragen je IP in 10 Minuten.
- Pflichtfelder, E-Mail-Format und erlaubte Auswahlwerte werden zusätzlich auf dem Server geprüft.
- Nach erfolgreichem Versand: Weiterleitung auf `/danke`.
- Schlägt der Versand fehl, sieht der Besucher eine Fehlermeldung mit der Telefonnummer, und der
  komplette Inhalt der Anfrage steht im Vercel-Log (Projekt → Logs, Suche nach `[anfrage]`).
  So geht keine Anfrage verloren.

---

## Umgebungsvariablen (Vercel → Project → Settings → Environment Variables)

| Name | Wert | Umgebungen |
|---|---|---|
| `RESEND_API_KEY` | API-Key aus Resend (Sending access genügt) | Production, Preview |

Der Key gehört **nie** ins Repository. Für lokale Tests eine Datei `.env` anlegen (siehe `.env.example`) –
sie ist per `.gitignore` ausgeschlossen.

Die Absender-Domain `reinkober-leadportal.com` muss in Resend verifiziert sein.

---

## DNS-Umstellung (Domain anfrage.ihr-pflegestuetzpunkt.de)

Erst umstellen, wenn die Vercel-Vorschau geprüft ist und Testanfragen angekommen sind.

1. In Vercel: Project → Settings → Domains → `anfrage.ihr-pflegestuetzpunkt.de` (ist eingetragen).
   Vercel zeigt dort den nötigen DNS-Eintrag an.
2. Beim DNS-Anbieter der Domain `ihr-pflegestuetzpunkt.de`:
   - Den bisherigen Eintrag für **`anfrage`** (zeigt heute auf Onepage) entfernen.
   - Einen **CNAME** für `anfrage` auf den von Vercel angezeigten Wert anlegen
     (in der Regel `cname.vercel-dns.com` bzw. der projektspezifische Wert).
3. **Nicht anfassen:** MX- und TXT-Einträge der Hauptdomain sowie die Einträge von `@` und `www` –
   die gehören zur Hauptwebsite und zum E-Mail-Empfang.
4. Die Resend-Einträge betreffen nur `reinkober-leadportal.com`, nicht diese Domain.
5. Nach der Umstellung (meist wenige Minuten bis 1 Stunde) stellt Vercel das SSL-Zertifikat automatisch aus.
6. Erst danach Onepage kündigen.

---

## Technik

- Astro (statische Seiten), `@astrojs/vercel` nur für den Formular-Endpunkt
- Bilder werden beim Build automatisch in WebP und mehreren Größen erzeugt
- Schrift Fira Sans lokal eingebunden (keine Verbindung zu Google Fonts)
- Keine großen Skripte: Formulare, Akkordeon und Einblend-Effekte sind kleines Vanilla-JS
- Vercel Web Analytics (cookielos)

```bash
npm install
npm run dev      # lokal unter http://localhost:4321
npm run build    # Produktions-Build
```

Ursprüngliche Onepage-Struktur: Jede Sektion ist eine Komponente in `src/components/sections/`,
die Original-Styles liegen unverändert in `src/styles/sections/` und `src/styles/ui/`.
