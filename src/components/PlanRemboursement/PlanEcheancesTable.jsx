import { useState } from 'react';
import { formatFCFA } from '../../data/planRemboursementData';
import './PlanRemboursement.css';

function StatutBadge({ statut }) {
  const cls =
    statut === 'Payée' ? 'payee' : statut === 'En retard' ? 'retard' : 'avenir';
  return <span className={`plan-echeance-badge ${cls}`}>{statut}</span>;
}

export default function PlanEcheancesTable({ echeances }) {
  const [page, setPage] = useState(1);

  return (
    <div className="plan-card">
      <h3>🧾 Tableau des échéances</h3>
      <div className="plan-table-scroll">
        <table className="plan-table">
          <thead>
            <tr>
              <th>Mois</th>
              <th>Échéance (FCFA)</th>
              <th>Montant payé (FCFA)</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {echeances.map((e) => (
              <tr key={e.mois}>
                <td>{e.mois}</td>
                <td>{formatFCFA(e.echeance).replace(' FCFA', '')}</td>
                <td>{formatFCFA(e.paye).replace(' FCFA', '')}</td>
                <td>
                  <StatutBadge statut={e.statut} />
                </td>
                <td>
                  <button className="plan-eye-btn">👁️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="plan-pagination">
        <button disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
          ‹
        </button>
        {[1, 2, 3].map((n) => (
          <button key={n} className={page === n ? 'active' : ''} onClick={() => setPage(n)}>
            {n}
          </button>
        ))}
        <button onClick={() => setPage((p) => p + 1)}>›</button>
      </div>
    </div>
  );
}
