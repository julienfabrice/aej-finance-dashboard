import DashboardLayout from '../layouts/DashboardLayout';
import Header from '../components/Header/Header';
import RapportsFilters from '../components/Rapports/RapportsFilters';
import RapportTypesGrid from '../components/Rapports/RapportTypesGrid';
import BeneficiairesKPIs from '../components/Beneficiaires/BeneficiairesKPIs';
import RapportsExportOptions from '../components/Rapports/RapportsExportOptions';

export default function RapportsPage() {
  return (
    <DashboardLayout>
      <Header
        step="08"
        title="Génération des rapports"
        breadcrumb={['Accueil', 'Génération des rapports']}
        bottomRight={
          <>
            <button className="header-new-btn" style={{ background: '#fff', color: 'var(--text-primary)', border: '1px solid var(--border)' }}>
              ⟲ Historique des rapports
            </button>
            <button className="header-new-btn" style={{ background: '#fff', color: 'var(--text-primary)', border: '1px solid var(--border)' }}>
              ⚙️ Paramètres des rapports
            </button>
          </>
        }
      />
      <main className="app-content">
        <RapportsFilters />
        <RapportTypesGrid />

        <div>
          <h3 className="rap-section-title">Résultats des filtres (1 245 dossiers trouvés)</h3>
          <BeneficiairesKPIs />
        </div>

        <RapportsExportOptions />
      </main>
    </DashboardLayout>
  );
}
