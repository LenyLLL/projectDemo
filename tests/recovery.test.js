import test from 'node:test'
import assert from 'node:assert/strict'
import { calculateProjectRiskRollup, deriveRecoveryMetrics, vibrationRecoverySeed } from '../src/recovery.js'

const clone = value => JSON.parse(JSON.stringify(value))
const tasks = [{ id: 'WP-03', status: 'In progress' }, { id: 'WP-04', status: 'In progress' }]
const milestones = [{ id: 'MS-03', date: '2026-11-20', status: 'On track' }]
const risks = [{ id: 'R-04' }]
const requirements = [{ id: 'REQ-VIB-042' }]

function readyRecovery() {
  const recovery = clone(vibrationRecoverySeed)
  recovery.stages.forEach(stage => { stage.status = 'Completed' })
  recovery.rootCause = { disposition: 'Confirmed', rationale: 'Repeatable bench evidence supports the mount interface as the cause.' }
  recovery.actions.forEach(action => { action.status = 'Completed'; action.evidence = `Evidence for ${action.id}` })
  recovery.verification = { requirementId: 'REQ-VIB-042', method: 'Isolation-mount A/B bench test', status: 'Passed', testRecord: 'VIB-TEST-014', reviewerAccepted: true }
  recovery.blockers.forEach(blocker => { blocker.status = 'Resolved' })
  recovery.riskReview = { accepted: true, decisionRole: 'Program Manager', rationale: 'Residual exposure accepted after reviewed re-test.' }
  recovery.closeout = { impact: 'Forecast retained', decision: 'Close recovery after verified evidence.', decisionStatus: 'Approved', controlsUpdated: true }
  return recovery
}

test('seeded vibration scenario derives progress and blocked status from workflow data', () => {
  const metrics = deriveRecoveryMetrics(clone(vibrationRecoverySeed), tasks, milestones, risks, requirements)
  assert.equal(metrics.completedStages, 2)
  assert.equal(metrics.stageTotal, 6)
  assert.equal(metrics.progress, 33)
  assert.equal(metrics.status, 'Blocked')
  assert.equal(metrics.residualRiskStatus, 'Provisional')
})

test('marking all stages complete alone cannot close recovery', () => {
  const recovery = clone(vibrationRecoverySeed)
  recovery.stages.forEach(stage => { stage.status = 'Completed' })
  const metrics = deriveRecoveryMetrics(recovery, tasks, milestones, risks, requirements)
  assert.equal(metrics.completedStages, 6)
  assert.equal(metrics.status, 'Blocked')
  assert.equal(metrics.allExitCriteriaMet, false)
})

test('R-04 residual stays provisional until the passed test record is accepted', () => {
  const recovery = readyRecovery()
  recovery.verification.reviewerAccepted = false
  const metrics = deriveRecoveryMetrics(recovery, tasks, milestones, risks, requirements)
  assert.equal(metrics.verificationAccepted, false)
  assert.equal(metrics.residualRiskStatus, 'Provisional')
  assert.equal(metrics.exitCriteria.find(item => item.id === 'risk').met, false)
})

test('recovery completes only when all six stages, evidence gates, blockers, controls, and approval are satisfied', () => {
  const recovery = readyRecovery()
  assert.equal(deriveRecoveryMetrics(recovery, tasks, milestones, risks, requirements).status, 'Complete')
  recovery.closeout.decisionStatus = 'Pending'
  assert.equal(deriveRecoveryMetrics(recovery, tasks, milestones, risks, requirements).status, 'In progress')
})

test('schedule variance is calculated from MS-03 forecast against the fixed baseline', () => {
  const recovery = clone(vibrationRecoverySeed)
  assert.equal(deriveRecoveryMetrics(recovery, tasks, milestones, risks, requirements).varianceDays, 0)
  assert.equal(deriveRecoveryMetrics(recovery, tasks, [{ ...milestones[0], date: '2026-11-24' }], risks, requirements).varianceDays, 4)
})

test('provisional vibration residual keeps accepted baseline exposure in project roll-ups', () => {
  const risks = [
    { id: 'R-04', probability: 2, impact: 5, status: 'Mitigating' },
    { id: 'R-02', probability: 3, impact: 4, status: 'Open' }
  ]
  const provisional = calculateProjectRiskRollup(risks, 'Vibration recovery plan', { residualRiskStatus: 'Provisional' })
  assert.equal(provisional.openRisks, 2)
  assert.equal(provisional.highExposureCount, 1)
  assert.deepEqual(provisional.provisionalBaselineRiskIds, ['R-04'])
  assert.equal(provisional.averageRiskExposure, 16)

  const accepted = calculateProjectRiskRollup(risks, 'Vibration recovery plan', { residualRiskStatus: 'Accepted' })
  assert.equal(accepted.highExposureCount, 0)
  assert.equal(accepted.averageRiskExposure, 11)
  assert.deepEqual(accepted.provisionalBaselineRiskIds, [])
})

test('other scenarios keep their own risk ratings in project roll-ups', () => {
  const risks = [{ id: 'R-04', probability: 2, impact: 5, status: 'Mitigating' }]
  const rollup = calculateProjectRiskRollup(risks, 'Supplier recovery', { residualRiskStatus: 'Provisional' })
  assert.equal(rollup.highExposureCount, 0)
  assert.equal(rollup.averageRiskExposure, 10)
  assert.deepEqual(rollup.provisionalBaselineRiskIds, [])
})
