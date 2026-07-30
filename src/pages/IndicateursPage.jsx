import DashboardLayout from '../layouts/DashboardLayout';
import Header from '../components/Header/Header';
import ExploIndicKPIRow from '../components/Exploitation/ExploIndicKPIRow';
import ExploIndicFilters from '../components/Exploitation/ExploIndicFilters';
import ReportPreviewCard from '../components/Exploitation/ReportPreviewCard';
import IndicateursProfileHeader from '../components/Indicateurs/IndicateursProfileHeader';
import { EmploisSecteurDonut, IndicateursStackedBarChart } from '../components/Indicateurs/IndicateursCharts';
import IndicateursTable from '../components/Indicateurs/IndicateursTable';
import { indicateursKpis } from '../data/exploitationData';

export default function IndicateursPage() {
  return (
    <DashboardLayout>
      <Header
        step="06"
        title="Indicateurs d'impact"
        breadcrumb={['Accueil', 'Liste des bénéficiaires', "Indicateurs d'impact"]}
      />
      <main className="app-content">
        <IndicateursProfileHeader nom="KOASSI Jean Marc" code="AEJ-2024-0001" />
        <ExploIndicKPIRow items={indicateursKpis} />

        <div className="expl-main-row" style={{ gridTemplateColumns: '2fr 1fr' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <ExploIndicFilters title="Indicateurs d'Impact Clés (Vue par Région / Banque)" />
            <div className="expl-main-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <EmploisSecteurDonut />
              <IndicateursStackedBarChart />
            </div>
          </div>
          <ReportPreviewCard score={86} />
        </div>

        <IndicateursTable />
      </main>
    </DashboardLayout>
  );
}
