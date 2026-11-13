# Decision Log

Record material product, technical, and delivery decisions. Add new entries at the top; retain prior entries.

## 2026-11-13 — Keep vibration recovery evidence-linked and provisional

- **DEC-009 — Model recovery as linked local records with evidence-gated closure.** The vibration scenario owns a six-stage workflow, action register, blockers, schedule forecast, REQ-VIB-042 record, R-04 baseline/residual assessment, decision authority, and closeout. Actions retain stage, WP, requirement, and risk identifiers. Stage progress and overall recovery status are derived from saved records.
- **Risk/exit rule:** R-04 P4×I5 remains the baseline; the scenario P2×I5 value remains provisional until REQ-VIB-042 passes with a retained test-record reference and reviewer acceptance. Recovery cannot close solely because six stages are checked off: documented root-cause disposition, evidenced actions, no release blockers, accepted residual risk, updated project controls, and closure approval are required.
- **Consequences:** Use 20 Nov 2026 as the MS-03 baseline, derive current forecast/variance from the editable milestone, and label critical-path assessment as required because this demo does not model dependencies. Keep scenario data fictional and browser-local; do not invent a numeric vibration limit.

## 2026-11-11 — Derive delivery indicators from the selected scenario

- **DEC-008 — Keep project status scenario-derived and explain the simulation date.** Use the earliest incomplete milestone and the fixed simulation date of 11 Nov 2026 for the displayed milestone countdown. Derive schedule and overall health from milestone/task status and active risk exposure; exclude closed/resolved risks from active counts. Persist the selected scenario label beside its data. Show `Complete` only when every milestone is complete and every work package is done; unfinished packages with no upcoming milestone indicate `At risk`. Keep delivery confidence labeled as an illustrative heuristic and budget context explicitly non-calculated.
- **Consequences:** Loading or editing a scenario updates the next-milestone KPI, schedule/health indicators, reporting brief, and navigation counts together; reloading keeps the scenario label aligned with its persisted data. These rules describe the demo's status heuristic and do not claim validated forecasting.


## 2026-11-11 — Follow-up decisions from the Architecture Review feedback

- **DEC-007 — Keep a valid checked-in lockfile for deterministic CI.** Run 43112054071 showed the workspace was correct and `npm config get package-lock` returned `true`; Node then found that the tracked `package-lock.json` began with literal warning text from a truncated write. Replace that blob with the validated lockfile that matches the root dependencies and retain `npm ci`.

- **DEC-006 — Make CI's npm workspace explicit and inspect its inputs.** After run 43109383321 reported a missing lockfile although the exact merge tree contained it, the PR build will print the runner workspace and verify both npm manifests there before running `npm ci`. The install and build steps will use `github.workspace`; deterministic installation remains in place.

- **DEC-005 — Review feedback is not gate approval.** A GitHub PR review comment, including “Accept with follow-ups,” is actionable feedback only. A gate remains pending until the independent reviewer records a dated report in `docs/reviews/` with the exact commit SHA and explicit disposition.
- **DEC-004 — Separate baseline evidence from PR-head evidence.** The successful Pages run for `452cac9c6962ce9d0d6a367d61c967c7e6438329` documents the deployed baseline only. Each new PR must be validated by its own `Pull request build / build` check; a baseline deployment cannot stand in for that check.
- **DEC-003 — Use `docs/development/sprint-log.md` as the single sprint history.** Preserve the initial entry already on `main`, append later progress there, and do not create a parallel root-level sprint log.
- **DEC-002 — Keep `main` as the stable release/deployment branch and `develop` as the integration branch.** PR build checks run for feature PRs targeting either branch; GitHub Pages continues to deploy from `main`. Promote reviewed changes through PRs without force-pushing shared branches.
- **DEC-001 — Keep the Atlas actuator program explicitly fictional.** The dashboard is a portfolio simulation and must not imply that the portfolio owner personally managed or delivered the example program.

## 2026-11-11 — Use GitHub as the review handoff source

- **Status:** Accepted
- **Context:** The dashboard is developed with an Agent and reviewed asynchronously by a Senior TPM in a separate conversation.
- **Decision:** Keep the review brief and durable review records in `docs/`; identify the exact branch, PR, and commit for each review. Treat repository history and PR diffs as the implementation source of truth.
- **Consequences:** Reviewers can refresh current code and discussions directly from GitHub. Each review remains traceable to a specific change.

