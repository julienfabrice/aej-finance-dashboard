import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { repartitionSectorielle } from '../../data/mockData';
import './Charts.css';

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  return (
    <div className="chart-tooltip">
      <p style={{ color: item.payload.color, fontWeight: 700 }}>
        {item.name} : {item.value}%
      </p>
    </div>
  );
}

export default function RepaymentChart() {
  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <h3>Répartition sectorielle</h3>
      </div>

      <div className="donut-wrap">
        <ResponsiveContainer width="100%" height={155}>
          <PieChart>
            <Pie
              data={repartitionSectorielle}
              dataKey="value"
              nameKey="name"
              innerRadius={58}
              outerRadius={82}
              paddingAngle={2}
              startAngle={90}
              endAngle={-270}
            >
              {repartitionSectorielle.map((entry) => (
                <Cell key={entry.name} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-legend chart-legend-wrap">
        {repartitionSectorielle.map((s) => (
          <span key={s.name}>
            <i style={{ background: s.color }} /> {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}
