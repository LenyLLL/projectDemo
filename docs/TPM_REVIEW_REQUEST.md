## Review target

- Repository: [LenyLLL/projectDemo](https://github.com/LenyLLL/projectDemo)
- Default/release branch: `main`; integration branch: `develop`
- Current review PR: [#14 — Restore read-only permissions to the PR build](https://github.com/LenyLLL/projectDemo/pull/14)
- Feature branch: `feature/readonly-pr-build-permissions` → `develop`
- Source feedback: [PR #13 review at `354e165`](https://github.com/LenyLLL/projectDemo/pull/13#pullrequestreview-5891075685); repeated prior finding at [review `5891059924`](https://github.com/LenyLLL/projectDemo/pull/13#pullrequestreview-5891059924).
- Source integration baseline: latest `develop` commit `26f0e452278c25e143f30ac0554d14e1a327a5b6`; `main` remains unchanged.
- Scope: restore the PR build's explicit `contents: read` permission removed in PR #13; preserve the diagnostics/concurrency controls present on `develop`; run npm ci, focused tests, and build. Carry forward PR #13's reviewed app changes because develop predates them.
- Validation: local tests/build and exact-head Actions evidence will be listed after PR publication.
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

- **PR / branch:** [PR #14](https://github.com/LenyLLL/projectDemo/pull/14), `feature/readonly-pr-build-permissions` → `develop`.
- **Source review:** [PR #13 second review](https://github.com/LenyLLL/projectDemo/pull/13#pullrequestreview-5891075685) at `354e165b3f47c50cfec77944aad463a50e8266cc`; same P2 first recorded at [review `5891059924`](https://github.com/LenyLLL/projectDemo/pull/13#pullrequestreview-5891059924).
- **Integration baseline:** latest `develop` at `26f0e452278c25e143f30ac0554d14e1a327a5b6`; `main` was not modified.
- **Finding/disposition:** accepted P2. Restored `permissions: contents: read` and retained the develop workflow's workspace diagnostics and concurrency cancellation; the npm test step and build remain.
- **Carry-forward:** PR #13 app behavior is included because it is not yet in develop; this includes provisional R-04 baseline roll-ups and the separate Supplier Recovery scenario.
- **Exact head SHA and Actions run:** recorded after final PR #14 publication.
- **Known limitations:** all scenario data is fictional and browser-local; no backend or project critical-path model is added.
- **Gate status:** all four formal review gates remain pending separate dated reports in `docs/reviews/`.

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


### PR #13 least-privilege workflow review finding

- **Review source:** [second review at exact head `354e165b3f47c50cfec77944aad463a50e8266cc`](https://github.com/LenyLLL/projectDemo/pull/13#pullrequestreview-5891075685), confirming [the original finding](https://github.com/LenyLLL/projectDemo/pull/13#pullrequestreview-5891059924).
- **Finding/disposition:** accepted P2. Restored explicit `permissions: contents: read` for the pull-request build workflow. Also preserve the diagnostic and concurrency configuration from `develop` and retain focused tests.
- **Follow-up:** PR #14 is open from `feature/readonly-pr-build-permissions` to `develop`; see the current PR body for the exact review SHA and Actions result.
- **Review state:** COMMENTED feedback; no formal gate is approved.
