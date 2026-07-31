import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { WORKFLOW_STAGES, getWorkflowBoardData } from '../../data/workflowData';
import './WorkflowBoard.css';

function initials(nom) {
  return nom.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
}

export default function WorkflowBoard() {
  const [items, setItems] = useState(getWorkflowBoardData());
  const [selected, setSelected] = useState(new Set());
  const [notice, setNotice] = useState(null);

  const columns = useMemo(
    () => WORKFLOW_STAGES.map((stage) => ({ ...stage, cards: items.filter((it) => it.stage === stage.key) })),
    [items],
  );

  function toggleCard(id) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function selectedInStage(stageKey) {
    return items.filter((it) => it.stage === stageKey && selected.has(it.id));
  }

  function advanceBatch(stageKey) {
    const stageIndex = WORKFLOW_STAGES.findIndex((s) => s.key === stageKey);
    const nextStage = WORKFLOW_STAGES[stageIndex + 1];
    if (!nextStage) return;

    const toMove = selectedInStage(stageKey);
    if (toMove.length === 0) return;

    const movedIds = new Set(toMove.map((it) => it.id));
    setItems((prev) =>
      prev.map((it) => (movedIds.has(it.id) ? { ...it, stage: nextStage.key, joursDansEtape: 0 } : it)),
    );
    setSelected((prev) => {
      const next = new Set(prev);
      movedIds.forEach((id) => next.delete(id));
      return next;
    });
    setNotice(
      `${toMove.length} dossier${toMove.length > 1 ? 's' : ''} déplacé${toMove.length > 1 ? 's' : ''} vers « ${nextStage.label} »`,
    );
    setTimeout(() => setNotice(null), 3000);
  }

  return (
    <div className="wf-board-wrap">
      {notice && <div className="wf-notice">✅ {notice}</div>}
      <div className="wf-board">
      {columns.map((col, i) => {
        const selCount = selectedInStage(col.key).length;
        const isLast = i === columns.length - 1;

        return (
          <div className="wf-column" key={col.key}>
            <div className="wf-column-header">
              <div>
                <p className="wf-column-title">{col.label}</p>
                <p className="wf-column-count">{col.cards.length} dossier{col.cards.length > 1 ? 's' : ''}</p>
              </div>
            </div>

            {!isLast && (
              <button
                className="wf-batch-btn"
                disabled={selCount === 0}
                onClick={() => advanceBatch(col.key)}
              >
                ➜ Faire avancer le lot {selCount > 0 ? `(${selCount})` : ''}
              </button>
            )}

            <div className="wf-column-cards">
              {col.cards.map((c) => (
                <div className={`wf-card ${selected.has(c.id) ? 'selected' : ''}`} key={c.id}>
                  <div className="wf-card-top">
                    <input
                      type="checkbox"
                      checked={selected.has(c.id)}
                      onChange={() => toggleCard(c.id)}
                    />
                    <div className="wf-card-avatar">{initials(c.nom)}</div>
                    <div className="wf-card-identity">
                      <strong>{c.nom}</strong>
                      <span>{c.code}</span>
                    </div>
                  </div>
                  <div className="wf-card-meta">
                    <span>{c.banque}</span>
                    <span className="wf-card-days">{c.joursDansEtape}j dans l'étape</span>
                  </div>
                  <Link to={`/beneficiaires/${c.code}?tab=workflow`} className="wf-card-link">
                    Voir le dossier →
                  </Link>
                </div>
              ))}

              {col.cards.length === 0 && <p className="wf-empty">Aucun dossier</p>}
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}