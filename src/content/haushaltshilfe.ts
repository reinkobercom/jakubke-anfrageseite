import { images } from '../data/images';
import { yearsSinceFounding } from '../data/site';

// Texte der Seite – 1:1 aus Onepage übernommen. Hier pflegen.

export const hero = {
  "logoAlt": "Ambulanter und Palliativ-Pflegedienst Constanze Jakubke",
  "eyebrow": "Werne, Selm, Lünen, Bergkamen, Kamen und Umgebung",
  "headline": "Wir kümmern uns um den Haushalt. Sie haben Zeit für Ihre Eltern.",
  "subline": "Reinigung, Wäsche, Einkauf und Arztbegleitung – zuhause bei Ihren Eltern oder bei Ihnen selbst. Ab Pflegegrad 1 übernimmt die Pflegekasse in den meisten Fällen die Kosten.",
  "bullets": [
    {
      "text": "Feste Ansprechpartnerin statt wechselnder Gesichter"
    },
    {
      "text": "Ab Pflegegrad 1 übernimmt die Pflegekasse bis zu 131 Euro im Monat"
    },
    {
      "text": "Start in der Regel innerhalb weniger Tage, ohne lange Vertragsbindung"
    }
  ],
  "stats": [
    {
      "value": String(yearsSinceFounding()),
      "dynamicYears": true,
      "label": "Jahre in Werne"
    },
    {
      "value": "135",
      "label": "Mitarbeitende"
    },
    {
      "value": "9",
      "label": "Orte im Einzugsgebiet"
    }
  ],
  "expertImage": images.silkeHermansPortrait.src,
  "expertName": "Silke Hermans",
  "expertRole": "Teamleitung Housekeeping Service",
  "phoneLabel": "Lieber direkt sprechen: (0 23 89) 900 520",
  "phoneHref": "tel:+492389900520",
  "formTitle": "In 60 Sekunden zum kostenlosen Rückruf",
  "formSubtitle": "Fünf kurze Fragen. Danach melden wir uns persönlich bei Ihnen.",
  "stepLabel": "Schritt",
  "ofLabel": "von",
  "disclaimer": "Kostenlos, unverbindlich und ohne Vertragsbindung. Rückruf innerhalb von 24 Stunden an Werktagen.",
  "backLabel": "Zurück",
  "nextLabel": "Weiter",
  "submitLabel": "Kostenlosen Rückruf anfordern",
  "sendingLabel": "Wird gesendet ...",
  "successTitle": "Vielen Dank, Ihre Anfrage ist bei uns.",
  "successText": "Silke Hermans oder eine Kollegin aus dem Housekeeping-Team ruft Sie innerhalb von 24 Stunden an Werktagen zurück. Falls es eilt, erreichen Sie uns direkt unter (0 23 89) 900 520.",
  "errorText": "Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns unter (0 23 89) 900 520 an.",
  "requiredError": "Bitte ausfüllen",
  "step1Title": "Für wen suchen Sie Unterstützung?",
  "step1Options": [
    {
      "label": "Für meine Eltern oder Angehörige"
    },
    {
      "label": "Für mich selbst"
    }
  ],
  "step2Title": "Wo wird geholfen?",
  "step2Options": [
    {
      "label": "Werne"
    },
    {
      "label": "Selm"
    },
    {
      "label": "Lünen"
    },
    {
      "label": "Bergkamen"
    },
    {
      "label": "Kamen"
    },
    {
      "label": "Lüdinghausen"
    },
    {
      "label": "Olfen"
    },
    {
      "label": "Ascheberg"
    },
    {
      "label": "Senden"
    },
    {
      "label": "Anderer Ort"
    }
  ],
  "step3Title": "Wobei sollen wir unterstützen?",
  "step3Hint": "Mehrfachauswahl möglich",
  "step3Options": [
    {
      "label": "Reinigung der Wohnung"
    },
    {
      "label": "Wäsche waschen und bügeln"
    },
    {
      "label": "Einkaufen und Besorgungen"
    },
    {
      "label": "Begleitung zu Arztterminen"
    },
    {
      "label": "Kochen und Mahlzeiten"
    },
    {
      "label": "Weiß ich noch nicht"
    }
  ],
  "step4Title": "Liegt bereits ein Pflegegrad vor?",
  "step4Options": [
    {
      "label": "Ja, Pflegegrad 1 bis 5"
    },
    {
      "label": "Nein, noch keiner"
    },
    {
      "label": "Weiß ich nicht"
    }
  ],
  "kontaktTitle": "Wohin dürfen wir zurückrufen?",
  "nameLabel": "Ihr Name",
  "namePlaceholder": "Maria Musterfrau",
  "phoneFieldLabel": "Telefonnummer",
  "phonePlaceholder": "0170 1234567",
  "emailLabel": "E-Mail (optional)",
  "emailPlaceholder": "maria@beispiel.de",
  "reachLabel": "Wann erreichen wir Sie am besten?",
  "reachOptions": [
    {
      "label": "Vormittags (8 bis 12 Uhr)"
    },
    {
      "label": "Nachmittags (12 bis 17 Uhr)"
    },
    {
      "label": "Abends (ab 17 Uhr)"
    },
    {
      "label": "Jederzeit"
    }
  ],
  "consentText": "Ich bin damit einverstanden, dass mich der Pflegedienst Constanze Jakubke zu meiner Anfrage kontaktiert.",
  "consentLinkLabel": "Datenschutzerklärung",
  "consentLinkHref": "https://www.ihr-pflegestuetzpunkt.de/datenschutzerklaerung/",
  "bgColor": "var(--color-kit-light)",
  "cardColor": "var(--color-kit-white)"
};

