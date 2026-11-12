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
2. **Development Plan & Milestones:** cross-functional development schedule, editable milestone dates/status, and an expandable full plan showing each milestone's owner, target date, planned outcome, and exit check.
3. **Work Packages & Action Tracker:** searchable packages with editable status and percent complete, plus the ability to add a package.
4. **Risks & Issues:** probability/impact exposure, status, owner, mitigation, and a control to add a risk.
5. **Change & Decision Log:** fictional change requests and decisions, approval-state editing, and a control to add a change request.
6. **Project Reporting:** calculated indicators and a downloadable text status brief.
7. **Scenario controls:** baseline, supplier-slip, and recovery snapshots; scenario reload and baseline reset, with a visible summary of each scenario's work-package, milestone, and risk impact.
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
- **Open risks:** count of risk entries whose status is neither `Closed` nor `Resolved`; closed risks remain in the register history but do not contribute to active exposure.
- **Risk exposure:** probability multiplied by impact, each represented on a 1–5 scale; high exposure is currently shown at a score of 15 or more.
- **Delivery confidence:** `100 - round(average active risk exposure × 1.2)`, bounded from 40 to 98; with no active risks it is 98. This is an illustrative demo heuristic, not a validated forecast.
- **Next milestone:** earliest-dated milestone not marked `Complete`; date and countdown are calculated relative to the fixed simulation date, 11 Nov 2026, rather than the viewer's system clock.
- **Schedule outlook:** `Delayed` when the next incomplete milestone is before the simulation date; `At risk` when an at-risk task/milestone exists or unfinished work has no upcoming milestone; `On track` when an upcoming milestone has no schedule flags; `Complete` only when all milestones are complete and all work packages are done.
- **Overall health:** `Delayed` follows a delayed schedule; `At risk` follows schedule flags or an active risk exposure score of 15 or more; otherwise it is `On track` or `Complete`.
- **Schedule/budget outlook:** example program context used to make the demo reviewable; it is not recalculated from a critical-path or cost baseline model.

## 6. Acceptance criteria

- **AC-01 — Fictional framing:** the dashboard and README explicitly say the project is fictional and do not imply personal ownership of its delivery.
- **AC-02 — Project overview:** users can identify project objective, schedule window, approved budget context, calculated delivery health, progress, next incomplete milestone and date, and active risk count. Health and schedule outlook reflect current task, milestone, and risk data.
- **AC-03 — Development plan:** milestone date and status controls update the displayed milestone data, next-milestone KPI, schedule outlook, and downloaded brief; edits persist after reload.
- **AC-04 — Work package tracker:** users can search packages, edit status and progress, add a package, and see progress/completion indicators recalculate.
- **AC-05 — Risk controls:** users can add a risk and edit probability, impact, and status; active-risk counts exclude `Closed` and `Resolved` entries, and exposure indicators recalculate.
- **AC-06 — Change control:** users can add a change request and edit change/decision status.
- **AC-07 — Scenarios:** all three scenarios can be loaded; the selected scenario label persists with the loaded data after reload; reset restores the fictional baseline and its label.
- **AC-08 — Reporting:** users can download a status brief containing the loaded scenario and simulation date, current calculated health/schedule, confidence heuristic, completion, next milestone/date/status, and active risk counts.
- **AC-09 — Local-first operation:** core controls work without a backend; task, milestone, risk, change, and selected scenario state persist in the current browser only.
- **AC-10 — Build and deployment:** pull requests targeting `main` or `develop` run the GitHub Actions build check; GitHub Pages deploys from `main` only.
- **AC-11 — Review governance:** each review gate remains pending until an independent written result is recorded in `docs/reviews/`.
- **AC-12 — Feedback versus approval:** a PR comment, implementation completion, or successful build/deployment is not a gate approval; only the dated report for the exact reviewed SHA can approve a gate.
- **AC-13 — Live navigation counts:** the work-package badge equals the current package count and the risk badge equals the active risk count in the loaded scenario.
- **AC-14 — Completion integrity:** `Complete` is shown only when every milestone and work package is complete; if work remains with no upcoming milestone, the dashboard reports an `At risk` schedule and identifies the unscheduled work.
- **AC-15 — Readable interface:** dashboard text has a minimum rendered CSS font size of 12px, including compact labels and mobile navigation.
- **AC-16 — Full milestone plan:** the Development Plan control expands a full milestone register with ID/name, owner, target date, status, planned outcome, and an exit check.
- **AC-17 — Scenario clarity:** each selected scenario displays a concise, explicit explanation of its key work-package, milestone, and risk changes; Supplier slip names the one-week delay and recovery scenario states its assumptions.

## 7. Current status

The frontend MVP and the PR #3 CI repair are integrated on `develop`; formal review gates remain pending. The score heuristic, fixed simulation date, illustrative Gantt bars and budget context, and limited editability of names, owners, and impact descriptions are known prototype limits. Scenario-derived status, milestone, risk, reporting, persistence, and completion behavior is covered by AC-02, AC-03, AC-05, AC-07, AC-08, and AC-13–AC-14; see `docs/development/sprint-log.md` and the current review request.
