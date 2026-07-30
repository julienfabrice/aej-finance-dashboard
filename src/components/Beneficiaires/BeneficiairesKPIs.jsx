import { beneficiairesKpis } from '../../data/beneficiairesData';
import './Beneficiaires.css';

const CARDS = [
  { key: 'total', icon: '👥', tone: 'blue', label: 'Total bénéficiaires', value: beneficiairesKpis.total.value.toLocaleString('fr-FR'), sub: beneficiairesKpis.total.sub },
  { key: 'engage', icon: '💠', tone: 'green', label: 'Montant total engagé', value: `${beneficiairesKpis.montantEngage.value} ${beneficiairesKpis.montantEngage.unit}`, sub: beneficiairesKpis.montantEngage.sub },
  { key: 'rembourse', icon: '🤝', tone: 'teal', label: 'Montant remboursé', value: `${beneficiairesKpis.montantRembourse.value} ${beneficiairesKpis.montantRembourse.unit}`, sub: beneficiairesKpis.montantRembourse.sub },
  { key: 'solde', icon: '🪙', tone: 'orange', label: 'Solde restant', value: `${beneficiairesKpis.soldeRestant.value} ${beneficiairesKpis.soldeRestant.unit}`, sub: beneficiairesKpis.soldeRestant.sub },
  { key: 'taux', icon: '📊', tone: 'purple', label: 'Taux de remboursement', value: beneficiairesKpis.tauxRemboursement.value, sub: beneficiairesKpis.tauxRemboursement.sub },
  { key: 'retard', icon: '⚠️', tone: 'danger', label: 'Dossiers en retard', value: beneficiairesKpis.dossiersRetard.value, sub: beneficiairesKpis.dossiersRetard.sub, danger: true },
];

export default function BeneficiairesKPIs() {
  return (
    <section className="ben-kpi-grid">
      {CARDS.map((c) => (
        <article key={c.key} className={`ben-kpi-card ${c.danger ? 'danger' : ''}`}>
          <div className={`ben-kpi-icon tone-${c.tone}`}>{c.icon}</div>
          <div className="ben-kpi-body">
            <p className="ben-kpi-label">{c.label}</p>
            <strong className={`ben-kpi-value ${c.danger ? 'danger' : ''}`}>{c.value}</strong>
            <p className={`ben-kpi-sub ${c.danger ? 'danger' : ''}`}>{c.sub}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