export const vertrauensleiste = {
  "claim": "Seit 1998 kümmern wir uns im Kreis Unna und im Münsterland um Menschen zuhause. Der Housekeeping Service ist Teil davon.",
  "kicker": "Ambulanter Pflegedienst Constanze Jakubke",
  "stats": [
    {
      "value": String(yearsSinceFounding()),
      "dynamicYears": true,
      "suffix": " Jahre",
      "label": "am Standort Werne"
    },
    {
      "value": "135",
      "suffix": "",
      "label": "Mitarbeitende im Team"
    },
    {
      "value": "9",
      "suffix": " Orte",
      "label": "im Einzugsgebiet"
    },
    {
      "value": "6",
      "suffix": "",
      "label": "eigene Senioren-Wohngemeinschaften"
    }
  ],
  "bgColor": "var(--color-kit-key1)",
  "valueColor": "var(--color-kit-key2)"
};

export const kostenuebernahme = {
  "kicker": "Was kostet das?",
  "headline": "Ab Pflegegrad 1 zahlt in den meisten Fällen die Pflegekasse.",
  "intro": "Viele Familien bezahlen Hilfe im Haushalt aus eigener Tasche, obwohl ihnen ein Budget der Pflegekasse zusteht. Wir prüfen im Rückruf kostenlos, was in Ihrem Fall möglich ist, und kümmern uns anschließend um den Papierkram.",
  "ctaLabel": "Kostenlosen Rückruf anfordern",
  "ctaHref": "#anfrage",
  "ctaNote": "Kostenlos und unverbindlich. Dauert 60 Sekunden.",
  "highlightValue": "bis zu 131 €",
  "highlightLabel": "pro Monat Entlastungsbetrag nach § 45b SGB XI, ab Pflegegrad 1 und unabhängig vom Einkommen",
  "highlightFootnote": "Nicht genutztes Budget verfällt zum 30. Juni des Folgejahres.",
  "steps": [
    {
      "title": "Wir prüfen Ihren Anspruch",
      "text": "Im Rückruf klären wir in wenigen Minuten, welche Leistungen Ihnen zustehen: Entlastungsbetrag, Verhinderungspflege oder häusliche Krankenpflege auf Verordnung."
    },
    {
      "title": "Wir übernehmen den Papierkram",
      "text": "Anträge, Formulare, Abtretungserklärung. Sie unterschreiben einmal, den Rest erledigen wir mit Ihrer Pflegekasse."
    },
    {
      "title": "Sie gehen nicht in Vorkasse",
      "text": "Wir rechnen direkt mit der Pflegekasse ab. Sie bekommen keine Rechnung über Leistungen, die Ihnen ohnehin zustehen."
    },
    {
      "title": "Auch ohne Pflegegrad möglich",
      "text": "Sie können unsere Haushaltshilfe jederzeit privat buchen. Auch dann sagen wir Ihnen vorher, ob sich ein Antrag auf Pflegegrad für Sie lohnt."
    }
  ],
  "bgColor": "var(--color-kit-white)"
};

