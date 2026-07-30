import './RecentActivities.css';

const SHORTCUTS = [
  { key: 'pdf', label: 'Générer un rapport PDF', icon: '📄', tone: 'green' },
  { key: 'print', label: 'Imprimer des fiches', icon: '🖨️', tone: 'orange' },
  { key: 'search', label: 'Rechercher un bénéficiaire', icon: '🔍', tone: 'blue' },
  { key: 'settings', label: 'Paramètres', icon: '⚙️', tone: 'dark' },
];

export default function RecentActivities() {
  return (
    <div className="shortcuts-card">
      <h3>Business Shortcuts</h3>
      <div className="shortcuts-grid">
        {SHORTCUTS.map((s) => (
          <button key={s.key} className={`shortcut-btn tone-${s.tone}`}>
            <span className="shortcut-icon" aria-hidden>
              {s.icon}
            </span>
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
