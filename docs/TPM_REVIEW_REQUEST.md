## Review target

- Repository: [LenyLLL/projectDemo](https://github.com/LenyLLL/projectDemo)
- Default/release branch: `main`; integration branch: `develop`
- Current review PR: [#4 — Derive project status KPIs from the active scenario](https://github.com/LenyLLL/projectDemo/pull/4)
- Feature branch: `feature/scenario-derived-project-status` → `develop`
- Exact source SHA: see the latest PR #4 body and GitHub `head.sha`; copy that 40-character value into any dated review report before reviewing. The PR body is refreshed after the final documentation commit.
- Scope: scenario-derived health/schedule indicators, next incomplete milestone/date/countdown, active risk counts, work-package/risk navigation badges, and matching status brief.
- Live demo: [https://lenylll.github.io/projectDemo/](https://lenylll.github.io/projectDemo/)
- PR #4 validation: local `npm run build` passed after app changes; local Vite preview was unavailable because binding to `127.0.0.1:5173` failed with `EPERM`; the current exact PR-head Actions check is pending and linked from the PR Checks tab.
- Release control: `main` requires a pull request and the GitHub Actions `build` check; approvals are disabled. GitHub Pages deploys from `main`; PR #4 targets `develop` and does not itself publish to Pages.
- Prior integration: PR #3 was reviewed at `bbd2c4d78584680689d450669f84853c880bd34f`, accepted with a non-blocking workflow cleanup follow-up, and merged to `develop` at `8116d368a1cc002b8d3a37b3ea4b9d14ddde7bdb`. Its PR-head build passed in [run 43112729192](https://github.com/LenyLLL/projectDemo/actions/runs/43112729192).
- Baseline-only deployment evidence: [run 43104615679](https://github.com/LenyLLL/projectDemo/actions/runs/43104615679) validates the deployed code baseline `452cac9c6962ce9d0d6a367d61c967c7e6438329`, not the current PR #4 source.

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

- **PR / branch:** [PR #4](https://github.com/LenyLLL/projectDemo/pull/4), `feature/scenario-derived-project-status` → `develop`.
- **Source revision:** the exact current 40-character PR #4 `head.sha` is recorded in the PR body; the reviewer should copy it into the dated report before review. Any later commit requires refreshing that SHA and re-running the PR-head check.
- **Scope changed:** made the next incomplete milestone, date/countdown, schedule and overall health, active risk totals, nav badges, health panel, and downloaded status brief derive from the selected scenario and its editable task/milestone/risk records. Added a fixed simulation date of 11 Nov 2026 and documented the illustrative status heuristic.
- **Validation:** local `npm run build` passed after the app changes; the local Vite preview could not start (`EPERM` binding `127.0.0.1:5173`). Current PR-head build status is in the PR #4 Checks tab; wait for the result on the exact head before integration.
- **Known limitations:** confidence remains an illustrative risk heuristic; Gantt bars and budget context remain illustrative; some narrative fields remain seed examples; browser-local changes do not sync. See `docs/requirements.md` and `docs/development/sprint-log.md`.
- **Gate status:** Architecture Review, MVP Review, Functional & Scenario Review, and Final Interview Review remain pending dated independent reports. No gate is approved by this PR review or its build result.

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