export const leistungen = {
  "kicker": "Unsere Leistungen",
  "headline": "Alles, was im Haushalt liegen bleibt, wenn die Kraft nicht mehr reicht",
  "intro": "Sie sagen uns, was gebraucht wird. Wir kommen regelmäßig zur festen Zeit, immer mit derselben Person.",
  "services": [
    {
      "icon": "home",
      "title": "Reinigung des Wohnumfelds",
      "text": "Staubsaugen, Wischen, Bad und Küche, Fenster, Betten beziehen. So gründlich, wie es früher selbst gemacht wurde."
    },
    {
      "icon": "sparkle",
      "title": "Wäsche waschen und bügeln",
      "text": "Waschen, Trocknen, Bügeln, Einsortieren. Auch Bettwäsche und Gardinen."
    },
    {
      "icon": "heart",
      "title": "Einkaufen und Besorgungen",
      "text": "Wocheneinkauf, Apotheke, Post, Getränkekisten. Wir bringen alles bis in die Wohnung."
    },
    {
      "icon": "clock",
      "title": "Begleitung zu Arztterminen",
      "text": "Wir holen ab, fahren hin, warten mit und bringen wieder nach Hause. Auf Wunsch mit Notizen für Sie."
    },
    {
      "icon": "check-circle",
      "title": "Kochen und Mahlzeiten",
      "text": "Frisch gekocht in der eigenen Küche oder über unseren Menüservice, wenn es schnell gehen soll."
    },
    {
      "icon": "shield",
      "title": "Ein Blick, der mehr sieht",
      "text": "Unsere Kräfte merken, wenn sich etwas verändert, und sagen Ihnen frühzeitig Bescheid. Das ist der Unterschied zu einer Reinigungsfirma."
    }
  ],
  "ctaLabel": "Kostenlosen Rückruf anfordern",
  "ctaHref": "#anfrage",
  "ctaNote": "Auch einzelne Leistungen sind möglich. Sagen Sie uns einfach, was Sie brauchen.",
  "bgColor": "var(--color-kit-light)"
};

export const menschen = {
  "kicker": "Die Menschen, die kommen",
  "headline": "Keine Fremden. Dieselbe Person, jede Woche.",
  "quote": "Bei uns kommt nicht jede Woche jemand anderes. Unsere Kundinnen und Kunden wissen genau, wer klingelt und viele erzählen ihr am Ende mehr als der eigenen Familie.",
  "quoteName": "Silke Hermans",
  "quoteRole": "Teamleitung Housekeeping Service",
  "quoteImage": images.silkeHermans.src,
  "imageMain": images.begleitungSenioren.src,
  "imageMainAlt": "Mitarbeiterin begleitet zwei Seniorinnen im Alltag",
  "imageSecond": images.pflegealltag.src,
  "imageSecondAlt": "Mitarbeiterin des Pflegedienstes Jakubke im Einsatz",
  "imageThird": images.firmenwagen.src,
  "imageThirdAlt": "Dienstfahrzeug des Pflegedienstes Constanze Jakubke",
  "points": [
    {
      "text": "Feste Bezugsperson statt wechselnder Kräfte"
    },
    {
      "text": "Alle Mitarbeitenden sind fest angestellt, geprüft und versichert"
    },
    {
      "text": "Vertretung geregelt, wenn Ihre Kraft im Urlaub oder krank ist"
    },
    {
      "text": "Bei Auffälligkeiten melden wir uns bei Ihnen, bevor etwas passiert"
    }
  ],
  "ctaLabel": "Kostenlosen Rückruf anfordern",
  "ctaHref": "#anfrage",
  "phoneLabel": "(0 23 89) 900 520",
  "phoneHref": "tel:+492389900520",
  "bgColor": "var(--color-kit-dark)"
};

