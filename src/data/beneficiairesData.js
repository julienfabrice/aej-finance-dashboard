export const beneficiairesKpis = {
  total: { value: 1245, sub: 'Tous dossiers confondus' },
  montantEngage: { value: '12,45', unit: 'Mds FCFA', sub: '100% du total' },
  montantRembourse: { value: '7,89', unit: 'Mds FCFA', sub: '63,4% du total engagé' },
  soldeRestant: { value: '4,56', unit: 'Mds FCFA', sub: '36,6% à recouvrer' },
  tauxRemboursement: { value: '63,4%', sub: 'Performance globale' },
  dossiersRetard: { value: 105, sub: '8,4% des dossiers' },
};

export const beneficiairesFilterOptions = {
  banques: ['Toutes les banques', 'Ecobank', 'NSIA', 'BOA', 'SGCI'],
  agences: ['Toutes les agences', 'Abidjan - Plateau', 'Abidjan - Yopougon', 'Bouaké', 'Yamoussoukro'],
  regions: ['Toutes les régions', 'Abidjan', 'Yamoussoukro', 'Bouaké', 'Korhogo', 'San-Pédro'],
  statuts: ['Tous les statuts', 'En cours', 'En retard', 'Clôturé'],
};

const BANK_COLORS = {
  Ecobank: '#0033a0',
  NSIA: '#f7941e',
  BOA: '#004b2c',
  SGCI: '#e30613',
};

export function bankColor(bank) {
  return BANK_COLORS[bank] ?? '#5b6b62';
}

export const beneficiaires = [
  { id: 1, code: 'AEJ-2024-0001', nom: 'KOASSI Jean Marc', banque: 'Ecobank', agence: 'Abidjan - Plateau', montantFinance: 10000000, montantRembourse: 6200000, tauxRemb: 62.0, statut: 'En cours' },
  { id: 2, code: 'AEJ-2024-0002', nom: 'KOUADIO Ahou Maria', banque: 'NSIA', agence: 'Yamoussoukro', montantFinance: 8000000, montantRembourse: 5600000, tauxRemb: 70.0, statut: 'En cours' },
  { id: 3, code: 'AEJ-2024-0003', nom: 'TRAORE Moussa', banque: 'BOA', agence: 'Bouaké', montantFinance: 12000000, montantRembourse: 9600000, tauxRemb: 80.0, statut: 'En cours' },
  { id: 4, code: 'AEJ-2024-0004', nom: 'DIAKITE Fatoumata', banque: 'SGCI', agence: 'Korhogo', montantFinance: 7500000, montantRembourse: 7500000, tauxRemb: 100.0, statut: 'Clôturé' },
  { id: 5, code: 'AEJ-2024-0005', nom: 'SANGARE Adama', banque: 'Ecobank', agence: 'Abidjan - Yopougon', montantFinance: 6000000, montantRembourse: 3000000, tauxRemb: 50.0, statut: 'En retard' },
  { id: 6, code: 'AEJ-2024-0006', nom: "N'GUESSAN Koffi", banque: 'NSIA', agence: 'Daloa', montantFinance: 9000000, montantRembourse: 4500000, tauxRemb: 50.0, statut: 'En retard' },
  { id: 7, code: 'AEJ-2024-0007', nom: 'COULIBALY Mariam', banque: 'BOA', agence: 'Man', montantFinance: 5000000, montantRembourse: 2500000, tauxRemb: 50.0, statut: 'En cours' },
  { id: 8, code: 'AEJ-2024-0008', nom: 'BAMBA Ibrahim', banque: 'SGCI', agence: 'San-Pédro', montantFinance: 11000000, montantRembourse: 8250000, tauxRemb: 75.0, statut: 'En cours' },
];

export function formatFCFA(value) {
  return new Intl.NumberFormat('fr-FR').format(value);
}
