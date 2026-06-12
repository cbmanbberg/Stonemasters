# Stone Masters

Klettertraining-App als Progressive Web App (PWA) — Kraft, Finger, Ausdauer, Flexibility und Trainingstagebuch in einer einzigen Datei.

**Aktuelle Version: 1.5.0**

## Module

| Tab | Funktion |
|---|---|
| **TRAIN** | Workout-Generator (Kraft / Ausdauer / Power) mit Timern, RPE-Erfassung und Post-Workout-Flexibility-Prompt |
| **FINGER** | Fingertraining-Protokolle (Max Hangs, Repeater 7/3 & 6/4, Density, Abrahangs, Critical-Force-Test) mit Griffauswahl, Hangboard-Timern und PB-Tracking |
| **FLEX** | Flexibility-Sessions: Dauer (10–60 Min), Fokus (Unterkörper / Oberkörper / Klettern / Ausgewogen / Frei), Intensität (Sanft 35s / Mittel 50s / Tief 75s). 27 Übungen, zeitbudget-basierte Generierung, Reihenfolge stehend → sitzend → liegend mit Antagonisten-Wechsel |
| **LOG** | Trainingstagebuch mit Kalender, manuellen Einträgen und RPE-Färbung |
| **PROFIL** | Profile, Einstellungen, App-Info |

## Struktur

```
index.html        — komplette App (React 19, kompiliertes Vite-Bundle, single file)
manifest.json     — PWA-Manifest
icon.svg          — Quell-Icon
icon-192.png      — PWA-Icon 192×192
icon-512.png      — PWA-Icon 512×512
backups/          — Versions-Backups (z.B. index-v1.2.0.html)
```

**Hinweis:** Es gibt kein separates Quellverzeichnis — `index.html` enthält das fertige Bundle und wird direkt editiert. Frühere Versionen liegen in `backups/` und in der Git-Historie.

## Flexibility-Modul (fachliche Grundlage)

- Haltezeiten 35–75 s pro Seite, statisches Dehnen nach Training (evidenzbasiert: 30–60 s pro Muskelgruppe, 2–4 Sätze nach ACSM)
- Sessions werden nach Zeitbudget generiert: beidseitige Übungen zählen doppelt (+5 s Seitenwechsel), lange Sessions wiederholen Übungen (max. 3 Sätze)
- Kategorie-Flow: stehend → sitzend/hockend → liegend, keine Positionswechsel zurück
- Innerhalb jeder Kategorie wechseln Muskelgruppen/Antagonisten ab
- Beidseitige Übungen: automatischer Start der zweiten Seite nach 5-s-Countdown
- Übungen mit hoher Anforderung haben eine einfachere Alternative als Dropdown

## Deployment

GitHub Pages, `start_url: /Stonemasters/`. Nach Push auf `main` ist die App live.