export const kundenstimmen = {
  "kicker": "Stimmen aus der Region",
  "headline": "Was Angehörige nach ein paar Wochen sagen",
  // Google-Bewertungen über Trustindex (IDs aus dem Trustindex-Konto)
  "trustindexButton": "491903684eb5632df006bf3968b", // Bewertungs-Button (oben rechts)
  "trustindexSlider": "3d2ead0841356324bd36c9f504b", // Bewertungs-Slider
  "bgColor": "var(--color-kit-white)"
};

export const einzugsgebiet = {
  "kicker": "Einzugsgebiet",
  "headline": "Hier sind wir zuhause",
  "intro": "Wir arbeiten bewusst nur in unserer Region. Kurze Wege bedeuten pünktliche Termine und dass im Notfall in zwanzig Minuten jemand da ist.",
  "places": [
    {
      "name": "Werne"
    },
    {
      "name": "Selm"
    },
    {
      "name": "Lünen"
    },
    {
      "name": "Bergkamen"
    },
    {
      "name": "Kamen"
    },
    {
      "name": "Ascheberg"
    },
    {
      "name": "Nordkirchen"
    },
    {
      "name": "Südkirchen"
    },
    {
      "name": "Cappenberg"
    }
  ],
  "noteTitle": "Ihr Ort ist nicht dabei?",
  "noteText": "Fragen Sie trotzdem an. In vielen angrenzenden Ortsteilen können wir ebenfalls kommen oder empfehlen Ihnen einen passenden Kollegen.",
  "addressTitle": "Unsere Standorte in Werne",
  "addressOne": "Steinstraße 42 bis 44, 59368 Werne",
  "addressTwo": "Am Schwanenplatz 1, 59368 Werne",
  "ctaLabel": "Kostenlosen Rückruf anfordern",
  "ctaHref": "#anfrage",
  "bgColor": "var(--color-kit-light)"
};

export const abschluss = {
  "kicker": "Ein Gedanke zum Schluss",
  "headline": "Wie viele Samstage wollen Sie noch mit dem Staubsauger verbringen?",
  "body": "Die Zeit, die Sie mit Ihren Eltern haben, ist begrenzt. Ein Teil davon geht jede Woche für Wäsche, Einkauf und Reinigung drauf. Das muss nicht sein und in den meisten Fällen kostet die Alternative Sie nichts.",
  "ctaLabel": "Kostenlosen Rückruf anfordern",
  "ctaHref": "#anfrage",
  "ctaNote": "60 Sekunden, kostenlos, ohne Vertragsbindung",
  "phoneIntro": "Oder rufen Sie einfach an:",
  "phoneLabel": "(0 23 89) 900 520",
  "phoneHref": "tel:+492389900520",
  "reassurances": [
    {
      "text": "Kein Verkaufsgespräch"
    },
    {
      "text": "Keine Vertragsbindung"
    },
    {
      "text": "Rückruf innerhalb von 24 Stunden"
    }
  ],
  "bgColor": "var(--color-kit-key1)"
};

