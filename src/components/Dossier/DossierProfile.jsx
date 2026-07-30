import './Dossier.css';

export default function DossierProfile({ dossier }) {
  const initiales = dossier.nom
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const isRetard = dossier.statutLabel.includes('retard');

  return (
    <div className="dossier-profile-card">
      <div className="dossier-profile-left">
        <div className="dossier-avatar-lg">{initiales}</div>
        <div>
          <h2 className="dossier-nom">{dossier.nom}</h2>
          <p className="dossier-code">{dossier.code}</p>
          <span className={`dossier-statut-badge ${isRetard ? 'retard' : ''}`}>
            {dossier.statutLabel}
          </span>
        </div>
      </div>

      <div className="dossier-profile-actions">
        <button className="dossier-btn dossier-btn-outline">✏️ Modifier le dossier</button>
        <button className="dossier-btn dossier-btn-dark">⬇️ Télécharger Rapport PDF</button>
        <button className="dossier-btn dossier-btn-danger">🗑️ Clôturer le dossier</button>
      </div>
    </div>
  );
}
