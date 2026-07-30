import '../Exploitation/Exploitation.css';

export default function IndicateursProfileHeader({ nom, code }) {
  const initiales = nom.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();

  return (
    <div className="expl-card indic-profile-bar">
      <div className="indic-profile-left">
        <div className="expl-preview-avatar" style={{ width: 52, height: 52, fontSize: 16 }}>
          {initiales}
        </div>
        <div>
          <strong>{nom}</strong>
          <p className="indic-code">{code}</p>
          <span className="expl-preview-badge">À jour</span>
        </div>
        <div className="indic-divider" />
        <div>
          <p className="indic-mini-label">Nombre total bénéficiaires</p>
          <p className="indic-mini-value">Dossier {code}</p>
        </div>
      </div>
      <div className="indic-profile-actions">
        <button className="expl-print-btn">✏️ Modifier le dossier</button>
        <button className="expl-export-btn">⬇️ Télécharger Rapport PDF</button>
      </div>
    </div>
  );
}
