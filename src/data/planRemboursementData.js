import { getDossierByCode } from './dossierData';

const EVOLUTION = [
  { mois: 'Jan 2024', prevu: 833333, realise: 833333 },
  { mois: 'Fév 2024', prevu: 1666666, realise: 1666666 },
  { mois: 'Mar 2024', prevu: 2500000, realise: 1666666 },
  { mois: 'Avr 2024', prevu: 3333333, realise: 2500000 },
  { mois: 'Mai 2024', prevu: 4166666, realise: 3333333 },
  { mois: 'Juin 2024', prevu: 5000000, realise: 4166666 },
  { mois: 'Juil 2024', prevu: 5833333, realise: 5000000 },
  { mois: 'Août 2024', prevu: 6666666, realise: 5833333 },
  { mois: 'Sep 2024', prevu: 7500000, realise: 6200000 },
  { mois: 'Oct 2024', prevu: 8333333, realise: 6200000 },
];

const ECHEANCES = [
  { mois: 'Jan 2024', echeance: 833333, paye: 833333, statut: 'Payée' },
  { mois: 'Fév 2024', echeance: 833333, paye: 833333, statut: 'Payée' },
  { mois: 'Mar 2024', echeance: 833333, paye: 0, statut: 'En retard' },
  { mois: 'Avr 2024', echeance: 833333, paye: 0, statut: 'À venir' },
  { mois: 'Mai 2024', echeance: 833333, paye: 0, statut: 'À venir' },
  { mois: 'Juin 2024', echeance: 833333, paye: 0, statut: 'À venir' },
];

export function getPlanByCode(code) {
  const dossier = getDossierByCode(code);

  return {
    ...dossier,
    infoBar: {
      beneficiaire: dossier.nom,
      code: dossier.code,
      banque: dossier.contact.villeRegion,
      montantFinance: dossier.montantFinance,
      dateDecaissement: dossier.bancaire.dateDecaissement,
    },
    alerte: {
      echeancesRetard: 1,
      libelle: 'Échéance de mars 2024',
    },
    details: {
      montantPret: dossier.montantFinance,
      duree: '12 mois',
      periodicite: 'Mensuelle',
      frequence: '1 fois par mois',
      tauxInteret: '5%',
      echeanceMensuelle: 833333,
    },
    prochaineEcheance: { date: '15/04/2024', montant: 833333 },
    evolution: EVOLUTION,
    echeances: ECHEANCES,
  };
}

export function formatFCFA(value) {
  return new Intl.NumberFormat('fr-FR').format(value) + ' FCFA';
}
