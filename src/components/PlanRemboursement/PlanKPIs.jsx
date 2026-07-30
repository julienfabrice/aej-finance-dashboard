import { formatFCFA } from '../../data/planRemboursementData';
import './PlanRemboursement.css';

export default function PlanKPIs({ plan }) {
  return (
    <section className="plan-kpi-row">
      <article className="plan-kpi-card">
        <div className="plan-kpi-icon tone-green">🪙</div>
        <div>
          <p>Montant financé</p>
          <strong>{formatFCFA(plan.montantFinance)}</strong>
        </div>
      </article>
      <article className="plan-kpi-card">
        <div className="plan-kpi-icon tone-blue">💳</div>
        <div>
          <p>Montant remboursé</p>
          <strong>{formatFCFA(plan.montantRembourse)}</strong>
        </div>
      </article>
      <article className="plan-kpi-card">
        <div className="plan-kpi-icon tone-orange">🥧</div>
        <div>
          <p>Solde restant</p>
          <strong>{formatFCFA(plan.soldeRestant)}</strong>
        </div>
      </article>
      <article className="plan-kpi-card">
        <div className="plan-kpi-icon tone-green">%</div>
        <div>
          <p>Taux de remboursement</p>
          <strong>{plan.tauxRemboursement}%</strong>
        </div>
      </article>
      <article className="plan-kpi-card plan-kpi-alert">
        <div className="plan-kpi-icon tone-danger">⚠️</div>
        <div>
          <p className="alert-title">{plan.alerte.echeancesRetard} échéance en retard</p>
          <span className="alert-sub">{plan.alerte.libelle}</span>
        </div>
      </article>
    </section>
  );
}
