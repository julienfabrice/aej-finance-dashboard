import { formatFCFA } from '../../data/planRemboursementData';
import './PlanRemboursement.css';

export function PlanDetailsCard({ details }) {
  const rows = [
    ['Montant du prêt :', formatFCFA(details.montantPret)],
    ['Durée :', details.duree],
    ['Périodicité :', details.periodicite],
    ['Fréquence :', details.frequence],
    ["Taux d'intérêt :", details.tauxInteret],
    ['Échéance mensuelle :', formatFCFA(details.echeanceMensuelle)],
  ];

  return (
    <div className="plan-card">
      <h3>🧮 Détails du plan de remboursement</h3>
      <dl className="plan-details-list">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function PlanResumeCard({ plan }) {
  return (
    <div className="plan-side-stack">
      <div className="plan-card">
        <h3>📋 Résumé</h3>
        <dl className="plan-details-list">
          <div>
            <dt>Total prévu :</dt>
            <dd>{formatFCFA(plan.montantFinance)}</dd>
          </div>
          <div>
            <dt>Total remboursé :</dt>
            <dd>{formatFCFA(plan.montantRembourse)}</dd>
          </div>
          <div>
            <dt>Solde restant :</dt>
            <dd>{formatFCFA(plan.soldeRestant)}</dd>
          </div>
        </dl>
        <p className="plan-taux-label">Taux de remboursement :</p>
        <div className="plan-taux-row">
          <div className="plan-taux-bar">
            <div style={{ width: `${plan.tauxRemboursement}%` }} />
          </div>
          <strong>{plan.tauxRemboursement}%</strong>
        </div>
      </div>

      <div className="plan-alert-card danger">
        <strong>⚠️ Alerte</strong>
        <p>Échéance de mars 2024 non honorée</p>
      </div>

      <div className="plan-alert-card success">
        <strong>✅ Prochaine échéance</strong>
        <p>
          {plan.prochaineEcheance.date} — {formatFCFA(plan.prochaineEcheance.montant)}
        </p>
      </div>
    </div>
  );
}

export function PlanLegendCard() {
  const items = [
    { color: 'var(--success)', label: 'Échéance payée' },
    { color: 'var(--danger)', label: 'Échéance en retard' },
    { color: '#2563eb', label: 'Échéance à venir' },
    { color: '#9ca3af', label: 'Échéance non définie' },
  ];

  return (
    <div className="plan-card">
      <h3>ℹ️ Légende</h3>
      <ul className="plan-legend-list">
        {items.map((it) => (
          <li key={it.label}>
            <span className="dot" style={{ background: it.color }} />
            {it.label}
          </li>
        ))}
      </ul>

      <div className="plan-legend-actions">
        <button className="plan-btn-primary">⬇️ Télécharger le relevé</button>
        <button className="plan-btn-outline">🖨️ Imprimer</button>
      </div>
    </div>
  );
}
