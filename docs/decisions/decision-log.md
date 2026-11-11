# Decision Log

This log captures the operating choices for the fictional TPM dashboard. Recording an item here does not mean an independent TPM review gate has approved it.

| ID | Date | Decision | Reason | Consequence / follow-up | Review state |
|---|---|---|---|---|---|
| DEC-001 | 2026-11-11 | Use a fictional Atlas Robotics servo-actuator module program for the portfolio simulation. | Demonstrate robotics hardware/embedded project controls without misrepresenting the portfolio owner's experience. | Keep the fictional label visible in the UI and README; do not present invented outcomes as personal achievements. | Recorded; Architecture Review pending |
| DEC-002 | 2026-11-11 | Deliver a frontend-only React + Vite demo with browser `localStorage`. | Keep the demo simple to run and host without a backend. | Changes are local to one browser and do not synchronize across users/devices. | Recorded; Architecture Review pending |
| DEC-003 | 2026-11-11 | Use the existing public repository `LenyLLL/projectDemo`, with GitHub Pages deployed by GitHub Actions. | User redirected the initial new-repository request to this existing repository. | Vite uses `/projectDemo/` as the production base path; the Actions deployment is the release path. | Recorded; Architecture Review pending |
| DEC-004 | 2026-11-11 | Keep `main` as stable/deployable, use `develop` for integration, and use feature branches with PRs. | Preserve a reviewable change path and follow the supplied collaboration protocol. | Existing deployed baseline remains on `main`; this documentation setup is proposed to `develop` via PR. | Recorded; Architecture Review pending |
| DEC-005 | 2026-11-11 | Require an explicit independent written result for each review gate before marking it approved. | Maintain traceable review governance; development completion alone is not acceptance. | Keep all gates pending until a reviewer report is saved in `docs/reviews/`. | Protocol requirement |

## Open decisions

- Whether the risk score should use a different exposure threshold or calibrated language for a TPM interview.
- Whether the next iteration should make package titles/owners, risk mitigation details, change impact, and budget/schedule assumptions editable.
- Whether the illustrative delivery-confidence heuristic should remain, be replaced with a transparent rule, or be removed.
- Whether a separate deployment protection/approval should gate production publication after `develop` integration.
