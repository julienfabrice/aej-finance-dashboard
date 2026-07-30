import './Header.css';

/**
 * Header générique — réutilisé par toutes les pages.
 *
 * Props :
 * - step, title, breadcrumb (array de strings) : identité de la page
 * - bottomRight (ReactNode) : contenu à droite de la ligne breadcrumb
 *   (filtres pour Dashboard Finance, bouton "+ Nouveau..." pour Liste, etc.)
 */
export default function Header({ step, title, breadcrumb = [], bottomRight = null }) {
  return (
    <header className="header">
      
      <div class="header-announcement-bar">
    Programme Social du Gouvernement 2022–2024 — traçabilité en temps réel des financements destinés aux jeunes entrepreneurs
  </div>

      <div className="header-top">
        <div className="header-title">
          <span className="header-step">{step}</span>
          <h1>{title}</h1>
        </div>

        <div className="header-stats">
  <div className="header-stat-card">
    <span className="stat-label">Jeunes enregistrés</span>
    <strong>10</strong>
  </div>

  <div className="header-stat-card">
    <span className="stat-label">Subventions dispatchées</span>
    <strong>3,4 M FCFA</strong>
  </div>

  <div className="header-stat-card">
    <span className="stat-label">Crédits SFD débloqués</span>
    <strong>6,6 M FCFA</strong>
  </div>
</div>

        <div className="header-actions">
          <div className="header-search">
            <span aria-hidden>🔍</span>
            <input type="text" placeholder="Rechercher" />
          </div>
          <button className="header-icon-btn" aria-label="Notifications">
            🔔<span className="header-badge">6</span>
          </button>
          <div className="header-profile">
            <div className="header-avatar">A</div>
            <div className="header-profile-text">
              <strong>Admin AEJ</strong>
              <span>Administrateur</span>
            </div>
            <span className="header-chevron">⌄</span>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <nav className="header-breadcrumb" aria-label="Fil d'ariane">
          {breadcrumb.map((crumb, i) => {
            const isLast = i === breadcrumb.length - 1;
            return (
              <span key={crumb} style={{ display: 'contents' }}>
                {i > 0 && <span className="sep">›</span>}
                <span className={isLast ? 'current' : undefined}>{crumb}</span>
              </span>
            );
          })}
        </nav>

        {bottomRight && <div className="header-bottom-right">{bottomRight}</div>}
      </div>
    </header>
  );
}