export const faq = {
  "kicker": "Häufige Fragen",
  "headline": "Das fragen uns Angehörige am häufigsten",
  "image": images.firmenwagen.src,
  "imageAlt": "Dienstfahrzeug des Pflegedienstes Constanze Jakubke in Werne",
  "boxTitle": "Ihre Frage ist nicht dabei?",
  "boxText": "Stellen Sie sie uns direkt. Im Rückruf beantworten wir alles, auch wenn Sie am Ende gar nicht buchen.",
  "ctaLabel": "Kostenlosen Rückruf anfordern",
  "ctaHref": "#anfrage",
  "faqs": [
    {
      "question": "Was kostet die Haushaltshilfe wirklich?",
      "answer": "Das hängt vom Pflegegrad ab. Mit Pflegegrad 1 steht Ihnen ausschließlich der Entlastungsbetrag zu, also bis zu 131 Euro im Monat. Ab Pflegegrad 2 kommen Verhinderungspflege oder Pflegesachleistungen hinzu, damit lassen sich deutlich mehr Stunden abdecken. Ist die Einschränkung nur vorübergehend, etwa nach einem Krankenhausaufenthalt, kann die Hilfe im Haushalt über eine ärztliche Verordnung laufen. Das gilt allerdings nur, wenn kein Pflegegrad oder Pflegegrad 1 vorliegt. Was über die Leistungen der Kasse hinausgeht, rechnen wir zu einem festen Stundensatz privat ab. Welche Kombination in Ihrem Fall greift und was am Ende tatsächlich für Sie übrig bleibt, rechnen wir Ihnen im Rückruf konkret vor, bevor irgendetwas beginnt."
    },
    {
      "question": "Wir haben noch keinen Pflegegrad. Geht das trotzdem?",
      "answer": "Ja. Sie können unsere Leistungen jederzeit privat buchen. Gleichzeitig schauen wir uns Ihre Situation an und sagen Ihnen ehrlich, ob ein Antrag auf einen Pflegegrad Aussicht auf Erfolg hat. Falls ja, unterstützen wir Sie dabei."
    },
    {
      "question": "Wie schnell kann jemand anfangen?",
      "answer": "In der Regel innerhalb weniger Tage bis zwei Wochen, je nach Ort und gewünschter Uhrzeit. Vorher gibt es immer ein persönliches Kennenlernen bei Ihnen zuhause, damit beide Seiten wissen, worauf sie sich einlassen."
    },
    {
      "question": "Kommt wirklich immer dieselbe Person?",
      "answer": "Das ist unser Anspruch. Sie bekommen eine feste Kraft und eine feste Uhrzeit. Bei Urlaub oder Krankheit organisieren wir eine Vertretung, die vorher über Ihre Situation informiert wird."
    },
    {
      "question": "Müssen wir uns langfristig binden?",
      "answer": "Nein. Es gibt keine Mindestlaufzeit und keine Vertragsbindung. Sie können den Umfang jederzeit anpassen oder beenden."
    },
    {
      "question": "Sind die Mitarbeitenden geprüft und versichert?",
      "answer": "Alle Mitarbeitenden sind bei uns fest angestellt, sozialversichert und haftpflichtversichert. Sie werden eingearbeitet, regelmäßig fortgebildet und legen ein Führungszeugnis vor."
    },
    {
      "question": "Meine Mutter will keine fremde Person in der Wohnung.",
      "answer": "Das hören wir ständig und es ist normal. Deshalb beginnen wir mit einem unverbindlichen Kennenlernen und oft mit einer einzigen kleinen Aufgabe. Aus der einen Stunde wird fast immer mehr, sobald das Vertrauen da ist."
    }
  ],
  "bgColor": "var(--color-kit-white)"
};

export const footer = {
  "logoAlt": "Ambulanter Pflegedienst Constanze Jakubke",
  "tagline": "Ambulanter Pflegedienst Constanze Jakubke. Seit 1998 für Menschen in Werne und Umgebung da.",
  "contactTitle": "Kontakt",
  "phoneLabel": "(0 23 89) 900 520",
  "phoneHref": "tel:+492389900520",
  "addressLabel": "Steinstraße 42 bis 44, 59368 Werne",
  "links": [
    {
      "label": "Impressum",
      "href": "https://www.ihr-pflegestuetzpunkt.de/impressum/"
    },
    {
      "label": "Datenschutz",
      "href": "https://www.ihr-pflegestuetzpunkt.de/datenschutzerklaerung/"
    },
    {
      "label": "Zur Hauptseite",
      "href": "https://www.ihr-pflegestuetzpunkt.de/"
    }
  ],
  "copyright": "Ambulanter Pflegedienst Constanze Jakubke",
  "bgColor": "var(--color-kit-light)"
};
