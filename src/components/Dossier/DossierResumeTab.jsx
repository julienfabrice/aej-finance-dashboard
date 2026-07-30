import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import './Dossier.css';

function WorkflowStepper({ steps }) {
  return (
    <div className="dossier-workflow">
      {steps.map((s, i) => (
        <div className="dossier-workflow-step" key={s.key}>
          <div className="dossier-workflow-line-wrap">
            {i > 0 && (
              <span
                className={`dossier-workflow-line ${
                  steps[i - 1].status === 'done' ? 'done' : ''
                }`}
              />
            )}
            <span className={`dossier-workflow-dot ${s.status}`}>
              {s.status === 'done' ? '✓' : ''}
            </span>
          </div>
          <p className="dossier-workflow-label">{s.label}</p>
          <p className="dossier-workflow-date">({s.date})</p>
        </div>
      ))}
    </div>
  );
}

export default function DossierResumeTab({ dossier }) {
  return (
    <section className="dossier-resume-grid">
      <div className="dossier-mini-card">
        <h4>Synthèse Remboursement</h4>
        <div className="dossier-mini-legend">
          <span>
            <i style={{ background: 'var(--aej-green)' }} /> Prévu
          </span>
          <span>
            <i style={{ background: 'var(--aej-orange)' }} /> Réalisé
          </span>
        </div>
        <ResponsiveContainer width="100%" height={135}>
          <LineChart data={dossier.syntheseRemboursement}>
            <CartesianGrid vertical={false} stroke="#eef2ef" />
            <XAxis dataKey="mois" tick={{ fontSize: 9, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 9, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}m`} />
            <Tooltip />
            <Line type="monotone" dataKey="prevu" stroke="var(--aej-green)" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="realise" stroke="var(--aej-orange)" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="dossier-mini-card">
        <h4>Synthèse Exploitation (Annuelle)</h4>
        <div className="dossier-mini-legend">
          <span>
            <i style={{ background: 'var(--aej-green)' }} /> CA
          </span>
          <span>
            <i style={{ background: 'var(--aej-orange)' }} /> Charges
          </span>
        </div>
        <ResponsiveContainer width="100%" height={135}>
          <BarChart data={dossier.syntheseExploitation} barGap={3}>
            <CartesianGrid vertical={false} stroke="#eef2ef" />
            <XAxis dataKey="annee" tick={{ fontSize: 9, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 9, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}m`} />
            <Tooltip />
            <Bar dataKey="ca" fill="var(--aej-green)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="charges" fill="var(--aej-orange)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="dossier-mini-card">
        <h4>Indicateurs d'Impact</h4>
        <p className="dossier-mini-sub">Emplois créés par ce projet</p>
        <div className="dossier-impact-stats">
          <div>
            <p className="dossier-impact-label">Total</p>
            <strong>{dossier.indicateursImpact.total}</strong>
          </div>
          <div>
            <p className="dossier-impact-label">Hommes</p>
            <strong>{dossier.indicateursImpact.hommes}</strong>
          </div>
          <div>
            <p className="dossier-impact-label">Femmes</p>
            <strong>{dossier.indicateursImpact.femmes}</strong>
          </div>
        </div>
      </div>

      <div className="dossier-mini-card">
        <h4>Workflow en cours</h4>
        <p className="dossier-mini-sub">Frise chronologique</p>
        <WorkflowStepper steps={dossier.workflow} />
      </div>
    </section>
  );
}
