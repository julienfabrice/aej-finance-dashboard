import { formatFCFA } from '../../data/dossierData';
import './Dossier.css';

export default function DossierKPIs({ dossier }) {
  const cards = [
    { icon: '💲', tone: 'green', label: 'Montant Financé', value: formatFCFA(dossier.montantFinance) },
    { icon: '💲', tone: 'green', label: 'Montant Remboursé', value: formatFCFA(dossier.montantRembourse) },
    { icon: '💳', tone: 'orange', label: 'Solde Restant', value: formatFCFA(dossier.soldeRestant), warn: true },
    { icon: '📊', tone: 'blue', label: 'Taux de Remboursement', value: `${dossier.tauxRemboursement}%` },
  ];

  return (
    <section className="dossier-kpi-row">
      {cards.map((c) => (
        <article key={c.label} className="dossier-kpi-card">
          <div className={`dossier-kpi-icon tone-${c.tone}`}>{c.icon}</div>
          <div>
            <p className="dossier-kpi-label">{c.label}</p>
            <strong className={`dossier-kpi-value ${c.warn ? 'warn' : ''}`}>{c.value}</strong>
          </div>
        </article>
      ))}
    </section>
  );
}
