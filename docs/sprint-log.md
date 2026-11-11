# Sprint Log

## Sprint 0 — Portfolio MVP

**Date:** 2026-11-11  
**Goal:** Build a polished, interactive TPM operating dashboard for a fictional robotics module development program.  
**State:** MVP implemented; independent review not yet completed.

### Completed

- Project Overview with progress, risk, milestone, budget-context, and health indicators.
- Development plan with milestone date/status editing.
- Work package tracker with search, status/progress editing, add action, and derived progress KPIs.
- Risk register controls for add, probability, impact, and status.
- Change/decision log with status updates and add-change-request action.
- Baseline, supplier-slip, and recovery scenarios; reset control; browser-local persistence.
- Downloadable text status brief.
- Responsive React + Vite frontend and fictional portfolio disclosures.
- README, GitHub Actions Pages workflow, and Pages configured to use GitHub Actions.

### Verification evidence

- Local production build: `GITHUB_PAGES=true npm run build` — passed on 2026-11-11.
- GitHub Actions run: [run 43104615679](https://github.com/LenyLLL/projectDemo/actions/runs/43104615679) — completed successfully.
- Live deployment: <https://lenylll.github.io/projectDemo/> — opened and visually confirmed.
- Deployed source baseline: `452cac9c6962ce9d0d6a367d61c967c7e6438329`.

### Known limitations / unresolved points

- The delivery-confidence number is a simple illustrative risk-derived heuristic, not a validated schedule forecast.
- The Gantt bars are illustrative and are not recalculated from the editable milestone dates or a dependency network.
- Budget figures and schedule buffer are illustrative context, not a cost-plan calculation.
- Package titles, owners, risk narratives/mitigations, and change impact text are seeded examples; controls currently edit only selected status/progress/rating fields.
- Data persists only in the current browser. Loading a scenario replaces the current local state.
- No independent review has been recorded. Architecture, MVP, functional/scenario, and final interview gates remain pending.

### Next actions

1. Request independent Architecture Review using `docs/TPM_REVIEW_REQUEST.md`.
2. Record review findings and disposition under `docs/reviews/`.
3. Resolve or explicitly accept the known limitations before marking later gates ready.
4. Keep the deployed `main` branch stable; integrate reviewed changes through `develop` and PRs.
