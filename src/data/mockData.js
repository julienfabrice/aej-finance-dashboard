// Données fictives — à remplacer par de vrais appels API une fois le backend
// stabilisé. Centralisées ici pour que chaque composant reste "présentation
// pure" (aucune donnée en dur dispersée dans le JSX).

export const kpis = {
  totalBeneficiaires: { value: 1000, deltaPct: 12.5 },
  montantEngage: { value: 10.25, unit: 'Mds FCFA' },
  tauxRemboursement: { value: 62.0 },
  portefeuilleRisque: { dossiers: 105, pct: 10.5, seuilJours: 30 },
  scoreSante: { value: 82, max: 100 },
};

export const regions = [
  'Toutes les régions',
  'Abidjan',
  'Bouaké',
  'Yamoussoukro',
  'Korhogo',
  'San-Pédro',
];

export const banques = ['Toutes les banques', 'Ecobank', 'BOA', 'NSIA', 'SGBCI'];

// Densité approximative de bénéficiaires par région (pour la carte stylisée)
export const densiteParRegion = [
  { region: 'Abidjan', valeur: 70000, x: 62, y: 74 },
  { region: 'Yamoussoukro', valeur: 40000, x: 48, y: 55 },
  { region: 'Bouaké', valeur: 55000, x: 46, y: 42 },
  { region: 'Korhogo', valeur: 30000, x: 42, y: 14 },
  { region: 'San-Pédro', valeur: 25000, x: 30, y: 82 },
  { region: 'Man', valeur: 20000, x: 20, y: 45 },
  { region: 'Daloa', valeur: 35000, x: 32, y: 55 },
  { region: 'Abengourou', valeur: 15000, x: 72, y: 55 },
];

export const repartitionSectorielle = [
  { name: 'Commerce', value: 40, color: '#1a7a3c' },
  { name: 'Agriculture', value: 25, color: '#f97316' },
  { name: 'Services', value: 20, color: '#2d9a52' },
  { name: 'Élevage', value: 10, color: '#eab308' },
  { name: 'Autres', value: 5, color: '#a8b5ad' },
];

export const performancesMensuelles = [
  { mois: 'Jan 24', decaissements: 28, remboursements: 18 },
  { mois: 'Fév 24', decaissements: 45, remboursements: 22 },
  { mois: 'Mar 24', decaissements: 33, remboursements: 26 },
  { mois: 'Avr 24', decaissements: 38, remboursements: 24 },
  { mois: 'Mai 24', decaissements: 42, remboursements: 30 },
  { mois: 'Jun 24', decaissements: 22, remboursements: 34 },
];

export const alertesCritiques = [
  { id: 1, beneficiaire: 'KOASSI Jean Marc', matricule: 'AEJ-2024-0001', montant: 450000, jours: 3 },
  { id: 2, beneficiaire: 'KOASSI Abijan', matricule: 'AEJ-2024-0001', montant: 250000, jours: 3 },
  { id: 3, beneficiaire: 'KOASSI Semante', matricule: 'AEJ-2024-0001', montant: 200000, jours: 3 },
  { id: 4, beneficiaire: 'KOASSI Bouaké', matricule: 'AEJ-2024-0001', montant: 100000, jours: 3 },
  { id: 5, beneficiaire: 'KOASSI Alaam', matricule: 'AEJ-2024-0001', montant: 100000, jours: 3 },
];

export function formatFCFA(value) {
  return new Intl.NumberFormat('fr-FR').format(value) + ' FCFA';
}
