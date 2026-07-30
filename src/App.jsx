import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardFinancePage from './pages/DashboardFinancePage';
import BeneficiairesPage from './pages/BeneficiairesPage';
import DossierBeneficiairePage from './pages/DossierBeneficiairePage';
import PlanRemboursementPage from './pages/PlanRemboursementPage';
import ExploitationPage from './pages/ExploitationPage';
import IndicateursPage from './pages/IndicateursPage';
import RapportsPage from './pages/RapportsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardFinancePage />} />
        <Route path="/beneficiaires" element={<BeneficiairesPage />} />
        <Route path="/beneficiaires/:code" element={<DossierBeneficiairePage />} />
        <Route path="/beneficiaires/:code/plan" element={<PlanRemboursementPage />} />
        <Route path="/exploitation" element={<ExploitationPage />} />
        <Route path="/indicateurs" element={<IndicateursPage />} />
        <Route path="/rapports" element={<RapportsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
