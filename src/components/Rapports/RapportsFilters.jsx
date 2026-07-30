import { rapportsFilterOptions } from '../../data/rapportsData';
import './Rapports.css';

export default function RapportsFilters() {
  const { types, banques, agences, regions, statuts, secteurs } = rapportsFilterOptions;

  return (
    <div className="rap-card">
      <h3>Filtres de génération</h3>
      <div className="rap-filters-grid">
        <label>
          <span>Type de rapport</span>
          <select defaultValue={types[0]}>
            {types.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
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
          <span>Période</span>
          <div className="rap-period">📅 01/01/2024 - 31/12/2024</div>
        </label>

        <label>
          <span>Statut du dossier</span>
          <select defaultValue={statuts[0]}>
            {statuts.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Secteur d'activité</span>
          <select defaultValue={secteurs[0]}>
            {secteurs.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <button className="rap-advanced-btn">⚏ Filtres avancés</button>
        <div className="rap-filters-actions">
          <button className="rap-btn-outline">↻ Réinitialiser</button>
          <button className="rap-btn-primary">🔍 Afficher les résultats</button>
        </div>
      </div>
    </div>
  );
}
