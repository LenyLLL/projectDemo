# Decision Log

Record material product, technical, and delivery decisions. Add new entries at the top; retain prior entries.

## 2026-11-11 — Use GitHub as the review handoff source

- **Status:** Accepted
- **Context:** The dashboard is developed with an Agent and reviewed asynchronously by a Senior TPM in a separate conversation.
- **Decision:** Keep the review brief and durable review records in `docs/`; identify the exact branch, PR, and commit for each review. Treat repository history and PR diffs as the implementation source of truth.
- **Consequences:** Reviewers can refresh current code and discussions directly from GitHub. Each review remains traceable to a specific change.
