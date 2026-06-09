export const WORKOUTS = {
  phase1: [
    {
      id: 'pelvic_breath',
      type: 'pelvic',
      title: 'Beckenboden-Aktivierung',
      subtitle: '360°-Atemtraining',
      durationMin: 10,
      icon: '🌸',
      reference: 'Goom, Donnelly & Brockwell 2019',
      steps: [
        { label: 'Vorbereitung', duration: 30, cue: 'Bequeme Rückenlage, Knie angewinkelt. Hände auf Bauch und Brustkorb.' },
        { label: 'Einatmen', duration: 4, cue: 'Tief in den Bauch atmen – Bauch, Seiten, Rücken weiten sich wie ein Ballon.' },
        { label: 'Ausatmen', duration: 6, cue: 'Sanft ausatmen. Beckenboden leicht heben – wie beim Liftknopf im Fahrstuhl.' },
        { label: 'Einatmen', duration: 4, cue: 'Nochmal tief einatmen, Beckenboden loslassen.' },
        { label: 'Ausatmen', duration: 6, cue: 'Ausatmen, heben. 10x wiederholen.' },
        { label: 'Pause', duration: 60, cue: 'Ruhe. Körper spüren. Keine Anspannung.' },
        { label: 'Seitatmung', duration: 30, cue: 'Hände seitlich an den Brustkorb. Einatmen – Rippen nach außen schieben.' },
        { label: 'Atemrunden', duration: 120, cue: '5 Runden: Einatmen 4s, Ausatmen 6s. Beckenboden folgt der Atmung.' },
        { label: 'Abschluss', duration: 30, cue: 'Kurz innehalten. Wie fühlt sich der Beckenboden an?' },
      ],
    },
    {
      id: 'walk_gentle',
      type: 'cardio',
      title: 'Spaziergang',
      subtitle: 'Progressives Gehen',
      durationMin: 20,
      icon: '🌿',
      reference: 'Goom et al. 2019 — kein Impact vor Woche 12',
      steps: [
        { label: 'Aufwärmen', duration: 120, cue: 'Langsam starten. Schultern entspannt, Blick geradeaus.' },
        { label: 'Gehen', duration: 900, cue: 'Gleichmäßiges Tempo. Bei Beckenbodendruck: Pause einlegen.' },
        { label: 'Abkühlen', duration: 120, cue: 'Tempo reduzieren. Atmen.' },
        { label: 'Check', duration: 60, cue: 'Symptom-Check: Kein Druck? Kein Schweregefühl? Gut.' },
      ],
    },
    {
      id: 'breath_iap',
      type: 'breath',
      title: 'IAP-Training',
      subtitle: 'Intraabdominaler Druck',
      durationMin: 8,
      icon: '💨',
      reference: 'Goom et al. 2019 — Rumpfstabilität vor Belastung',
      steps: [
        { label: 'Position', duration: 30, cue: 'Vierfüßlerstand. Wirbelsäule neutral, nicht abgesackt.' },
        { label: 'Einatmen', duration: 4, cue: 'Einatmen, Bauch und Beckenboden entspannen.' },
        { label: 'Ausatmen & Halten', duration: 8, cue: 'Ausatmen, Beckenboden heben, Bauchtiefe aktivieren. Halten.' },
        { label: 'Loslassen', duration: 3, cue: 'Loslassen. Pause.' },
        { label: 'Runden', duration: 150, cue: '10 Runden. Kein Pressen, keine Bauchspannung nach außen.' },
        { label: 'Arm-Lift', duration: 120, cue: 'Einen Arm heben, Beckenboden aktiv halten. 5x pro Seite.' },
        { label: 'Abschluss', duration: 60, cue: 'Kindshaltung. Rücken entspannen.' },
      ],
    },
    {
      id: 'mobility_hip',
      type: 'mobility',
      title: 'Hüftmobilität',
      subtitle: 'Sanfte Beweglichkeit',
      durationMin: 12,
      icon: '🌀',
      reference: 'Herman & Wallace — Becken-Rehabilitation',
      steps: [
        { label: 'Hüftkreise', duration: 60, cue: 'Auf dem Rücken. Knie zur Brust, sanfte Kreise. 10x jede Richtung.' },
        { label: 'Schmetterling', duration: 90, cue: 'Fußsohlen zusammen, Knie sanft sinken lassen. Kein Drücken.' },
        { label: 'Hüftbeuger li', duration: 60, cue: 'Ausfallschritt links vorne. Hüfte sanft nach vorne sinken.' },
        { label: 'Hüftbeuger re', duration: 60, cue: 'Seite wechseln. Gleiches Gefühl.' },
        { label: 'Katzenkuh', duration: 90, cue: 'Vierfüßler. Einatmen – Bauch sinkt. Ausatmen – Rücken rundet.' },
        { label: 'Kindshaltung', duration: 120, cue: 'Knie weit, Arme gestreckt. Atmen. Rücken öffnet sich.' },
        { label: 'Abschluss', duration: 60, cue: 'Rückenlage. Kurz nachspüren.' },
      ],
    },
  ],
  phase2: [
    {
      id: 'strength_body',
      type: 'strength',
      title: 'Körpergewichtskraft',
      subtitle: 'Progressiv, symptomgeführt',
      durationMin: 25,
      icon: '💪',
      reference: 'Christopher et al. 2024 — symptomgeführter Wiedereinstieg',
      steps: [
        { label: 'Aufwärmen', duration: 120, cue: 'Gehen, Arm- und Hüftkreise. Beckenboden aktivieren.' },
        { label: 'Glute Bridge', duration: 60, cue: '10 Wiederholungen. Einatmen unten, ausatmen + Beckenboden heben, Hüfte hoch.' },
        { label: 'Pause', duration: 30, cue: 'Symptom-Check.' },
        { label: 'Einbeinige Glute Bridge li', duration: 45, cue: '8x links. Becken stabil halten.' },
        { label: 'Einbeinige Glute Bridge re', duration: 45, cue: '8x rechts.' },
        { label: 'Pause', duration: 30, cue: '' },
        { label: 'Wandstütz-Kniebeuge', duration: 60, cue: '10x. Rücken an der Wand. Knie nicht über die Zehen.' },
        { label: 'Pause', duration: 30, cue: '' },
        { label: 'Deadbug', duration: 60, cue: '8x. Gegenarm-Gegenbein. Lenden auf dem Boden. Langsam.' },
        { label: 'Pause', duration: 30, cue: 'Wie ist der Beckenboden?' },
        { label: 'Bird Dog', duration: 60, cue: 'Vierfüßler, 8x pro Seite. Beckenboden aktiv.' },
        { label: 'Abkühlen', duration: 120, cue: 'Stretching Hüfte + Rücken.' },
      ],
    },
    {
      id: 'shoulder_antagonist',
      type: 'strength',
      title: 'Schulter-Antagonisten',
      subtitle: 'Zug-Push-Balance für Klettern',
      durationMin: 20,
      icon: '🏔️',
      reference: 'Gilmore et al. 2024 — Kletterreintegration',
      steps: [
        { label: 'Aufwärmen', duration: 90, cue: 'Armkreise vor-rück, Schulterrotation mit Widerstandsband.' },
        { label: 'Band-Außenrotation li', duration: 45, cue: '15x. Band seitlich, Ellbogen am Körper. Langsam.' },
        { label: 'Band-Außenrotation re', duration: 45, cue: '15x.' },
        { label: 'Pause', duration: 20, cue: '' },
        { label: 'Schulterblatt-Retraktion', duration: 60, cue: '15x. Band horizontal, Schulterblätter zusammenziehen. Kein Hochziehen.' },
        { label: 'Pause', duration: 20, cue: '' },
        { label: 'Wandliegen', duration: 60, cue: '10x. Arme an der Wand, Schulterblätter festhalten, Körper ranlehnen.' },
        { label: 'Pause', duration: 20, cue: '' },
        { label: 'Y-T-W', duration: 90, cue: 'Auf dem Bauch oder mit Band: Y, T, W-Position, je 10x. Obere Trapez aktivieren.' },
        { label: 'Abschluss', duration: 60, cue: 'Schulter-Dehnung Brust öffnen.' },
      ],
    },
    {
      id: 'finger_intro',
      type: 'strength',
      title: 'Sehnen-Einführung',
      subtitle: 'Open-Hand, kein Crimp',
      durationMin: 15,
      icon: '🖐️',
      reference: 'Gilmore et al. 2024 — Open-Hand vor Crimp; Relaxin bis Monat 3+ erhöht (Yalçınkaya et al. 2025)',
      steps: [
        { label: 'Warnung', duration: 30, cue: '⚠️ Nur in Phase 2+ und nach Relaxin-Abklingen (frühestens Monat 3–4). Open-Hand ausschließlich.' },
        { label: 'Fingerkreise', duration: 60, cue: 'Alle Finger sanft kreisen, Gelenke mobilisieren. Keine Belastung.' },
        { label: 'Handschluss-Extension', duration: 60, cue: 'Finger langsam ballen und strecken, 20x. Sehnen wärmen.' },
        { label: 'Open-Hand-Hang 5s', duration: 60, cue: 'Türrahmen oder niedrige Leiste. Open-Hand. 5s hängen, 30s Pause. 3 Sätze. Kein Crimp!' },
        { label: 'Pause', duration: 30, cue: 'Wie fühlen sich die Finger an? Kein Stechen.' },
        { label: 'Open-Hand-Hang 7s', duration: 90, cue: '7s hängen, 30s Pause. 3 Sätze. Nur wenn 5s problemlos.' },
        { label: 'Abschluss', duration: 60, cue: 'Finger sanft dehnen. Handfläche öffnen.' },
      ],
    },
    {
      id: 'cardio_bike',
      type: 'cardio',
      title: 'Radfahren',
      subtitle: 'Low-Impact-Cardio',
      durationMin: 30,
      icon: '🚴',
      reference: 'Christopher et al. 2024 — Low-Impact vor Impact',
      steps: [
        { label: 'Aufwärmen', duration: 300, cue: 'Niedriger Widerstand, lockeres Treten. Beckenboden entspannt.' },
        { label: 'Hauptteil', duration: 1200, cue: 'Gleichmäßiges Tempo. Bei Beckenbodendruck: Widerstand reduzieren.' },
        { label: 'Abkühlen', duration: 300, cue: 'Tempo reduzieren. Tief atmen.' },
      ],
    },
  ],
  phase3: [
    {
      id: 'fingerboard_basic',
      type: 'climb',
      title: 'Fingerboard – Grundprotokoll',
      subtitle: 'Maximalkraft-Aufbau',
      durationMin: 30,
      icon: '🏋️',
      reference: 'Eva López — Hangboard-Progression; Gilmore et al. 2024',
      steps: [
        { label: 'Aufwärmen Finger', duration: 300, cue: 'Fingerkreise, Open-Hand-Mobilisation, leichte Moves an der Wand.' },
        { label: 'Open-Hand 10s, 60% BW', duration: 60, cue: '3 Sätze à 10s. 3 Min Pause dazwischen. Open-Hand, entspannte Schultern.' },
        { label: 'Pause', duration: 180, cue: '' },
        { label: 'Open-Hand 10s, 65% BW', duration: 60, cue: '3 Sätze. Intensität leicht erhöhen.' },
        { label: 'Pause', duration: 180, cue: '' },
        { label: 'Hinweis Crimp', duration: 30, cue: 'Crimp frühestens Monat 8–9. Heute: nur Open-Hand.' },
        { label: 'Zugkette', duration: 120, cue: '3x5 Klimmzüge oder Ring-Rows. Beckenboden aktiv.' },
        { label: 'Abschluss', duration: 120, cue: 'Finger dehnen, Unterarme rollen.' },
      ],
    },
    {
      id: 'bouldering_technique',
      type: 'climb',
      title: 'Boulder-Technik',
      subtitle: 'Footwork & Körperposition',
      durationMin: 45,
      icon: '🧗',
      reference: 'Hermans 2022 — Boulder-Technik; Lattice 2025',
      steps: [
        { label: 'Beckenboden-Check', duration: 30, cue: 'Vor dem Start: Beckenboden asymptomatisch unter Last?' },
        { label: 'Aufwärmen', duration: 300, cue: 'Leichte Moves, 4–5c-Niveau. Auf Füße fokussieren.' },
        { label: 'Footwork-Drills', duration: 600, cue: 'Silent Feet: leises Aufsetzen. Innen- und Außenkante üben. Heelhook sanft.' },
        { label: 'Pause', duration: 120, cue: 'Beckenboden-Check: Druckgefühl?' },
        { label: 'Körperposition', duration: 600, cue: 'Hüfte nah an der Wand. Flagging. Twist-Lock üben. Keine Kraftprobleme erzwingen.' },
        { label: 'Projektarbeit', duration: 600, cue: 'Leichte Projekte, max. 6b. Qualität über Schwierigkeit.' },
        { label: 'Abschluss', duration: 120, cue: 'Runterkommen. Unterarme ausschütteln. Cool-down Schulter + Hüfte.' },
      ],
    },
    {
      id: 'benchmark_session',
      type: 'climb',
      title: 'Benchmark-Messung',
      subtitle: 'Monatliche Referenzwerte',
      durationMin: 20,
      icon: '📊',
      reference: 'Lattice 2025 — Zugkraft-Benchmarks',
      steps: [
        { label: 'Aufwärmen', duration: 300, cue: 'Vollständiges Finger-Aufwärmen, 10 Min.' },
        { label: 'Finger-Hang Max', duration: 120, cue: 'Open-Hand. Maximales Gewicht für 10s-Hang. Dokumentieren.' },
        { label: 'Pause', duration: 300, cue: '' },
        { label: 'Zugkraft', duration: 120, cue: 'Max. Klimmzüge oder Ring-Row-Kraft. Dokumentieren.' },
        { label: 'Pause', duration: 180, cue: '' },
        { label: 'Core-Hold', duration: 60, cue: 'Maximale Plank-Zeit. Dokumentieren.' },
        { label: 'Abschluss', duration: 60, cue: 'Werte eintragen. Fortschritt feiern – jeder Schritt zählt.' },
      ],
    },
  ],
}

