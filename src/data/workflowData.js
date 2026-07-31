import { beneficiaires } from './beneficiairesData';

// Les 5 étapes du workflow AGR (mêmes libellés que DossierWorkflowTab, pour
// rester cohérent entre la vue "un dossier" et la vue "groupe de dossiers").
export const WORKFLOW_STAGES = [
  { key: 'instruction', label: 'Instruction du dossier' },
  { key: 'validation', label: "Plan d'affaires" },
  { key: 'transmission', label: 'Transmission au partenaire' },
  { key: 'traitement', label: 'Traitement par le partenaire' },
  { key: 'suivi', label: 'Suivi & exploitation' },
];

// Répartition fictive des bénéficiaires existants sur les étapes, pour
// illustrer une vue de lot/groupe (ordre = celui de beneficiairesData).
const STAGE_ASSIGNMENT = [
  'traitement', // KOASSI Jean Marc
  'traitement', // KOUADIO Ahou Maria
  'suivi',       // TRAORE Moussa
  'suivi',       // DIAKITE Fatoumata
  'transmission', // SANGARE Adama
  'transmission', // N'GUESSAN Koffi
  'validation',  // COULIBALY Mariam
  'instruction', // BAMBA Ibrahim
];

export function getWorkflowBoardData() {
  return beneficiaires.map((b, i) => ({
    ...b,
    stage: STAGE_ASSIGNMENT[i] ?? 'instruction',
    joursDansEtape: 2 + ((i * 3) % 12),
  }));
}