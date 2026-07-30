import { beneficiairesFilterOptions } from '../../data/beneficiairesData';
import './Beneficiaires.css';

export default function BeneficiairesFilters({ search, onSearchChange }) {
  const { banques, agences, regions, statuts } = beneficiairesFilterOptions;

  return (
    <div className="ben-filters-card">
      <div className="ben-search">
        <input
          type="text"
          placeholder="Rechercher (nom, code, téléphone...)"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <span aria-hidden>🔍</span>
      </div>

      <div className="ben-filters-row">
        <label>
          <span>Banque</span>
          <select defaultValue={banques[0]}>
            {banques.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Agence</span>
          <select defaultValue={agences[0]}>
            {agences.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Région</span>
          <select defaultValue={regions[0]}>
            {regions.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Statut</span>
          <select defaultValue={statuts[0]}>
            {statuts.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Période</span>
          <div className="ben-period-input">📅 01/01/2024 - 31/12/2024</div>
        </label>
        <button className="ben-advanced-btn">⚏ Filtres avancés</button>
      </div>
    </div>
  );
}
