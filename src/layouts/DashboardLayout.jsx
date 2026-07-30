import Sidebar from '../components/Sidebar/Sidebar';
import '../App.css';

/** Squelette partagé par toutes les pages : Sidebar + zone de contenu. */
export default function DashboardLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-main">{children}</div>
    </div>
  );
}
