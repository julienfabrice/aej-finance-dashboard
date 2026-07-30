import { alertesCritiques, formatFCFA } from '../../data/mockData';
import './AgencyTable.css';

export default function AgencyTable() {
  return (
    <div className="agency-table-card">
      <div className="agency-table-header">
        <div>
          <h3>Critical Alerts &amp; Deadlines</h3>
          <p>Top 5 dossiers avec les majeurs retards</p>
        </div>
      </div>

      <div className="agency-table-scroll">
        <table className="agency-table">
          <thead>
            <tr>
              <th></th>
              <th>Bénéficiaire</th>
              <th>Matricule</th>
              <th>Montant retard</th>
              <th>Jours retard</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alertesCritiques.map((row, i) => (
              <tr key={row.id}>
                <td className="agency-table-rank">{i + 1}</td>
                <td className="agency-table-name">{row.beneficiaire}</td>
                <td className="agency-table-muted">({row.matricule})</td>
                <td className="agency-table-amount">{formatFCFA(row.montant)}</td>
                <td>
                  <span className="agency-table-days">{row.jours} jours</span>
                </td>
                <td>
                  <button className="agency-table-action">↻ Relancer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="agency-table-footer">Data dernière mise à jour à 15:30</p>
    </div>
  );
}
