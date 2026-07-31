import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo1 from '../../assets/logo1.jpeg';
import logo2 from '../../assets/logo2.jpeg';
import './Sidebar.css';

// `path: null` = page pas encore construite (bouton non cliquable pour l'instant)
const MAIN_ITEMS = [
  { key: 'dashboard-finance', label: 'Dashboard Finance', icon: '📊', path: '/dashboard' },
  { key: 'beneficiaires', label: 'Liste des bénéficiaires', icon: '📋', path: '/beneficiaires' },
  { key: 'dossier', label: 'Dossier bénéficiaire', icon: '📁', path: '/beneficiaires/AEJ-2024-0001' },
  { key: 'workflow', label: 'Suivi du workflow', icon: '🗂️', path: '/workflow' },
  { key: 'plan-remboursement', label: 'Plan de remboursement', icon: '🧾', path: '/beneficiaires/AEJ-2024-0001/plan' },
  { key: 'exploitation', label: 'Exploitation micro-projet', icon: '🌾', path: '/exploitation' },
  { key: 'indicateurs', label: "Indicateurs d'impact", icon: '📈', path: '/indicateurs' },
  { key: 'pdf', label: 'Génération des rapports', icon: '📄', path: '/rapports' },
];

const PARAM_ITEMS = [
  { key: 'roles', label: 'Utilisateurs & rôles', icon: '👥', path: null },
  { key: 'banques', label: 'Banques & agences', icon: '🏦', path: null },
  { key: 'parametres', label: 'Paramètres système', icon: '⚙️', path: null },
  { key: 'historique', label: 'Historique des actions', icon: '🕘', path: null },
];

function NavButton({ item, extraClass = '' }) {
  if (!item.path) {
    // Pas encore de page derrière ce lien — reste cliquable visuellement,
    // mais ne navigue nulle part pour l'instant.
    return (
      <button className={`sidebar-item ${extraClass}`} disabled>
        <span className="sidebar-item-icon" aria-hidden>
          {item.icon}
        </span>
        {item.label}
      </button>
    );
  }
  return (
    <NavLink
      to={item.path}
      end={item.path === '/'}
      className={({ isActive }) => `sidebar-item ${extraClass} ${isActive ? 'active' : ''}`}
    >
      <span className="sidebar-item-icon" aria-hidden>
        {item.icon}
      </span>
      {item.label}
    </NavLink>
  );
}

export default function Sidebar() {
  const location = useLocation();
  const paramActive = PARAM_ITEMS.some((item) => item.path === location.pathname);
  const [isParamOpen, setIsParamOpen] = useState(paramActive);

  return (
    <aside className="sidebar">
      <div className="sidebar-logo-top">
        <img src={logo1} alt="Logo Agence Emploi Jeunes" />
      </div>

      <nav className="sidebar-nav">
        {MAIN_ITEMS.map((item) => (
          <NavButton key={item.key} item={item} />
        ))}

        <button
          className={`sidebar-item sidebar-item-toggle ${paramActive ? 'active' : ''}`}
          onClick={() => setIsParamOpen((v) => !v)}
          aria-expanded={isParamOpen}
        >
          <span className="sidebar-item-icon" aria-hidden>
            ⚙️
          </span>
          Paramètres
          <span className={`sidebar-chevron ${isParamOpen ? 'open' : ''}`} aria-hidden>
            ⌄
          </span>
        </button>

        {isParamOpen && (
          <div className="sidebar-submenu">
            {PARAM_ITEMS.map((item) => (
              <NavButton key={item.key} item={item} extraClass="sidebar-subitem" />
            ))}
          </div>
        )}
      </nav>
      <div className="sidebar-help">
        <p className="sidebar-help-title">Besoin d'aide ?</p>
        <p className="sidebar-help-text">Consulter notre guide</p>
        <button className="sidebar-help-btn">Guide d'utilisation</button>
      </div>
      <div className="sidebar-logo-bottom">
        <img src={logo2} alt="Logo partenaire" />
      </div>
    </aside>
  );
}
