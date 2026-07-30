import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { performancesMensuelles } from '../../data/mockData';
import './Charts.css';

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip-label">{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} style={{ color: entry.color }}>
          {entry.name} : {entry.value}M FCFA
        </p>
      ))}
    </div>
  );
}

export default function LoanChart() {
  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <h3>Performances du mois</h3>
        <select className="chart-period-select" defaultValue="6">
          <option value="6">Derniers 6 mois</option>
          <option value="12">Derniers 12 mois</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={170}>
        <BarChart data={performancesMensuelles} barGap={4}>
          <CartesianGrid vertical={false} stroke="#eef2ef" />
          <XAxis
            dataKey="mois"
            tick={{ fontSize: 11, fill: 'var(--text-muted)' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: 'var(--text-muted)' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}m`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(26,122,60,0.05)' }} />
          <Bar
            dataKey="decaissements"
            name="Décaissements"
            fill="var(--aej-green)"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="remboursements"
            name="Remboursements"
            fill="#93c5fd"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="chart-legend">
        <span>
          <i style={{ background: 'var(--aej-green)' }} /> Décaissements
        </span>
        <span>
          <i style={{ background: '#93c5fd' }} /> Remboursements
        </span>
      </div>
    </div>
  );
}
