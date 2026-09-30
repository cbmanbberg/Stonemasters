# Stone Masters

Klettertraining-App als Progressive Web App (PWA) — Kraft, Finger, Ausdauer, Flexibility und Trainingstagebuch in einer einzigen Datei.

**Aktuelle Version: 2.2.0**

## Module

| Tab | Funktion |
|---|---|
| **TRAIN** | Dashboard (Periodisierungs-Block, letzte Session, Schnellstart-Presets) + Workout-Generator (Kraft / Ausdauer / Power) mit Timern, RPE-Erfassung und Post-Workout-Flexibility-Prompt |
| **FINGER** | Fingertraining-Protokolle (Max Hangs, Repeater 7/3 & 6/4, Leichte Hänge 10/50, Abrahangs, Critical-Force-Test) mit Griffauswahl, 10-Sek-Vorlauf, akustischer Führung und Max-Hang-PBs pro Griff. Vor Max Hangs und CF-Test muss das Aufwärmen bestätigt werden |
| **FLEX** | Flexibility-Sessions: Dauer (10–60 Min), Fokus (Unterkörper / Oberkörper / Klettern / Ganzkörper), Intensität (Sanft 35s / Mittel 50s / Tief 75s). 43 Übungen (klassische Yoga-Posen für den ganzen Körper), zeitbudget-basierte Generierung mit Zufallsauswahl aus großen Pools, Reihenfolge stehend → sitzend → liegend mit Antagonisten-Wechsel |
| **LOG** | Trainingstagebuch mit Kalender, manuellen Einträgen, RPE-Färbung und Strava-Import |
| **PROFIL** | Monatsbericht, Badges, Leistungstest, Bestleistungen (PBs bearbeiten/löschen, Seitenvergleich-Notizen), Gewicht, Setup, Strava, Daten-Backup (Export/Import) |

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

## Trainingslogik

- **Periodisierung:** 4-Wochen-Zyklus (Volumen → Intensität → Kraftausdauer → Deload). Jede Kalenderwoche mit mindestens einer Einheit zählt (TRAIN, Fingerboard, Klettern/Boards im LOG — nicht Flex/Cardio); die laufende Woche zählt sofort. Nach 2+ Wochen ohne Training beginnt ein neuer Block.
- **48-h-Fingerregel:** Liegt die letzte harte Fingereinheit (Max Hang, Repeater, CF-Test oder der Fingerblock einer TRAIN-Session) weniger als 48 h zurück, ersetzt der Generator den Fingerblock durch ein leichtes Programm. Abrahangs und leichte Hänge zählen nicht als hart.
- **Critical Force:** Eine Definition — geführter Test im FINGER-Tab (18× 6/4 Sek). Nur wenn alle 18 Wdh geschafft wurden, zählt die Last als CF (`pbs.cf_kg`).
- **Lifting Edge Max Pull:** einarmiges 1RM aus dem Leistungstest; steuert die Trainingslasten. Fingerboard-Sessions verändern diesen Wert nicht.
- **Satzpausen** im Workout werden aus der Vorgabe gelesen („3–5 Min“ → 5:00 Timer).

## Flexibility-Modul (fachliche Grundlage)

- Haltezeiten 35–75 s pro Seite, statisches Dehnen nach Training (evidenzbasiert: 30–60 s pro Muskelgruppe, 2–4 Sätze nach ACSM)
- Sessions werden nach Zeitbudget generiert: beidseitige Übungen zählen doppelt (+5 s Seitenwechsel), lange Sessions wiederholen Übungen (max. 3 Sätze)
- Kategorie-Flow: stehend → sitzend/hockend → liegend, keine Positionswechsel zurück
- Innerhalb jeder Kategorie wechseln Muskelgruppen/Antagonisten ab
- Beidseitige Übungen: automatischer Start der zweiten Seite nach 5-s-Countdown
- Übungen mit hoher Anforderung haben eine einfachere Alternative als Dropdown

## Fingerboard-Akustik

Die Töne sind so gebaut, dass man am Board hängen kann, ohne aufs Display zu schauen:

| Signal | Bedeutung |
|---|---|
| Hoher Ton (lang) | Hang startet — zugreifen (nach 3-2-1-Countdown) |
| Hohe Ticks | Letzte 3 Sekunden des Hangs — weiterhängen |
| Tiefer Ton (lang) | Loslassen, kurze Pause (Repeater) |
| Tiefer Doppelton | Satz fertig, lange Pause |
| Doppel-Beep | Lange Pause endet in 10 Sekunden — zurück ans Board |
| Aufsteigende Tonfolge | Alle Sätze geschafft |

Pitch-Logik: hoch = hängen/anstrengen, tief = loslassen/erholen.

## Daten & Backup

Alle Daten liegen ausschließlich lokal im Browser (`localStorage`, Hauptschlüssel `sm_v4`) — kein Konto, kein Server. Beim Start fordert die App dauerhaften Speicher an (`navigator.storage.persist()`), damit der Browser die Daten nicht bei Speichermangel löscht.

Sicherung über **PROFIL → BACKUP**:
- **Exportieren** erzeugt `stonemasters-backup-JJJJ-MM-TT.json` mit allen `sm_*`-Schlüsseln (auf dem Handy über das Teilen-Menü, z. B. nach iCloud Drive/Dateien). Strava-Tokens und Client Secret werden nicht exportiert.
- **Importieren** prüft die Datei, zeigt Stand und Anzahl der Einträge und ersetzt nach Bestätigung die lokalen Daten.
- Der BACKUP-Button wird farbig, wenn das letzte Backup älter als 30 Tage ist.
- Schlägt das Speichern fehl (z. B. Speicher voll), erscheint ein roter Hinweis mit direktem Link zum Backup. Der Fehlerbildschirm bietet „Neu laden" und „Backup herunterladen" an; Löschen aller Daten nur nach Rückfrage.

## Deployment

GitHub Pages, `start_url: /Stonemasters/`. Nach Push auf `main` ist die App live.
