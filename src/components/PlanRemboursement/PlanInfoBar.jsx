import { formatFCFA } from '../../data/planRemboursementData';
import './PlanRemboursement.css';

export default function PlanInfoBar({ info }) {
  const items = [
    { icon: '👤', label: 'Bénéficiaire :', value: info.beneficiaire },
    { icon: '🏷️', label: 'Code :', value: info.code },
    { icon: '🏦', label: 'Banque :', value: info.banque },
    { icon: '💲', label: 'Montant financé :', value: formatFCFA(info.montantFinance) },
    { icon: '📅', label: 'Date de décaissement :', value: info.dateDecaissement },
  ];

  return (
    <div className="plan-infobar">
      {items.map((it) => (
        <div className="plan-infobar-item" key={it.label}>
          <span className="plan-infobar-icon">{it.icon}</span>
          <div>
            <p>{it.label}</p>
            <strong>{it.value}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}
