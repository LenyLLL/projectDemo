# Independent TPM Reviews

This directory is the record of review outcomes. A gate becomes approved only when an independent reviewer has completed the review and a dated written result is committed here. Do not infer approval from implementation completion, a successful build, or a successful deployment.

## Review gates

| Gate | Focus | State |
|---|---|---|
| 1. Architecture Review | Architecture, data model, dependencies, project controls, delivery approach | Pending independent review |
| 2. MVP Review | Scope coverage, usability, credibility, and MVP readiness | Pending Architecture Review and independent review |
| 3. Functional & Scenario Review | Edit flows, calculated indicators, persistence, scenarios, and reset behavior | Pending independent review |
| 4. Final Interview Review | Clarity, narrative integrity, portfolio presentation, and release readiness | Pending independent review |

## Recording a result

1. Copy `review-report-template.md` to a dated file, for example `architecture-review-2026-11-12.md`.
2. Record the exact source commit and review PR, findings, acceptance criteria, and a clear disposition: **Accept**, **Accept with follow-ups**, or **Needs changes**.
3. Update the gate table and `docs/TPM_REVIEW_REQUEST.md` only after the written report exists.
4. Keep unresolved findings visible and link each one to an owner and follow-up.

## Reports

No independent reviewer report has been completed yet. All gates remain pending.
