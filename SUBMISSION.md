# Devpost — VisitPrep
## Inspiration
Appointments are short, and patients — especially newcomers, seniors, or anyone anxious — forget key details. Doctors need duration, severity and what's been tried; patients tell stories.
## What it does
Type how you feel in your own words. VisitPrep's on-device NLP pulls out symptoms (ignoring negations like "no fever"), duration, severity, patterns ("worse in the morning") and medications, flags red-flag phrases with a call-911 prompt, and generates a doctor-ready summary plus tailored questions.
## How we built it
HTML/CSS/JS. A rule-based clinical NLP module (lexicon of 16 symptom groups with synonyms, a negation window, regexes for duration/severity/pattern/medications, emergency phrase list). Runs fully in the browser for privacy. Built with help from an AI coding assistant.
## Challenges
Negation ("no fever" ≠ fever), lay language vs medical terms, and staying clearly non-diagnostic.
## What we learned
How clinicians structure a history (onset, duration, severity, modifiers), and the trade-off between rules (transparent, private) and large language models (flexible, harder to trust).
## What's next
Optional on-device ML model (e.g. transformers.js) for better extraction, multilingual input, export to clinic intake forms, evaluation with clinicians.
## Built with
html, css, javascript, nlp
