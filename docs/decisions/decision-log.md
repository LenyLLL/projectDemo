# Decision Log

Record material product, technical, and delivery decisions. Add new entries at the top; retain prior entries.

## 2026-11-11 — Follow-up decisions from the Architecture Review feedback

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