export function getTodayWorkouts(phase) {
  const key = `phase${phase}`
  const pool = WORKOUTS[key] || WORKOUTS.phase1
  const day = new Date().getDay()
  if (phase === 1) {
    if (day === 0 || day === 6) return [pool[0]]
    return day % 2 === 0 ? [pool[0], pool[2]] : [pool[0], pool[1], pool[3]]
  }
  if (phase === 2) {
    if (day === 0) return []
    return day % 3 === 0 ? [pool[1], pool[3]] : day % 2 === 0 ? [pool[0], pool[2]] : [pool[0], pool[1]]
  }
  return day % 2 === 0 ? [pool[0], pool[1]] : [pool[1], pool[2]]
}

export function getDayMessage(weekPostpartum, mood) {
  if (mood === 'pause') return 'Heute ist Ruhe. Das ist der Plan.'
  if (mood === 'tired') return 'Müde sein darf sein. Weniger ist heute mehr.'
  if (weekPostpartum < 2) return 'Die ersten Tage. Alles zählt — auch einfach Atmen.'
  if (weekPostpartum < 6) return 'Dein Körper regeneriert still und stark.'
  if (weekPostpartum < 12) return 'Woche für Woche. Kein Eile, kein Rückstand.'
  if (weekPostpartum < 24) return 'Kraft kehrt zurück. Auf deinen Wegen.'
  return 'Du bist näher dran, als du glaubst.'
}
