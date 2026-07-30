import { useState } from 'react';
import { suiviIndicateurs } from '../../data/exploitationData';
import '../Exploitation/Exploitation.css';

export default function IndicateursTable() {
  const [page, setPage] = useState(1);
  const totalPages = 100;

  return (
    <div className="expl-card">
      <h3>Suivi Détaillé des Indicateurs par Dossier</h3>
      <div className="expl-table-scroll">
        <table className="expl-table">
          <thead>
            <tr>
              <th>Dossier ↓</th>
              <th>Type d'activité</th>
              <th>Emplois Créés</th>
              <th>Pérennité</th>
              <th>Inclusion (Fém.)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {suiviIndicateurs.map((row, i) => (
              <tr key={i}>
                <td>
                  <strong className="expl-nom">{row.dossier}</strong>
                  <br />
                  <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>{row.code}</span>
                </td>
                <td>{row.activite}</td>
                <td>{row.emplois}</td>
                <td>
                  <span className="expl-badge">{row.perennite}</span>
                </td>
                <td>{row.inclusion}</td>
                <td>
                  <div className="expl-row-actions">
                    {row.action === 'Relancer' ? <button>↻ Relancer</button> : <button>🔍 Voir</button>}
                    <button>📄 PDF</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="expl-table-footer">
        <div className="expl-page-size">
          Afficher <select defaultValue={10}><option>10</option></select> lignes per page
        </div>
        <div className="indic-page-nav">
          <button disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>«</button>
          <button disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>‹</button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} className={page === n ? 'active' : ''} onClick={() => setPage(n)}>{n}</button>
          ))}
          <span>…</span>
          <button onClick={() => setPage(totalPages)}>{totalPages}</button>
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>›</button>
          <button onClick={() => setPage(totalPages)}>»</button>
        </div>
        <div className="expl-page-goto">
          Aller à la page <input type="number" defaultValue={1} />
        </div>
      </div>
    </div>
  );
}
