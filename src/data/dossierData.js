import { beneficiaires } from './beneficiairesData';

const SYNTHESE_REMBOURSEMENT = [
  { mois: 'Janv 2024', prevu: 5, realise: 4 },
  { mois: 'Jan 2004', prevu: 12, realise: 10 },
  { mois: 'Jan 2005', prevu: 22, realise: 20 },
  { mois: 'Jan 2005', prevu: 38, realise: 32 },
  { mois: 'Jan 2006', prevu: 52, realise: 44 },
  { mois: 'Jan 2026', prevu: 62, realise: 50 },
];

const SYNTHESE_EXPLOITATION = [
  { annee: '2021', ca: 20, charges: 12 },
  { annee: '2022', ca: 70, charges: 30 },
  { annee: '2023', ca: 78, charges: 42 },
  { annee: '2023', ca: 55, charges: 24 },
  { annee: '2024', ca: 45, charges: 25 },
];

const WORKFLOW_STEPS = [
  { key: 'instruction', label: 'Instruction', status: 'done', date: 'Complétée' },
  { key: 'validation', label: 'Validation', status: 'done', date: 'Complétée' },
  { key: 'decaissement', label: 'Décaissement', status: 'done', date: '15/01/2024' },
  { key: 'suivi', label: 'Suivi', status: 'current', date: 'En cours' },
];

/**
 * Combine les infos déjà connues de la liste des bénéficiaires (nom, code,
 * banque, montants) avec des données de dossier détaillées (fictives,
 * identiques pour la démo quel que soit le bénéficiaire).
 */
export function getDossierByCode(code) {
  const base = beneficiaires.find((b) => b.code === code) ?? beneficiaires[0];
  const solde = base.montantFinance - base.montantRembourse;

  return {
    code: base.code,
    nom: base.nom,
    statutLabel: base.statut === 'En retard' ? 'Remboursement en retard' : 'Remboursement en cours',
    montantFinance: base.montantFinance,
    montantRembourse: base.montantRembourse,
    soldeRestant: solde,
    tauxRemboursement: base.tauxRemb,

    contact: {
      telephone: '07 07 07 07',
      email: 'jean.koassi@gmail.com',
      villeRegion: base.agence,
    },
    bancaire: {
      banque: `${base.banque} Côte d'Ivoire`,
      agence: 'Compte',
      dateDecaissement: '15/01/2024',
    },
    projet: {
      secteur: 'Commerce',
      activite: 'Vente de vêtements',
      garanties: ['Caution solidaire', 'Hypothèque'],
    },

    scoreSante: {
      value: 86,
      max: 100,
      criteres: [
        { label: 'Ratio de remboursement', color: 'var(--aej-green)', value: 90 },
        { label: "Suivi d'exploitation", color: 'var(--aej-green)', value: 82 },
        { label: 'Régularité', color: 'var(--aej-orange)', value: 70 },
      ],
    },

    syntheseRemboursement: SYNTHESE_REMBOURSEMENT,
    syntheseExploitation: SYNTHESE_EXPLOITATION,

    indicateursImpact: { total: 4, hommes: 3, femmes: 1 },

    workflow: WORKFLOW_STEPS,
  };
}

export function formatFCFA(value) {
  return new Intl.NumberFormat('fr-FR').format(value) + ' FCFA';
}
