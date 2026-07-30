# AEJ Finance Dashboard — Démo

Dashboard de présentation (données fictives) reproduisant la maquette
"Tableau de bord - Finance".

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173

## Structure

```
src/
├── components/
│   ├── Sidebar/        Navigation latérale
│   ├── Header/          En-tête, breadcrumb, filtres
│   ├── KPICards/         5 cartes indicateurs (dont 2 gauges SVG)
│   ├── Charts/            LoanChart (barres), RepaymentChart (donut)
│   ├── Map/                CIMap (carte de densité stylisée)
│   ├── Tables/              AgencyTable (alertes critiques)
│   └── RecentActivities/     Business Shortcuts
├── data/
│   └── mockData.js       Toutes les données fictives, centralisées
├── App.jsx              Assemblage du layout
└── index.css             Design tokens (couleurs, radius, ombres)
```

## Données

Toutes les données affichées sont fictives, centralisées dans
`src/data/mockData.js` pour faciliter le remplacement par de vraies
données/API plus tard.
