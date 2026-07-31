import '../Dossier/Dossier.css';

// Basé sur le workflow AGR détaillé avec l'équipe : sélection/formation →
// plan d'affaires (agence régionale) → transmission au partenaire (chef de
// service DRF) → traitement par le partenaire financier.
const STEPS = [
  {
    key: 'instruction',
    titre: 'Instruction du dossier',
    role: 'Agence régionale — Conseiller en insertion pro',
    date: '05/01/2024',
    statut: 'done',
    description:
      'Récupération du projet sélectionné et vérification que le promoteur a bien suivi sa formation.',
    documents: ['Fiche de sélection', "Attestation de formation"],
  },
  {
    key: 'validation',
    titre: "Ajout du plan d'affaires",
    role: 'Agence régionale',
    date: '10/01/2024',
    statut: 'done',
    description:
      "Le plan d'affaires du promoteur est joint au dossier et transmis au chef de service développement des ressources de financement.",
    documents: ["Plan d'affaires (PDF)"],
  },
  {
    key: 'transmission',
    titre: 'Transmission au partenaire financier',
    role: 'Chef de service développement des ressources de financement',
    date: '15/01/2024',
    statut: 'done',
    description:
      'Le dossier est transmis par lot à Ecobank Côte d\'Ivoire avec le courrier de transmission (réf. convention, taux de couverture, durée de différé).',
    documents: ['Courrier de transmission', 'Réf. convention CV-2024-014'],
  },
  {
    key: 'traitement',
    titre: 'Traitement par le partenaire financier',
    role: 'Ecobank Côte d\'Ivoire',
    date: 'En cours depuis le 16/01/2024',
    statut: 'current',
    description:
      "Ouverture du compte, approbation du dossier, puis décaissement selon le plan de remboursement défini (10 000 000 FCFA, 12 mois, taux 5%).",
    sousEtapes: [
      { label: 'Ouverture du compte', done: true },
      { label: 'Approbation du dossier', done: true },
      { label: 'Décaissement initial', done: true },
      { label: 'Suivi des remboursements', done: false },
    ],
  },
  {
    key: 'suivi',
    titre: 'Suivi & exploitation',
    role: 'Agence régionale — Agent de suivi',
    date: 'À partir du 15/04/2024',
    statut: 'pending',
    description:
      "Visites de suivi de l'exploitation du micro-projet et mise à jour des indicateurs d'impact (emplois créés, pérennité).",
    documents: [],
  },
];

function StatusBadge({ statut }) {
  const map = {
    done: { label: 'Terminée', bg: 'var(--aej-green-soft)', color: 'var(--aej-green-dark)' },
    current: { label: 'En cours', bg: '#fff3e8', color: 'var(--aej-orange)' },
    pending: { label: 'À venir', bg: '#eef2ef', color: 'var(--text-muted)' },
  };
  const cfg = map[statut];
  return (
    <span
      style={{
        display: 'inline-flex',
        padding: '3px 10px',
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 700,
        background: cfg.bg,
        color: cfg.color,
        flexShrink: 0,
      }}
    >
      {cfg.label}
    </span>
  );
}

function TimelineDot({ statut }) {
  const style =
    statut === 'done'
      ? { background: 'var(--aej-green)', color: '#fff' }
      : statut === 'current'
        ? { background: '#fff', border: '3px solid var(--aej-orange)', color: 'var(--aej-orange)' }
        : { background: '#fff', border: '2px solid var(--border)', color: 'var(--text-muted)' };

  return (
    <div
      style={{
        width: 30,
        height: 30,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 800,
        flexShrink: 0,
        zIndex: 1,
        ...style,
      }}
    >
      {statut === 'done' ? '✓' : statut === 'current' ? '●' : ''}
    </div>
  );
}

export default function DossierWorkflowTab({ dossier }) {
  const currentIndex = STEPS.findIndex((s) => s.statut === 'current');

  return (
    <div className="dossier-mini-card" style={{ padding: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <div>
          <h4 style={{ margin: 0 }}>Historique du workflow</h4>
          <p className="dossier-mini-sub" style={{ margin: '2px 0 0' }}>
            Dossier {dossier.code} — {dossier.nom}
          </p>
        </div>
        <div
          style={{
            background: 'var(--aej-orange-soft)',
            color: 'var(--aej-orange)',
            fontSize: 12,
            fontWeight: 700,
            padding: '6px 12px',
            borderRadius: 10,
          }}
        >
          Étape actuelle : {STEPS[currentIndex]?.titre}
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        {STEPS.map((step, i) => (
          <div key={step.key} style={{ display: 'flex', gap: 14 }}>
            {/* Rail vertical + point */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 30 }}>
              <TimelineDot statut={step.statut} />
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    width: 2,
                    flex: 1,
                    minHeight: 40,
                    background: step.statut === 'done' ? 'var(--aej-green)' : 'var(--border)',
                  }}
                />
              )}
            </div>

            {/* Contenu de l'étape */}
            <div style={{ paddingBottom: 22, flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <strong style={{ fontSize: 13.5 }}>{step.titre}</strong>
                <StatusBadge statut={step.statut} />
              </div>
              <p style={{ margin: '4px 0 2px', fontSize: 11.5, color: 'var(--text-secondary)', fontWeight: 600 }}>
                {step.role}
              </p>
              <p style={{ margin: '0 0 8px', fontSize: 11, color: 'var(--text-muted)' }}>{step.date}</p>
              <p style={{ margin: '0 0 8px', fontSize: 12.5, color: 'var(--text-primary)', lineHeight: 1.5 }}>
                {step.description}
              </p>

              {step.sousEtapes && (
                <ul style={{ margin: '0 0 8px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {step.sousEtapes.map((se) => (
                    <li key={se.label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5 }}>
                      <span style={{ color: se.done ? 'var(--aej-green)' : 'var(--text-muted)' }}>
                        {se.done ? '✓' : '○'}
                      </span>
                      <span style={{ color: se.done ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                        {se.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {step.documents && step.documents.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {step.documents.map((d) => (
                    <span
                      key={d}
                      style={{
                        fontSize: 10.5,
                        background: 'var(--bg-app)',
                        border: '1px solid var(--border)',
                        borderRadius: 8,
                        padding: '3px 8px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      📎 {d}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
