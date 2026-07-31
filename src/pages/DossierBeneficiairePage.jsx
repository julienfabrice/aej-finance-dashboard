import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Header from '../components/Header/Header';
import DossierProfile from '../components/Dossier/DossierProfile';
import DossierKPIs from '../components/Dossier/DossierKPIs';
import DossierInfoPanel from '../components/Dossier/DossierInfoPanel';
import DossierTabs from '../components/Dossier/DossierTabs';
import DossierResumeTab from '../components/Dossier/DossierResumeTab';
import DossierWorkflowTab from '../components/Dossier/DossierWorkflowTab';
import DossierTabPlaceholder from '../components/Dossier/DossierTabPlaceholder';
import { getDossierByCode } from '../data/dossierData';

const TAB_LABELS = {
  documents: 'Documents',
  historique: 'Historique',
};

// Onglets qui ont une page dédiée complète (navigation réelle, pas un panneau inline).
const TAB_ROUTES = {
  plan: (code) => `/beneficiaires/${code}/plan`,
  exploitation: () => '/exploitation',
  indicateurs: () => '/indicateurs',
};

export default function DossierBeneficiairePage() {
  const { code = 'AEJ-2024-0001' } = useParams();
  const dossier = getDossierByCode(code);
  const [searchParams] = useSearchParams();
  const [tab, setTab] = useState(searchParams.get('tab') === 'workflow' ? 'workflow' : 'resume');
  const navigate = useNavigate();

  function handleTabChange(key) {
    const routeFn = TAB_ROUTES[key];
    if (routeFn) {
      navigate(routeFn(code));
      return;
    }
    setTab(key);
  }

  return (
    <DashboardLayout>
      <Header
        step="03"
        title="Dossier du bénéficiaire"
        breadcrumb={['Accueil', 'Liste des bénéficiaires', `Dossier ${dossier.code}`]}
      />
      <main className="app-content">
        <DossierProfile dossier={dossier} />
        <DossierKPIs dossier={dossier} />
        <DossierInfoPanel dossier={dossier} />
        <DossierTabs active={tab} onChange={handleTabChange} />

        {tab === 'resume' ? (
          <DossierResumeTab dossier={dossier} />
        ) : tab === 'workflow' ? (
          <DossierWorkflowTab dossier={dossier} />
        ) : (
          <DossierTabPlaceholder label={TAB_LABELS[tab] ?? tab} />
        )}
      </main>
    </DashboardLayout>
  );
}