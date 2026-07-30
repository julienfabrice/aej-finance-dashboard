import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Header from '../components/Header/Header';
import KPICards from '../components/KPICards/KPICards';
import LoanChart from '../components/Charts/LoanChart';
import RepaymentChart from '../components/Charts/RepaymentChart';
import CIMap from '../components/Map/CIMap';
import AgencyTable from '../components/Tables/AgencyTable';
import RecentActivities from '../components/RecentActivities/RecentActivities';
import { regions, banques } from '../data/mockData';

function DashboardFilters() {
  const [banque, setBanque] = useState(banques[0]);
  const [region, setRegion] = useState(regions[0]);

  return (
    <div className="header-filters">
      <div className="header-filter-badge">
        <span className="dot" />
        Programme Social AEJ 2022-2024
      </div>
      <select value={banque} onChange={(e) => setBanque(e.target.value)}>
        {banques.map((b) => (
          <option key={b}>{b}</option>
        ))}
      </select>
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        {regions.map((r) => (
          <option key={r}>{r}</option>
        ))}
      </select>
      <div className="header-region-pills">
        {['Abidjan', 'Bouaké', 'Yamoussoukro'].map((r) => (
          <button key={r} className="pill">
            {r}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function DashboardFinancePage() {
  return (
    <DashboardLayout>
      <Header
        step="01"
        title="Tableau de bord – Finance"
        breadcrumb={['Accueil', 'Liste des bénéficiaires', 'Tableau de Finance']}
        bottomRight={<DashboardFilters />}
      />
      <main className="app-content">
        <KPICards />

        <section className="app-row-3">
          <CIMap />
          <RepaymentChart />
          <LoanChart />
        </section>

        <section className="app-row-2">
          <AgencyTable />
          <RecentActivities />
        </section>
      </main>
    </DashboardLayout>
  );
}
