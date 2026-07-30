export const rapportTypes = [
  {
    key: 'global',
    icon: '📊',
    tone: 'green',
    titre: 'Rapport global',
    desc: "Vue d'ensemble des financements, remboursements et performances.",
    points: ['Résumé financier', 'Indicateurs clés', 'Répartition par banque & région'],
  },
  {
    key: 'banque',
    icon: '🏛️',
    tone: 'blue',
    titre: 'Rapport par banque',
    desc: 'Synthèse des dossiers financés par banque.',
    points: ['Engagements par banque', 'Remboursements', 'Taux de performance'],
  },
  {
    key: 'agence',
    icon: '🏢',
    tone: 'green',
    titre: 'Rapport par agence',
    desc: 'Analyse des performances par agence.',
    points: ['Portefeuille par agence', 'État des remboursements', 'Alertes & retards'],
  },
  {
    key: 'secteur',
    icon: '📈',
    tone: 'purple',
    titre: 'Rapport par secteur',
    desc: "Performance des bénéficiaires par secteur d'activité.",
    points: ['Répartition sectorielle', 'Rentabilité moyenne', "Indicateurs d'impact"],
  },
  {
    key: 'periodique',
    icon: '📅',
    tone: 'orange',
    titre: 'Rapport périodique',
    desc: 'Rapport automatique selon une périodicité définie.',
    points: ['Mensuel', 'Trimestriel', 'Annuel'],
  },
  {
    key: 'personnalise',
    icon: '👤',
    tone: 'blue',
    titre: 'Rapport personnalisé',
    desc: 'Créez un rapport avec des champs personnalisés.',
    points: ['Choix des champs', 'Filtres spécifiques', 'Mise en page personnalisée'],
  },
];

export const rapportsFilterOptions = {
  types: rapportTypes.map((r) => r.titre),
  banques: ['Toutes les banques', 'Ecobank', 'NSIA', 'BOA', 'SGCI'],
  agences: ['Toutes les agences', 'Abidjan - Plateau', 'Abidjan - Yopougon', 'Bouaké'],
  regions: ['Toutes les régions', 'Abidjan', 'Yamoussoukro', 'Bouaké'],
  statuts: ['Tous les statuts', 'En cours', 'En retard', 'Clôturé'],
  secteurs: ['Tous les secteurs', 'Commerce', 'Agriculture', 'Services', 'Élevage'],
};
