import './Dossier.css';

const TABS = [
  { key: 'resume', label: 'Résumé', icon: '✨' },
  { key: 'plan', label: 'Plan de remboursement', icon: '📈' },
  { key: 'exploitation', label: 'Exploitation', icon: '📦' },
  { key: 'indicateurs', label: 'Indicateurs', icon: '📶' },
  { key: 'workflow', label: 'Workflow', icon: '⚙️' },
  { key: 'documents', label: 'Documents', icon: '📁' },
  { key: 'historique', label: 'Historique', icon: '📜' },
];

export default function DossierTabs({ active, onChange }) {
  return (
    <div className="dossier-tabs">
      {TABS.map((t) => (
        <button
          key={t.key}
          className={`dossier-tab ${active === t.key ? 'active' : ''}`}
          onClick={() => onChange(t.key)}
        >
          <span aria-hidden>{t.icon}</span>
          {t.label}
        </button>
      ))}
    </div>
  );
}
