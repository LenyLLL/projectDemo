## Review target

- Repository: [LenyLLL/projectDemo](https://github.com/LenyLLL/projectDemo)
- Default/release branch: `main`; integration branch: `develop`
- Current review PR: [#13 — Gate provisional R-04 roll-ups on accepted evidence](https://github.com/LenyLLL/projectDemo/pull/13)
- Feature branch: `feature/provisional-risk-rollup-gate` → `develop`
- Source feedback: [PR #12 second review at `454d5ba`](https://github.com/LenyLLL/projectDemo/pull/12#pullrequestreview-5890705994); same finding first raised [at `0597d29`](https://github.com/LenyLLL/projectDemo/pull/12#pullrequestreview-5890672778).
- Source integration baseline: `develop` commit `26f0e452278c25e143f30ac0554d14e1a327a5b6`. `main` was not modified.
- Follow-up head SHA and exact-head Actions evidence: to be recorded after the PR is opened and the final handoff commit passes CI.
- Scope: carry forward PR #12's Issue #11 workflow required for integration from `develop`, plus the review fix: preserve baseline R-04 P4×I5 in global risk/confidence roll-ups until evidence and risk decision acceptance; make the assumption visible; switch to P2×I5 only after acceptance. Supplier Recovery and other scenarios retain their existing behavior.
- Live demo: [https://lenylll.github.io/projectDemo/](https://lenylll.github.io/projectDemo/)
- Validation: local `npm test` passed 7/7 and `npm run build` passed. Exact PR-head Actions result will be recorded after final handoff metadata is committed.
- Gate status: Architecture Review, MVP Review, Functional & Scenario Review, and Final Interview Review remain pending separate dated reports under `docs/reviews/`.

## Context

This is a portfolio simulation of a fictional robotics program. See the root README for scope, product behavior, and the fictional-scenario disclaimer. Do not interpret sample names, dates, budgets, or delivery metrics as real program evidence.

## Review focus

Please assess:
1. Whether the dashboard presents a credible TPM operating model for a robotics hardware and embedded-software program.
2. Whether plans, milestones, work packages, risks, issues, changes, decisions, and reporting tell a consistent story.
3. Whether status, progress, risk exposure, and scenario changes are understandable and internally coherent.
4. Whether UX supports a hiring-manager walkthrough, including responsive behavior and clear empty/error states.
5. Any delivery, supplier, integration, verification, safety, or change-control gaps that would weaken the demo.
6. Accessibility, data persistence, and deployment risks visible in the implementation.

## Review output

Create a dated entry under `docs/reviews/` or submit a GitHub PR review with:
- Summary and overall recommendation.
- Findings ordered by severity, each with file/section and concrete impact.
- Questions or assumptions to validate.
- Suggested next actions, distinguishing blockers from improvements.

A PR review comment is feedback on that revision. It does not approve a review gate. Gate approval requires a dated report in `docs/reviews/` for the exact source commit with an explicit disposition.

## Current review handoff

Update this section for each review; keep historical records below it.

- **PR / branch:** [PR #12](https://github.com/LenyLLL/projectDemo/pull/12), `feature/vibration-recovery-workflow` → `develop`.
- **Review source:** [Issue #11](https://github.com/LenyLLL/projectDemo/issues/11), review of `main` at `d06539569797686927749b04ac2101ecd64db74a`.
- **Implementation source revision:** `5ad90032552c53d36e59440b1e9551d0b1e41fe3` contains the latest recovery model and UI, including explicit verification methods and action-linked dependency readiness. Current PR `head.sha` is authoritative for review; any later commit requires refreshed exact-head build and test results.
- **Scope changed:** implemented the complete six-stage workflow, linked tracking data/dependencies and verification methods, schedule comparison, verification traceability, risk evidence gate, six exit criteria, and local persistence. Supplier Recovery and Project Controls remain available.
- **Validation:** local `npm test` passed 5/5 and `npm run build` passed after the final code change. Exact implementation source `5ad90032552c53d36e59440b1e9551d0b1e41fe3` passed npm ci, focused tests, and build in Actions [run 43422289240](https://github.com/LenyLLL/projectDemo/actions/runs/43422289240). A subsequent handoff-only commit requires its own exact-head check.
- **Known limitations:** all content is fictional; no backend or dependency/critical-path model is added. Critical-path impact remains “assessment required”; vibration threshold remains controlled by approved REQ-VIB-042.
- **Gate status:** Architecture Review, MVP Review, Functional & Scenario Review, and Final Interview Review remain pending dated independent reports. This issue, implementation, and CI do not approve a gate.

## Historical handoffs and review feedback

### Initial review handoff

- **Created:** 2026-11-11, before a PR existed.
- **Target at creation:** repository setup and latest commit at review time.
- **Scope/limitations:** initial project inspection; the dashboard is a fictional portfolio simulation.

### PR #1 Architecture Review feedback — 2026-11-11

- **Review source:** [PR #1 review comment](https://github.com/LenyLLL/projectDemo/pull/1#pullrequestreview-5865871602).
- **Exact reviewed commit:** `45ae1d4c237aa4081d91b7dd46cb3460cef33ee9`.
- **Disposition:** **Accept with follow-ups**; this is PR feedback, not a dated gate report or Gate 1 approval.
- **Follow-ups:** (1) reconcile the overlapping governance files already on `main` and select one sprint-log path; (2) preserve this source SHA while keeping the current review target refreshable; (3) label run 43104615679 as deployed-baseline evidence and use PR-head CI for new revisions.
- **Status:** addressed in PR #2; Gate 1 remains pending independent dated report.

### PR #2 Architecture Review follow-up feedback — 2026-11-11

- **Review source:** [PR #2 review comment](https://github.com/LenyLLL/projectDemo/pull/2#pullrequestreview-5865985843).
- **Exact reviewed commit:** `32b232f7ebdc78447afd9a30ab7de55767de047b`.
- **Disposition:** COMMENTED. The reviewer stated PR #2 was not ready to merge until the failed build was understood and passed. This is feedback, not a dated gate report or Gate 1 approval.
- **P1:** Actions run 43109383321 failed at `npm ci` with a missing-lockfile message, although the reviewed merge tree contained the lockfile. Rerun attempt 2 (job 130826216957) repeated the failure. PR #3 first logged `GITHUB_WORKSPACE`, `PWD`, and the checked-out package files before setup-node; both files existed, but `npm ci` still failed. Its latest head checks the files and npm lock setting after setup-node, parses the lockfile, then runs install/build from the explicit workspace while retaining `npm ci`.
- **P2:** The review requested updating the sprint-log link. At the exact reviewed SHA `32b232f7ebdc78447afd9a30ab7de55767de047b`, `docs/requirements.md` already points to `docs/development/sprint-log.md`. The reviewer later corrected this finding; no duplicate edit was made. See [the correction on PR #2](https://github.com/LenyLLL/projectDemo/pull/2#issuecomment-6808393878).
- **Gate status:** Gate 1 remains pending a dated independent report against the exact PR #3 head reviewed.



### PR #3 CI and governance follow-up — 2026-11-11

- **Review source:** [PR #3](https://github.com/LenyLLL/projectDemo/pull/3), exact head `bbd2c4d78584680689d450669f84853c880bd34f`.
- **Disposition:** Senior TPM **Accept with follow-up**; workspace diagnostics were considered non-blocking and cleanup was deferred. This PR review did not approve a formal review gate.
- **Validation/integration:** [run 43112729192](https://github.com/LenyLLL/projectDemo/actions/runs/43112729192) passed `npm ci` and `npm run build`; PR #3 merged to `develop` at `8116d368a1cc002b8d3a37b3ea4b9d14ddde7bdb`.


### PR #4 follow-up — 2026-11-12

- **Review source:** PR #4 head `16a829490aa4f93b12e78b9220c61a56ceb636d1`.
- **Findings:** the selected scenario label was not persisted with its data; the schedule could show `Complete` when unfinished work packages remained but no incomplete milestone existed.
- **Response:** persist the selected label locally; show `Complete` only when all milestones and work packages are complete; flag unfinished packages without an upcoming milestone as `At risk`.
- **Review state:** implementation and updated handoff are on the new PR #4 head. Await its exact-head build and independent re-review. All formal gates remain pending.



### PR #12 second review follow-up — provisional R-04 roll-up treatment

- **Review sources:** [second review at exact SHA `454d5ba21780e2fc48ae88367816cbe2824597e2`](https://github.com/LenyLLL/projectDemo/pull/12#pullrequestreview-5890705994), repeating the original finding from [review at `0597d29e1e17db9fda75476a98e323df77c2cff1`](https://github.com/LenyLLL/projectDemo/pull/12#pullrequestreview-5890672778).
- **Finding:** before evidence and risk acceptance, scenario R-04 P2×I5 affected project-level high-exposure count and confidence without the provisional qualifier.
- **Disposition:** accepted. New PR #13 retains baseline P4×I5 in project-level risk exposure, confidence, health context, and export until the verification and risk decision gates are accepted. P2×I5 remains visible as a provisional scenario forecast and becomes the roll-up input only after acceptance. Supplier Recovery remains available and its R-08 rating is unchanged.
- **Source review state:** both reviews are COMMENTED feedback, not formal gate approvals. The reviewer found no other blocker against Issue #11. All four formal gates remain pending.
