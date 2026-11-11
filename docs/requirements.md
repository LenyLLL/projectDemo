# Robotics TPM Dashboard — Requirements

**Project:** AR-24-017 · Actuator module development dashboard  
**Purpose:** Technical Project Manager interview and portfolio demonstration  
**Scenario status:** Fictional portfolio simulation; no real delivery claim  
**Document status:** Baseline captured; Architecture Review pending

## 1. Project context

Atlas Robotics is a fictional company developing a compact servo-actuator module for a next-generation collaborative robot. The dashboard demonstrates project controls for a cross-functional hardware and embedded-software effort. Names, plans, costs, risks, dates, and progress are invented for this portfolio simulation.

The product goal is to give a TPM one concise operating view for delivery status, engineering work packages, milestones, risks, changes, and reporting. It must read as a TPM operating tool rather than a personal delivery case study or a logistics coordination example.

## 2. Users and decisions supported

- **Technical Project Manager:** track scope, schedule, owners, actions, risks, decisions, and recovery scenarios.
- **Engineering lead:** see workstream status, upcoming integration points, owners, and mitigation actions.
- **Management reviewer:** understand delivery confidence, milestone outlook, risk exposure, and baseline impact.
- **Interview reviewer:** inspect credible project controls and explore a clearly labeled simulation.

## 3. Scope

### In scope

1. **Project Overview:** current project health, progress, next milestone, open risks, budget context, and project identity.
2. **Development Plan & Milestones:** cross-functional development schedule and editable milestone dates/status.
3. **Work Packages & Action Tracker:** searchable packages with editable status and percent complete, plus the ability to add a package.
4. **Risks & Issues:** probability/impact exposure, status, owner, mitigation, and a control to add a risk.
5. **Change & Decision Log:** fictional change requests and decisions, approval-state editing, and a control to add a change request.
6. **Project Reporting:** calculated indicators and a downloadable text status brief.
7. **Scenario controls:** baseline, supplier-slip, and recovery snapshots; scenario reload and baseline reset.
8. **Persistence:** save changes in the current browser using `localStorage`; no backend or account is required.
9. **Portfolio framing:** clearly identify the project and its data as fictional throughout the dashboard and README.

### Out of scope

- Real robotics product data, real employee data, or customer/supplier integrations.
- Backend services, authentication, cloud data synchronization, or multi-user collaboration.
- A claim that the portfolio owner personally managed, staffed, or delivered the fictional project.
- Logistics coordination between China and Munich.
- A full enterprise scheduling, earned-value, resource-leveling, or financial-control system.

## 4. Data model

| Entity | Required fields in the simulation | Key behavior |
|---|---|---|
| Work package | ID, title, workstream, owner, status, priority, due date, progress | Search; edit status/progress; add a package; derive completion and average progress |
| Milestone | ID, name, date, owner, status | Edit date/status; show on the development plan |
| Risk/issue | ID, title, category, owner, probability, impact, status, mitigation action | Edit probability, impact, and status; derive exposure score; add a risk |
| Change/decision | ID, type, title, owner, date, status, impact | Edit governance status; add a change request |
| Scenario | Name plus snapshots of the four collections | Load baseline, supplier-slip, or recovery state; reset to baseline |

All data is fictional and browser-local. A scenario load intentionally replaces the current browser state with that scenario's seed snapshot.

## 5. KPI definitions and interpretation

- **Work package progress:** arithmetic mean of package `progress` percentages in the loaded scenario.
- **Completed packages:** count of packages whose status is `Done`.
- **Open risks:** number of risk entries currently held in the risk collection; the current model does not exclude `Closed` entries from this count.
- **Risk exposure:** probability multiplied by impact, each represented on a 1–5 scale; high exposure is currently shown at a score of 15 or more.
- **Delivery confidence:** a lightweight illustrative score derived from average risk exposure. It is a demo heuristic, not a validated forecasting model.
- **Schedule/budget outlook:** example program context used to make the demo reviewable; it is not recalculated from a critical-path or cost baseline model.

## 6. Acceptance criteria

- **AC-01 — Fictional framing:** the dashboard and README explicitly say the project is fictional and do not imply personal ownership of its delivery.
- **AC-02 — Project overview:** users can identify project objective, schedule window, approved budget context, delivery health, progress, next milestone, and risk count.
- **AC-03 — Development plan:** milestone date and status controls update the displayed milestone data and persist after reload.
- **AC-04 — Work package tracker:** users can search packages, edit status and progress, add a package, and see progress/completion indicators recalculate.
- **AC-05 — Risk controls:** users can add a risk and edit probability, impact, and status; exposure indicators recalculate.
- **AC-06 — Change control:** users can add a change request and edit change/decision status.
- **AC-07 — Scenarios:** all three scenarios can be loaded, and reset restores the fictional baseline.
- **AC-08 — Reporting:** users can download a status brief containing current calculated progress, milestone, risk, and scenario context.
- **AC-09 — Local-first operation:** core controls work without a backend; edits persist in the current browser only.
- **AC-10 — Deployment:** a GitHub Actions workflow builds the project and deploys it to GitHub Pages on `main` updates.
- **AC-11 — Review governance:** each review gate remains pending until an independent written result is recorded in `docs/reviews/`.

## 7. Current status

The frontend MVP is implemented and the production build and GitHub Pages deployment have succeeded. Requirements remain open for independent review. The score heuristic, illustrative Gantt bars, and limited editability of names, owners, and impact descriptions are known prototype limits; see `docs/sprint-log.md` and the current review request.
