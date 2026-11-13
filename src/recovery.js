export const vibrationRecoverySeed = {
  id: 'REC-01',
  issueRef: 'R-04',
  owner: 'Luca Romano',
  asOfDate: '2026-11-11',
  rootCause: { disposition: 'Hypotheses only', rationale: '' },
  stages: [
    { id: 'identify', name: 'Issue Identification', status: 'Completed', owner: 'Luca Romano', targetDate: '2026-11-12', output: '42 Hz resonance reproduced on the actuator bench; test record is being assembled.' },
    { id: 'contain', name: 'Containment', status: 'Completed', owner: 'Maya Chen', targetDate: '2026-11-13', output: 'Hold release claims for WP-04; preserve the current mount configuration for controlled comparison.' },
    { id: 'root-cause', name: 'Root Cause Analysis', status: 'In progress', owner: 'Luca Romano', targetDate: '2026-11-14', output: 'Compare mounting/interface, motor/control tuning, encoder/feedback, and resonance/structural hypotheses. None is confirmed yet.' },
    { id: 'correct', name: 'Corrective Actions', status: 'In progress', owner: 'Jonas Weber', targetDate: '2026-11-16', output: 'Complete corrective action evidence before the vibration re-test.' },
    { id: 'retest', name: 'Re-testing & Validation', status: 'Not started', owner: 'Luca Romano', targetDate: '2026-11-17', output: 'Verify against approved requirement REQ-VIB-042; no numeric threshold is invented here.' },
    { id: 'recover', name: 'Project Recovery', status: 'Not started', owner: 'Program Manager', targetDate: '2026-11-20', output: 'Record impact, forecast decision, and closure approval after exit criteria are met.' }
  ],
  actions: [
    { id: 'RA-01', stageId: 'correct', title: 'Run controlled isolation-mount A/B correction', owner: 'Luca Romano', workPackageId: 'WP-04', requirementId: 'REQ-VIB-042', riskId: 'R-04', dueDate: '2026-11-16', status: 'In progress', evidence: '' },
    { id: 'RA-02', stageId: 'correct', title: 'Check encoder feedback and capture configuration baseline', owner: 'Priya Nair', workPackageId: 'WP-03', requirementId: 'REQ-VIB-042', riskId: 'R-04', dueDate: '2026-11-15', status: 'Not started', evidence: '' }
  ],
  verification: { requirementId: 'REQ-VIB-042', method: 'Isolation-mount A/B bench test', status: 'Pending', testRecord: '', reviewerAccepted: false },
  blockers: [{ id: 'BL-01', title: 'Root-cause evidence and vibration re-test are pending', owner: 'Luca Romano', status: 'Open' }],
  riskReview: { accepted: false, decisionRole: 'Program Manager', rationale: '' },
  closeout: { impact: 'WP-04 test forecast is 17 Nov; MS-03 remains forecast for 20 Nov in this seed scenario.', decision: 'Reconfirm MS-03 forecast after vibration re-test evidence is reviewed.', decisionStatus: 'Pending', controlsUpdated: false }
}

export function deriveRecoveryMetrics(recovery, workPackages, milestones, risks = [], requirements = []) {
  if (!recovery) return null
  const completedStages = recovery.stages.filter(stage => stage.status === 'Completed').length
  const unresolvedBlockers = recovery.blockers.filter(blocker => blocker.status !== 'Resolved').length
  const verificationAccepted = recovery.verification.status === 'Passed' && Boolean(recovery.verification.testRecord.trim()) && recovery.verification.reviewerAccepted
  const rootCauseDispositioned = ['Confirmed', 'Formally dispositioned'].includes(recovery.rootCause.disposition) && Boolean(recovery.rootCause.rationale.trim())
  const actionsComplete = recovery.actions.length > 0 && recovery.actions.every(action => action.status === 'Completed' && Boolean(action.evidence.trim()) && action.workPackageId && action.requirementId && action.riskId)
  const workPackagesById = new Map(workPackages.map(item => [item.id, item]))
  const riskIds = new Set(risks.map(item => item.id))
  const requirementIds = new Set(requirements.map(item => item.id))
  const stageIds = new Set(recovery.stages.map(stage => stage.id))
  const actionsHaveValidWorkPackages = recovery.actions.every(action => workPackagesById.has(action.workPackageId))
  const actionsHaveValidLinks = recovery.actions.every(action => stageIds.has(action.stageId) && requirementIds.has(action.requirementId) && riskIds.has(action.riskId))
  const allMilestonesComplete = milestones.every(milestone => milestone.status === 'Complete')
  const allWorkPackagesComplete = workPackages.every(item => item.status === 'Done')
  const exitCriteria = [
    { id: 'root-cause', label: 'Root cause confirmed or formally dispositioned with rationale', met: rootCauseDispositioned },
    { id: 'actions', label: 'Corrective actions completed with linked evidence', met: actionsComplete && actionsHaveValidWorkPackages && actionsHaveValidLinks },
    { id: 'verification', label: 'REQ-VIB-042 re-test passed and evidence accepted by reviewer', met: verificationAccepted },
    { id: 'blockers', label: 'No unresolved release-blocking anomaly remains', met: unresolvedBlockers === 0 },
    { id: 'risk', label: 'Residual risk reviewed and accepted by the decision role', met: recovery.riskReview.accepted && Boolean(recovery.riskReview.rationale.trim()) && verificationAccepted },
    { id: 'controls', label: 'Milestone forecast, RAID, and status report updated', met: recovery.closeout.controlsUpdated }
  ]
  const allExitCriteriaMet = exitCriteria.every(criterion => criterion.met)
  const canCloseRisk = verificationAccepted && recovery.riskReview.accepted && Boolean(recovery.riskReview.rationale.trim())
  const allStagesComplete = completedStages === recovery.stages.length
  const closureApproved = recovery.closeout.decisionStatus === 'Approved' && Boolean(recovery.closeout.decision.trim())
  const status = allStagesComplete && allExitCriteriaMet && closureApproved
    ? 'Complete'
    : unresolvedBlockers > 0 || recovery.stages.some(stage => stage.status === 'Blocked')
      ? 'Blocked'
      : completedStages > 0 || recovery.stages.some(stage => stage.status === 'In progress')
        ? 'In progress'
        : 'Not started'
  const baselineDate = new Date('2026-11-20T12:00:00Z')
  const forecast = milestones.find(item => item.id === 'MS-03')
  const forecastDate = forecast ? new Date(`${forecast.date}T12:00:00Z`) : baselineDate
  const varianceDays = Math.round((forecastDate - baselineDate) / 86400000)
  return {
    completedStages,
    stageTotal: recovery.stages.length,
    progress: Math.round(completedStages / recovery.stages.length * 100),
    unresolvedBlockers,
    verificationAccepted,
    canCloseRisk,
    residualRiskStatus: recovery.riskReview.accepted && Boolean(recovery.riskReview.rationale.trim()) && verificationAccepted ? 'Accepted' : 'Provisional',
    status,
    exitCriteria,
    allExitCriteriaMet,
    closureApproved,
    varianceDays
  }
}
