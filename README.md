# VisitPrep — DSH Hacks V2 (AI × Healthcare)
Patients describe symptoms in free text; on-device NLP extracts symptoms (with negation handling), duration, severity, patterns and medications, flags emergency warning signs, and produces a structured summary + questions to ask the doctor.
## Run
Open `index.html` (or `python3 -m http.server`). No install; nothing leaves the browser.
## Test the NLP
`node -e "console.log(require('./nlp.js').analyze('bad headache for 3 days, no fever'))"`
## Deliverables
`ONE_PAGER.pdf` (required one-page description), `CODE.pdf` (all code), SUBMISSION.md, VIDEO_SCRIPT.md.
## Disclaimer
Prototype; not a diagnostic tool.
