import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Header from '../components/Header/Header';
import BeneficiairesKPIs from '../components/Beneficiaires/BeneficiairesKPIs';
import BeneficiairesFilters from '../components/Beneficiaires/BeneficiairesFilters';
import BeneficiairesTable from '../components/Beneficiaires/BeneficiairesTable';

export default function BeneficiairesPage() {
  const [search, setSearch] = useState('');

  return (
    <DashboardLayout>
      <Header
        step="02"
        title="Liste des bénéficiaires"
        breadcrumb={['Accueil', 'Liste des bénéficiaires']}
        bottomRight={<button className="header-new-btn">+ Nouveau bénéficiaire</button>}
      />
      <main className="app-content">
        <BeneficiairesKPIs />
        <BeneficiairesFilters search={search} onSearchChange={setSearch} />
        <BeneficiairesTable search={search} />
      </main>
    </DashboardLayout>
  );
}
