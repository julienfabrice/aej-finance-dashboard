import './Dossier.css';

export default function DossierTabPlaceholder({ label }) {
  return (
    <div className="dossier-tab-placeholder">
      <p>Le contenu de l'onglet « {label} » sera bientôt disponible.</p>
    </div>
  );
}
