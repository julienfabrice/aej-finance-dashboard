import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { beneficiaires, bankColor, formatFCFA } from '../../data/beneficiairesData';
import './Beneficiaires.css';

const PAGE_SIZE_OPTIONS = [10, 25, 50];

function initials(nom) {
  return nom
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function StatutBadge({ statut }) {
  const cls =
    statut === 'En cours' ? 'statut-encours' : statut === 'Clôturé' ? 'statut-cloture' : 'statut-retard';
  return <span className={`ben-badge ${cls}`}>{statut}</span>;
}

export default function BeneficiairesTable({ search }) {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (!search.trim()) return beneficiaires;
    const q = search.toLowerCase();
    return beneficiaires.filter(
      (b) => b.nom.toLowerCase().includes(q) || b.code.toLowerCase().includes(q),
    );
  }, [search]);

  // Démo : on simule 1 245 résultats au total même si seuls quelques-uns
  // sont chargés en mémoire (pagination réelle à brancher côté API plus tard).
  const totalCount = search.trim() ? filtered.length : 1245;
  const rows = filtered.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  return (
    <div className="ben-table-card">
      <div className="ben-table-header">
        <p className="ben-results-count">
          Résultats : <strong>{totalCount.toLocaleString('fr-FR')}</strong> bénéficiaires trouvés
        </p>
        <div className="ben-table-actions">
          <button className="ben-export-btn">📥 Exporter Excel</button>
          <button className="ben-export-btn">📄 Exporter PDF</button>
          <button className="ben-columns-btn">▤ Colonnes</button>
        </div>
      </div>

      <div className="ben-table-scroll">
        <table className="ben-table">
          <thead>
            <tr>
              <th className="ben-th-checkbox">
                <input type="checkbox" />
              </th>
              <th>Photo</th>
              <th>Code bénéficiaire</th>
              <th>Nom &amp; Prénom</th>
              <th>Banque</th>
              <th>Agence</th>
              <th>Montant financé (FCFA)</th>
              <th>Montant remboursé (FCFA)</th>
              <th>Solde restant (FCFA)</th>
              <th>Taux remb.</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((b) => {
              const solde = b.montantFinance - b.montantRembourse;
              return (
                <tr key={b.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div className="ben-avatar">{initials(b.nom)}</div>
                  </td>
                  <td className="ben-code">{b.code}</td>
                  <td className="ben-nom">{b.nom}</td>
                  <td>
                    <span className="ben-bank" style={{ color: bankColor(b.banque) }}>
                      {b.banque}
                    </span>
                  </td>
                  <td className="ben-muted">{b.agence}</td>
                  <td>{formatFCFA(b.montantFinance)}</td>
                  <td>{formatFCFA(b.montantRembourse)}</td>
                  <td className={solde === 0 ? 'ben-solde-zero' : 'ben-solde'}>
                    {formatFCFA(solde)}
                  </td>
                  <td>
                    <div className="ben-taux">
                      <div className="ben-taux-bar">
                        <div
                          className={`ben-taux-fill ${b.tauxRemb < 60 ? 'low' : ''}`}
                          style={{ width: `${b.tauxRemb}%` }}
                        />
                      </div>
                      <span>{b.tauxRemb.toFixed(1).replace('.', ',')}%</span>
                    </div>
                  </td>
                  <td>
                    <StatutBadge statut={b.statut} />
                  </td>
                  <td>
                    <div className="ben-row-actions">
                      <Link to={`/beneficiaires/${b.code}`} title="Voir le dossier">
                        👁️
                      </Link>
                      <button title="Dossier">📄</button>
                      <button title="Modifier">✏️</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="ben-pagination">
        <div className="ben-page-size">
          Afficher
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
          >
            {PAGE_SIZE_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          lignes par page
        </div>

        <div className="ben-page-nav">
          <button disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
            ‹
          </button>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={page === n ? 'active' : ''}
              onClick={() => setPage(n)}
              disabled={n > totalPages}
            >
              {n}
            </button>
          ))}
          <span>…</span>
          <button onClick={() => setPage(totalPages)}>{totalPages}</button>
          <button disabled={page === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
            ›
          </button>
        </div>

        <p className="ben-page-summary">
          {(page - 1) * pageSize + 1} - {Math.min(page * pageSize, totalCount)} sur{' '}
          {totalCount.toLocaleString('fr-FR')}
        </p>
      </div>
    </div>
  );
}
