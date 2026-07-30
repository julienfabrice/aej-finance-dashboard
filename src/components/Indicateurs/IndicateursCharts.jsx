import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { evolutionIndicateurs, repartitionSecteurExploitation } from '../../data/exploitationData';
import '../Exploitation/Exploitation.css';

export function EmploisSecteurDonut() {
  return (
    <div className="expl-card">
      <h3>Répartition des Emplois par Secteur (Graphique Donut)</h3>
      <div className="expl-donut-row">
        <ResponsiveContainer width="55%" height={145}>
          <PieChart>
            <Pie
              data={repartitionSecteurExploitation}
              dataKey="value"
              nameKey="name"
              innerRadius={45}
              outerRadius={72}
              paddingAngle={2}
            >
              {repartitionSecteurExploitation.map((e) => (
                <Cell key={e.name} fill={e.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <ul className="expl-donut-legend">
          {repartitionSecteurExploitation.map((s) => (
            <li key={s.name}>
              <span className="dot" style={{ background: s.color }} /> {s.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function IndicateursStackedBarChart() {
  return (
    <div className="expl-card">
      <h3>Évolution des Indicateurs dans le Temps (Graphique en Barres Empilées)</h3>
      <div className="expl-chart-legend">
        <span>
          <i style={{ background: 'var(--aej-green)' }} /> Emplois Créés
        </span>
        <span>
          <i style={{ background: 'var(--aej-orange)' }} /> Femmes
        </span>
      </div>
      <ResponsiveContainer width="100%" height={135}>
        <BarChart data={evolutionIndicateurs} barGap={2}>
          <CartesianGrid vertical={false} stroke="#eef2ef" />
          <XAxis dataKey="periode" tick={{ fontSize: 9, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 9, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="emploisCrees" stackId="a" fill="var(--aej-green)" radius={[0, 0, 0, 0]} />
          <Bar dataKey="femmes" stackId="a" fill="var(--aej-orange)" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
