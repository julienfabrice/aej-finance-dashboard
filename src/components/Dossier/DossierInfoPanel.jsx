import './Dossier.css';

function Gauge({ value, max = 100, color = 'var(--aej-green)', size = 88 }) {
  const radius = (size - 14) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(value / max, 1);
  const dash = circumference * pct;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#eef2ef" strokeWidth="11" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circumference}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

export default function DossierInfoPanel({ dossier }) {
  const { contact, bancaire, projet, scoreSante } = dossier;

  return (
    <section className="dossier-info-row">
      <div className="dossier-decision-card">
        <h3>Aide à la Décision</h3>
        <div className="dossier-decision-cols">
          <div>
            <p className="dossier-col-title">*Informations de Contact</p>
            <p className="dossier-field-label">Téléphone</p>
            <p className="dossier-field-value">{contact.telephone}</p>
            <p className="dossier-field-label">Email</p>
            <p className="dossier-field-value link">{contact.email}</p>
            <p className="dossier-field-label">Ville/Région</p>
            <p className="dossier-field-value link">{contact.villeRegion}</p>
          </div>
          <div>
            <p className="dossier-col-title">Informations Bancaires</p>
            <p className="dossier-field-label">Banque</p>
            <p className="dossier-field-value link">{bancaire.banque}</p>
            <p className="dossier-field-label">Agence</p>
            <p className="dossier-field-value link">{bancaire.agence}</p>
            <p className="dossier-field-label">Date de Décaissement</p>
            <p className="dossier-field-value">{bancaire.dateDecaissement}</p>
          </div>
          <div>
            <p className="dossier-col-title">*Secteur d'activité</p>
            <p className="dossier-field-label">{projet.secteur}</p>
            <p className="dossier-field-value link">{projet.activite}</p>
            <p className="dossier-field-label" style={{ marginTop: 10 }}>
              *Garanties
            </p>
            {projet.garanties.map((g) => (
              <p className="dossier-field-value link" key={g}>
                {g}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="dossier-sante-card">
        <h3>Score de santé du projet</h3>
        <div className="dossier-sante-body">
          <div className="dossier-gauge-wrap">
            <Gauge value={scoreSante.value} max={scoreSante.max} />
            <div className="dossier-gauge-center">
              <strong>{scoreSante.value}</strong>
              <span>/{scoreSante.max}</span>
            </div>
          </div>
          <ul className="dossier-sante-legend">
            {scoreSante.criteres.map((c) => (
              <li key={c.label}>
                <span className="dot" style={{ background: c.color }} />
                <span className="dossier-sante-label">{c.label}</span>
                <span className="dossier-sante-mini-bar">
                  <span style={{ width: `${c.value}%`, background: c.color }} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
