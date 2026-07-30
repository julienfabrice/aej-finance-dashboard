import { rapportTypes } from '../../data/rapportsData';
import './Rapports.css';

export default function RapportTypesGrid() {
  return (
    <div>
      <h3 className="rap-section-title">Aperçu des rapports disponibles</h3>
      <div className="rap-types-grid">
        {rapportTypes.map((r) => (
          <article key={r.key} className="rap-type-card">
            <div className={`rap-type-icon tone-${r.tone}`}>{r.icon}</div>
            <h4>{r.titre}</h4>
            <p className="rap-type-desc">{r.desc}</p>
            <ul>
              {r.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <button className="rap-select-btn">Sélectionner</button>
          </article>
        ))}
      </div>
    </div>
  );
}
