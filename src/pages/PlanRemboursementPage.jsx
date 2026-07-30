import { useParams } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Header from '../components/Header/Header';
import PlanInfoBar from '../components/PlanRemboursement/PlanInfoBar';
import PlanKPIs from '../components/PlanRemboursement/PlanKPIs';
import PlanEvolutionChart from '../components/PlanRemboursement/PlanEvolutionChart';
import { PlanDetailsCard, PlanResumeCard, PlanLegendCard } from '../components/PlanRemboursement/PlanSideCards';
import PlanEcheancesTable from '../components/PlanRemboursement/PlanEcheancesTable';
import { getPlanByCode } from '../data/planRemboursementData';

export default function PlanRemboursementPage() {
  const { code = 'AEJ-2024-0001' } = useParams();
  const plan = getPlanByCode(code);

  return (
    <DashboardLayout>
      <Header
        step="04"
        title="Plan de remboursement"
        breadcrumb={['Accueil', 'Liste des bénéficiaires', 'Dossier bénéficiaire', 'Plan de remboursement']}
      />
      <main className="app-content">
        <PlanInfoBar info={plan.infoBar} />
        <PlanKPIs plan={plan} />

        <section className="plan-main-grid">
          <PlanEvolutionChart data={plan.evolution} />
          <PlanDetailsCard details={plan.details} />
          <PlanResumeCard plan={plan} />
        </section>

        <div className="plan-main-grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
          <PlanEcheancesTable echeances={plan.echeances} />
          <PlanLegendCard />
        </div>
      </main>
    </DashboardLayout>
  );
}
