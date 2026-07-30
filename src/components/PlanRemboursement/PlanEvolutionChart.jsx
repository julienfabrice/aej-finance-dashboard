import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import './PlanRemboursement.css';

export default function PlanEvolutionChart({ data }) {
  return (
    <div className="plan-card">
      <h3>📈 Évolution du remboursement</h3>
      <div className="plan-chart-legend">
        <span>
          <i style={{ background: 'var(--aej-green)' }} /> Prévu
        </span>
        <span>
          <i style={{ background: 'var(--aej-orange)' }} /> Réalisé
        </span>
      </div>
      <ResponsiveContainer width="100%" height={175}>
        <LineChart data={data}>
          <CartesianGrid vertical={false} stroke="#eef2ef" />
          <XAxis dataKey="mois" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${Math.round(v / 1000000)}M`}
          />
          <Tooltip formatter={(v) => new Intl.NumberFormat('fr-FR').format(v) + ' FCFA'} />
          <Line type="monotone" dataKey="prevu" stroke="var(--aej-green)" strokeWidth={2} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="realise" stroke="var(--aej-orange)" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
