import DashboardLayout from '../layouts/DashboardLayout';
import Header from '../components/Header/Header';
import WorkflowBoard from '../components/Workflow/WorkflowBoard';

export default function WorkflowGlobalPage() {
  return (
    <DashboardLayout>
      <Header
        step="07"
        title="Suivi du workflow par lot"
        breadcrumb={['Accueil', 'Liste des bénéficiaires', 'Suivi du workflow']}
      />
      <main className="app-content">
        <p style={{ margin: '0 0 4px', fontSize: 13, color: 'var(--text-secondary)' }}>
          Cochez plusieurs dossiers dans une même étape puis cliquez sur « Faire avancer le lot »
          pour les transmettre ensemble à l'étape suivante.
        </p>
        <WorkflowBoard />
      </main>
    </DashboardLayout>
  );
}