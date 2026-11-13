# Vibration Recovery manual verification

All names, dates, risks, stage outputs, and statuses below are fictional portfolio-simulation data.

1. Load **Baseline plan**. Confirm the Vibration Recovery panel is absent.
2. Load **Supplier slip**, then **Supplier recovery**. Confirm Supplier Recovery assumptions remain visible and the Vibration Recovery panel is absent.
3. Load **Vibration recovery plan**. Confirm REC-01 / R-04, all six ordered stages, stage count/progress, blockers, and the next checkpoint are visible.
4. Confirm MS-03 baseline is 20 Nov 2026, seed forecast is 20 Nov 2026 with 0 calendar-day variance, and WP-04 target is 17 Nov 2026. Confirm critical-path impact says assessment required.
5. Edit a stage owner, status, date, or output and an action owner/status/verification method/evidence. Refresh while this scenario remains selected; confirm the edits persist.
6. Confirm RA-01 links Corrective Actions → WP-04 → REQ-VIB-042 → R-04. Confirm DEP-REC-01 stays Open until its linked corrective actions have completed evidence, then derives Ready. Edit linked Work Package state and forecast in their existing views; confirm the Recovery panel reflects those records. Open Project Controls → Verification Traceability and confirm REQ-VIB-042 shows the same actual re-test status and record.
7. Before test acceptance, attempt to close R-04 and confirm the risk remains provisional. Marking the test Passed without a test-record reference and reviewer acceptance must not enable residual-risk acceptance.
8. Before recovery acceptance, confirm the project-level Open Risks / confidence indicators and exported status brief use baseline R-04 P4×I5, while the Recovery panel labels P2×I5 provisional. Verify the displayed roll-up assumption is visible. Complete the evidence and risk-review gate; confirm project-level exposure then switches to accepted residual P2×I5. Switch to Supplier recovery and confirm its R-08 rating is unchanged.
9. Mark all six stages Completed without meeting the exit criteria. Confirm the overall recovery status does not become Complete. Resolve root cause with rationale, complete linked actions with evidence, pass and accept the REQ-VIB-042 record, resolve blockers, record residual-risk acceptance, update controls, and record closure approval; only then may recovery show Complete.
10. Switch back to Supplier recovery. Confirm the existing supplier panel and its data remain intact. Return to Vibration recovery plan and verify its saved scenario snapshot behavior.
11. Select **Reset demo**. Confirm Baseline plan is selected and both supplier and vibration recovery panels are hidden.

Automated focused checks: `npm test`. Production compile: `npm run build`.
