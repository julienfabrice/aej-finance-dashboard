import { kpis } from '../../data/mockData';
import './KPICards.css';

function Gauge({ value, max = 100, color, trackColor = '#eef2ef', size = 64 }) {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(value / max, 1);
  const dash = circumference * pct;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="gauge-svg">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={trackColor}
        strokeWidth="8"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circumference}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

export default function KPICards() {
  return (
    <section className="kpi-grid">
      <article className="kpi-card">
        <p className="kpi-label">Nombre total de bénéficiaires</p>
        <div className="kpi-value-row">
          <span className="kpi-value">
            {kpis.totalBeneficiaires.value.toLocaleString('fr-FR')}
          </span>
          <span className="kpi-trend up">↗ +{kpis.totalBeneficiaires.deltaPct}%</span>
        </div>
        <p className="kpi-sub">vs mois précédent</p>
      </article>

      <article className="kpi-card">
        <p className="kpi-label">Montant total engagé</p>
        <div className="kpi-value-row">
          <span className="kpi-value">
            {kpis.montantEngage.value.toString().replace('.', ',')}{' '}
            <span className="kpi-unit">{kpis.montantEngage.unit}</span>
          </span>
        </div>
        <p className="kpi-sub">Toutes banques confondues</p>
      </article>

      <article className="kpi-card kpi-card-centered">
        <p className="kpi-label">Taux de remboursement global</p>
        <div className="kpi-gauge-wrap">
          <Gauge value={kpis.tauxRemboursement.value} color="var(--aej-green)" />
          <div className="kpi-gauge-center">
            <strong>{kpis.tauxRemboursement.value}%</strong>
          </div>
        </div>
        <p className="kpi-sub">Total recouvré</p>
      </article>

      <article className="kpi-card kpi-card-danger">
        <div className="kpi-danger-header">
          <p className="kpi-label">Portefeuille à risque (PAR)</p>
          <span className="kpi-warning-icon">⚠</span>
        </div>
        <div className="kpi-value-row">
          <span className="kpi-value danger">{kpis.portefeuilleRisque.dossiers} dossiers</span>
        </div>
        <p className="kpi-sub danger">
          &gt;{kpis.portefeuilleRisque.seuilJours} jours de retard · {kpis.portefeuilleRisque.pct}% du total
        </p>
      </article>

      <article className="kpi-card kpi-card-centered">
        <p className="kpi-label">Score moyen de santé</p>
        <div className="kpi-gauge-wrap">
          <Gauge value={kpis.scoreSante.value} max={kpis.scoreSante.max} color="var(--aej-orange)" />
          <div className="kpi-gauge-center">
            <strong>{kpis.scoreSante.value}</strong>
            <span>/{kpis.scoreSante.max}</span>
          </div>
        </div>
        <div className="kpi-legend">
          <span className="dot" style={{ background: 'var(--aej-green)' }} />
          <span className="dot" style={{ background: 'var(--danger)' }} />
          <span className="dot" style={{ background: '#eab308' }} />
          <span className="dot" style={{ background: 'var(--aej-green-mid)' }} />
        </div>
      </article>
    </section>
  );
}
