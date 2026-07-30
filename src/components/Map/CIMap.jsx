import { useState } from 'react';
import { densiteParRegion } from '../../data/mockData';
import './CIMap.css';

const MAX = Math.max(...densiteParRegion.map((d) => d.valeur));

function densityColor(valeur) {
  const ratio = valeur / MAX;
  if (ratio > 0.8) return '#0f5228';
  if (ratio > 0.55) return '#1a7a3c';
  if (ratio > 0.35) return '#2d9a52';
  if (ratio > 0.18) return '#f97316';
  return '#fdba74';
}

export default function CIMap() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <h3>Carte interactive des impacts (répartition géographique)</h3>
        <select className="chart-period-select" defaultValue="all">
          <option value="all">Toutes les régions</option>
        </select>
      </div>

      <div className="ci-map-body">
        <svg viewBox="0 0 100 100" className="ci-map-svg" role="img" aria-label="Carte de densité par région">
          {/* Silhouette approximative de la Côte d'Ivoire, à but illustratif */}
          <path
            d="M18,20 L45,10 L70,14 L82,28 L86,48 L78,62 L72,80 L60,92 L44,94 L30,86 L20,72 L14,54 L10,36 Z"
            fill="#eef5f0"
            stroke="#d7e5db"
            strokeWidth="0.6"
          />
          {densiteParRegion.map((d) => (
            <g
              key={d.region}
              onMouseEnter={() => setHovered(d)}
              onMouseLeave={() => setHovered(null)}
              className="ci-map-point"
            >
              <circle
                cx={d.x}
                cy={d.y}
                r={4 + (d.valeur / MAX) * 5}
                fill={densityColor(d.valeur)}
                opacity="0.85"
              />
              <circle cx={d.x} cy={d.y} r="1.2" fill="#fff" />
            </g>
          ))}
        </svg>

        {hovered && (
          <div className="ci-map-tooltip">
            <strong>{hovered.region}</strong>
            <span>{hovered.valeur.toLocaleString('fr-FR')} bénéficiaires</span>
          </div>
        )}

        <div className="ci-map-legend">
          <p>Densité d'emplois</p>
          {[70000, 60000, 50000, 40000, 30000, 20000, 10000].map((v) => (
            <div key={v} className="ci-map-legend-row">
              <span className="chip" style={{ background: densityColor(v) }} />
              {v.toLocaleString('fr-FR')}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
