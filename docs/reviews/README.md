# TPM Reviews

Store dated Senior TPM review notes here, for example `YYYY-MM-DD-senior-tpm-review.md`.

Each review should identify the exact PR or commit reviewed, summarize the recommendation, list findings by severity with file/section references, and record follow-up actions. Keep historical reviews; add a new file for each review instead of rewriting prior findings.

## Review gates

| Gate | Focus | State |
|---|---|---|
| 1. Architecture Review | Architecture boundaries, data model, dependencies, project controls, and delivery approach | Pending: PR #3 CI must pass and the independent Architecture gate report is still required |
| 2. MVP Review | Scope coverage, usability, fictional framing, and MVP readiness | Pending |
| 3. Functional & Scenario Review | Edit flows, calculated indicators, local persistence, scenario loading, and reset behavior | Pending |
| 4. Final Interview Review | Walkthrough clarity, narrative integrity, portfolio presentation, and release readiness | Pending |

## Feedback versus gate approval

A GitHub PR review comment records feedback on a change. A disposition such as “Accept with follow-ups” does not pass a review gate. A gate is approved only when the independent reviewer adds a dated report under this directory that identifies the exact source commit, findings, follow-ups, and explicit gate disposition. Builds, deployments, and implementation completion are not substitutes for that report.

## Recording a result

1. Copy `review-report-template.md` to a dated file, for example `architecture-review-2026-11-12.md`.
2. Record the exact PR head SHA at the time of review, findings, acceptance criteria, and a clear disposition: **Accept**, **Accept with follow-ups**, or **Needs changes**.
3. Update this gate table and `docs/TPM_REVIEW_REQUEST.md` only after the dated report exists.
4. Keep unresolved findings visible and link each one to an owner and follow-up.
