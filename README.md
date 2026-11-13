# Robotics TPM Dashboard

An interactive **portfolio simulation** of a robotics development project control dashboard. This is a fictional scenario created to demonstrate how a Technical Project Manager can bring engineering plans, work packages, risks, changes, and status reporting into one reviewable workspace.

> **Fictional scenario:** Atlas Robotics is developing a compact servo-actuator module for a next-generation collaborative robot. All project names, people, dates, costs, and delivery status shown in the app are invented for this portfolio demo. They do not describe a project personally managed or delivered by the portfolio owner.

## What you can explore

- **Project Overview** — delivery health, calculated progress and risk indicators, schedule outlook, and the next milestone.
- **Development Plan & Milestones** — a lightweight cross-functional schedule from requirements baseline through pilot readiness; open **Full plan** to see every milestone's owner, target date, planned outcome, and exit check.
- **Work Packages & Action Tracker** — search tasks and edit status inline; completion counts and average progress update from the task data.
- **Risks & Issues** — probability × impact exposure, named owners, mitigation actions, and add-risk controls.
- **Change & Decision Log** — change requests and decisions with rationale, decision authority, status, and baseline impact.
- **Project Controls** — illustrative RACI matrix, consolidated RAID log, verification traceability matrix, and supplier readiness tracker.
- **Project Reporting** — current scenario summary and a status brief action.
- **Scenario controls** — compare the baseline, supplier slip, vibration recovery, and supplier recovery scenarios with visible work-package, milestone, and risk impacts; reset to the original baseline at any time.
- **Vibration Recovery workflow** — when selected, track six recovery stages, linked actions, blockers, schedule variance, REQ-VIB-042 test evidence, provisional residual risk, and evidence-based exit approval. The Supplier Recovery panel remains available in its own scenario.

Edits are saved in the browser with `localStorage`; no backend or account is needed. Use **Reset demo** to restore the fictional baseline on the current browser.

## Tech stack

- React 19 with Vite
- Lucide icons
- CSS responsive layout
- Browser `localStorage` for persistence
- GitHub Actions and GitHub Pages for static deployment

## Run locally

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`). To create and preview a production build:

```bash
npm run build
npm run preview
```

## Live demo deployment

The workflow in `.github/workflows/deploy.yml` builds the static app and deploys it to GitHub Pages after a push to `main` or a manual workflow run. It sets the Vite base path for the project repository. After the first successful Actions run and Pages configuration, the expected URL is:

`https://lenylll.github.io/projectDemo/`

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions** if it is not already enabled. GitHub Actions needs Pages write permission, configured in the workflow.

## Project model

The dashboard stores editable work packages, milestones, risks, change/decision entries, and vibration-recovery tracking records in the browser. RACI, RAID, verification traceability, and supplier readiness remain illustrative reference records. Recovery actions reference work packages, requirements, and risks; the residual vibration risk stays provisional until approved requirement evidence is recorded and accepted. Recovery completion requires all six exit criteria and closure approval, not only completed stage statuses. Scenario presets are seed snapshots, while edits persist locally for the selected scenario until another scenario is loaded or the baseline reset is selected.

Run `npm test` for focused recovery-logic checks and `npm run build` for the production bundle. See [the manual recovery checklist](docs/testing/vibration-recovery-checklist.md) for scenario-switching, persistence, evidence-gate, and reset checks.

## Portfolio context

This project is intentionally framed as a **TPM operating tool** for a fictional hardware and embedded-software development effort. It is not a case study of logistics or cross-border product shipping, and it makes no claim that the portfolio owner managed the fictional program.

