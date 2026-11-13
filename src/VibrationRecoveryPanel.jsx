import React from 'react'
import { AlertTriangle, Check, CircleHelp, Link2, ShieldAlert } from 'lucide-react'

const dateLabel = value => new Date(`${value}T12:00:00`).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

export default function VibrationRecoveryPanel({ recovery, metrics, tasks, milestones, risks, requirements, onStage, onAction, onRecovery, onBlocker }) {
  const workPackage = id => tasks.find(item => item.id === id)
  const ms03 = milestones.find(item => item.id === 'MS-03')
  const wp04 = workPackage('WP-04')
  const updateRootCause = patch => onRecovery({ rootCause: { ...recovery.rootCause, ...patch } })
  const updateVerification = patch => onRecovery({ verification: { ...recovery.verification, ...patch } })
  const updateRiskReview = patch => onRecovery({ riskReview: { ...recovery.riskReview, ...patch } })
  const updateCloseout = patch => onRecovery({ closeout: { ...recovery.closeout, ...patch } })

  return <section className="vibration-recovery" aria-labelledby="vibration-recovery-title">
    <div className="recovery-title-row">
      <div><div className="section-kicker">TECHNICAL RECOVERY · FICTIONAL SCENARIO</div><h2 id="vibration-recovery-title">Vibration Recovery</h2><p>Recovery forecast and evidence tracker · as of {dateLabel(recovery.asOfDate)}</p></div>
      <div className={`recovery-state state-${metrics.status.toLowerCase().replaceAll(' ', '-')}`}><span/>{metrics.status}</div>
    </div>

    <div className="recovery-summary-grid">
      <article><span>Recovery ID · issue</span><b>{recovery.id} / {recovery.issueRef}</b><small>Accountable recovery owner · {recovery.owner}</small></article>
      <article><span>Stage progress</span><b>{metrics.completedStages}/{metrics.stageTotal} stages</b><div className="recovery-progress"><i style={{ width: `${metrics.progress}%` }}/></div><small>{metrics.progress}% stage completion; exit criteria are evaluated separately</small></article>
      <article><span>Next review checkpoint</span><b>{dateLabel(recovery.stages.find(stage => stage.status !== 'Completed')?.targetDate || recovery.asOfDate)}</b><small>{recovery.stages.find(stage => stage.status !== 'Completed')?.name || 'All stages marked complete'}</small></article>
      <article><span>Open blockers</span><b>{metrics.unresolvedBlockers}</b><small>{recovery.blockers.map(blocker => <label className="recovery-blocker" key={blocker.id}><input type="checkbox" checked={blocker.status === 'Resolved'} onChange={event => onBlocker(blocker.id, { status: event.target.checked ? 'Resolved' : 'Open' })}/>{blocker.title} · {blocker.owner}</label>)}</small></article>
    </div>

    <div className="recovery-dependencies"><div className="section-kicker">DEPENDENCIES</div>{recovery.dependencies.map(dependency => {
      const linkedActions = dependency.actionIds.map(id => recovery.actions.find(action => action.id === id)).filter(Boolean)
      const ready = linkedActions.length > 0 && linkedActions.every(action => action.status === 'Completed' && Boolean(action.evidence.trim()))
      return <article key={dependency.id}><div><b>{dependency.id} · {dependency.title}</b><small>Linked actions: {linkedActions.map(action => action.id).join(', ') || 'No actions linked'} · Owner: {dependency.owner} · Target: {dateLabel(dependency.targetDate)}</small></div><span className={ready ? 'dependency-ready' : ''}>{ready ? 'Ready' : 'Open'}</span></article>
    })}</div>

    <div className="recovery-schedule">
      <div><span>MS-03 baseline</span><b>{dateLabel('2026-11-20')}</b></div>
      <div><span>MS-03 current forecast</span><b>{ms03 ? dateLabel(ms03.date) : 'Milestone missing'}</b><small><span className="inline-edit-label">Edit forecast in Development Plan</span></small></div>
      <div><span>Variance vs baseline</span><b>{metrics.varianceDays > 0 ? '+' : ''}{metrics.varianceDays} calendar days</b></div>
      <div><span>WP-04 target</span><b>{wp04 ? dateLabel(wp04.due) : 'Work package missing'}</b><small><span className="inline-edit-label">Edit target in Work Packages</span></small></div>
      <div className="recovery-schedule-note"><AlertTriangle size={16}/><p>This is a recovery forecast, not evidence that recovery is complete. Critical-path impact: <b>assessment required</b> because the demo has no dependency network.</p></div>
    </div>

    <div className="recovery-stage-heading"><div><div className="section-kicker">RECOVERY WORKFLOW</div><h3>Six-stage recovery plan</h3></div><span>Stage status is editable; completion alone does not close recovery.</span></div>
    <div className="recovery-stages">{recovery.stages.map((stage, index) => <article className={`recovery-stage stage-${stage.status.toLowerCase().replaceAll(' ', '-')}`} key={stage.id} id={`recovery-stage-${stage.id}`}>
      <div className="stage-topline"><span className="stage-number">{String(index + 1).padStart(2, '0')}</span><span className="stage-owner">{stage.owner}</span></div>
      <h4>{stage.name}</h4>
      <label>Status<select value={stage.status} onChange={event => onStage(stage.id, { status: event.target.value })}><option>Not started</option><option>In progress</option><option>Blocked</option><option>Completed</option></select></label>
      <label>Accountable owner / role<input value={stage.owner} onChange={event => onStage(stage.id, { owner: event.target.value })}/></label>
      <label>Target date<input type="date" value={stage.targetDate} onChange={event => onStage(stage.id, { targetDate: event.target.value })}/></label>
      <label>Output / evidence<textarea rows="3" value={stage.output} onChange={event => onStage(stage.id, { output: event.target.value })}/></label>
      {stage.id === 'root-cause' && <div className="hypothesis-box"><b>Candidate causes · hypotheses only</b><span>Mounting/interface · motor/control tuning · encoder/feedback · resonance/structural behavior</span><label>Root-cause disposition<select value={recovery.rootCause.disposition} onChange={event => updateRootCause({ disposition: event.target.value })}><option>Hypotheses only</option><option>Confirmed</option><option>Formally dispositioned</option></select></label><label>Rationale and supporting evidence<textarea rows="2" value={recovery.rootCause.rationale} onChange={event => updateRootCause({ rationale: event.target.value })} placeholder="Required before this exit criterion can pass"/></label></div>}
      {stage.id === 'correct' && <div className="stage-link-note"><Link2 size={14}/> Corrective actions are tracked below and linked to work packages, REQ-VIB-042, and R-04.</div>}
      {stage.id === 'retest' && <div className="verification-gate">
        <div><b>{recovery.verification.requirementId}</b><span>{recovery.verification.method}</span></div>
        <label>Test record status<select value={recovery.verification.status} onChange={event => updateVerification({ status: event.target.value })}><option>Pending</option><option>Passed</option><option>Failed</option></select></label>
        <label>Actual test record / evidence<textarea rows="2" value={recovery.verification.testRecord} onChange={event => updateVerification({ testRecord: event.target.value })} placeholder="Record evidence reference; acceptance threshold comes from the approved requirement"/></label>
        <label className="check-row"><input type="checkbox" checked={recovery.verification.reviewerAccepted} onChange={event => updateVerification({ reviewerAccepted: event.target.checked })} disabled={recovery.verification.status !== 'Passed' || !recovery.verification.testRecord.trim()}/> Reviewer accepted evidence</label>
        <small>No numerical vibration limit is invented; use approved REQ-VIB-042 acceptance criteria.</small>
      </div>}
      {stage.id === 'recover' && <div className="stage-link-note"><ShieldAlert size={14}/> Record forecast impact, decision, and closure approval below; the exit gate still controls final status.</div>}
    </article>)}</div>

    <div className="recovery-action-area">
      <div className="recovery-stage-heading"><div><div className="section-kicker">RECOVERY TRACKING</div><h3>Action register</h3></div><span>Linked records follow edits in the Work Packages and Project Controls views.</span></div>
      <div className="recovery-action-list">{recovery.actions.map(action => <article className="recovery-action" key={action.id}>
        <div className="action-title"><a href={`#recovery-stage-${action.stageId}`}>{action.id} · {action.title}</a><small>Stage: {recovery.stages.find(stage => stage.id === action.stageId)?.name}</small></div>
        <label>Owner<input value={action.owner} onChange={event => onAction(action.id, { owner: event.target.value })}/></label>
        <label>Linked WP<select value={action.workPackageId} onChange={event => onAction(action.id, { workPackageId: event.target.value })}>{tasks.map(item => <option key={item.id} value={item.id}>{item.id} · {item.title}</option>)}</select></label>
        <label>Linked REQ<select value={action.requirementId} onChange={event => onAction(action.id, { requirementId: event.target.value })}>{requirements.map(item => <option key={item.id} value={item.id}>{item.id} · {item.scope}</option>)}</select></label>
        <label>Linked risk<select value={action.riskId} onChange={event => onAction(action.id, { riskId: event.target.value })}>{risks.map(item => <option key={item.id} value={item.id}>{item.id} · {item.title}</option>)}</select></label>
        <label>Due date<input type="date" value={action.dueDate} onChange={event => onAction(action.id, { dueDate: event.target.value })}/></label>
        <label>Status<select value={action.status} onChange={event => onAction(action.id, { status: event.target.value })}><option>Not started</option><option>In progress</option><option>Blocked</option><option>Completed</option></select></label>
        <label className="action-evidence">Verification method<input value={action.verificationMethod} onChange={event => onAction(action.id, { verificationMethod: event.target.value })}/></label>
        <label className="action-evidence">Evidence / notes<textarea rows="2" value={action.evidence} onChange={event => onAction(action.id, { evidence: event.target.value })} placeholder="Required to complete this action"/></label>
        <div className="action-trace"><Link2 size={13}/><span>{workPackage(action.workPackageId)?.title || 'Work package missing'} → {action.requirementId} → {action.riskId}</span></div>
      </article>)}</div>
    </div>

    <div className="recovery-closeout">
      <div className="recovery-stage-heading"><div><div className="section-kicker">EXIT CRITERIA · GO / NO-GO</div><h3>Recovery closeout decision</h3></div><span>All six criteria must pass; stage checkboxes by themselves cannot close the recovery.</span></div>
      <div className="exit-criteria-list">{metrics.exitCriteria.map(item => <div key={item.id} className={item.met ? 'criterion met' : 'criterion'}><span>{item.met ? <Check size={14}/> : <CircleHelp size={14}/>}</span>{item.label}</div>)}</div>
      <div className="recovery-decision-grid">
        <div className="residual-risk-card"><span>R-04 baseline</span><b>P4 × I5 = 20</b><small>Baseline rating retained separately</small><span>Scenario residual</span><b>P2 × I5 = 10 · {metrics.residualRiskStatus === 'Accepted' ? 'Accepted' : 'Provisional'}</b><small>{metrics.residualRiskStatus === 'Accepted' ? `Accepted by ${recovery.riskReview.decisionRole}` : 'Cannot be accepted until REQ-VIB-042 passes with recorded evidence, reviewer acceptance, and a documented risk decision.'}</small><label>Residual-risk decision<select value={recovery.riskReview.accepted ? 'Accepted' : 'Pending review'} onChange={event => updateRiskReview({ accepted: event.target.value === 'Accepted' })} disabled={!metrics.verificationAccepted}><option>Pending review</option><option>Accepted</option></select></label><label>Decision rationale<textarea rows="2" value={recovery.riskReview.rationale} onChange={event => updateRiskReview({ rationale: event.target.value })} placeholder="Required to record risk acceptance"/></label></div>
        <div className="project-recovery-card"><label>Decision authority<input value={recovery.riskReview.decisionRole} onChange={event => updateRiskReview({ decisionRole: event.target.value })}/></label><label>Project impact<textarea rows="2" value={recovery.closeout.impact} onChange={event => updateCloseout({ impact: event.target.value })}/></label><label>Decision needed / decision record<textarea rows="2" value={recovery.closeout.decision} onChange={event => updateCloseout({ decision: event.target.value })}/></label><label>Closure approval status<select value={recovery.closeout.decisionStatus} onChange={event => updateCloseout({ decisionStatus: event.target.value })}><option>Pending</option><option>Approved</option><option>Rejected</option></select></label><label className="check-row"><input type="checkbox" checked={recovery.closeout.controlsUpdated} onChange={event => updateCloseout({ controlsUpdated: event.target.checked })}/> Milestone forecast, RAID, and status report updated</label><small>Open decision: {recovery.closeout.decisionStatus === 'Pending' ? recovery.closeout.decision : 'No open decision'} · Authority: {recovery.riskReview.decisionRole}</small></div>
      </div>
      <div className="recovery-closeout-footer"><b>Recovery status: {metrics.status}</b><span>{metrics.allExitCriteriaMet ? 'Exit criteria met; all six stages and closure approval are still required.' : 'Recovery remains open until every evidence and approval gate is satisfied.'}</span></div>
    </div>
  </section>
}
