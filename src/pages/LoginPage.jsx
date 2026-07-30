import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from '../assets/logo1.jpeg';
import './LoginPage.css';

const DEMO_ACCOUNTS = [
  { key: 'admin', label: 'Administrateur' },
  { key: 'agence', label: 'Agence régionale' },
  { key: 'partenaire', label: 'Partenaire financier' },
  { key: 'chef-service', label: 'Chef de service' },
  { key: 'conseiller', label: 'Conseiller insertion pro' },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const [identifiant, setIdentifiant] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Démo — aucune vérification réelle, on va directement au dashboard.
    navigate('/dashboard');
  }

  function handleDemoAccount(account) {
    setIdentifiant(account.key);
    setMotDePasse('AEJ2026');
  }

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-left-bg-shape shape-1" />
        <div className="login-left-bg-shape shape-2" />

        <div className="login-brand">
          <img src={logo1} alt="Agence Emploi Jeunes" />
          <div>
            <h1>Agence Emploi Jeunes</h1>
            <p>PLATEFORME DE SUIVI FINANCIER</p>
          </div>
        </div>

        <p className="login-description">
          Programme Social du Gouvernement 2022–2024 — traçabilité en temps réel
          des financements destinés aux jeunes entrepreneurs à travers les
          guichets AGR, MPE, MEPS et les dispositifs de projets structurants.
        </p>
      </div>

      <div className="login-right">
        <div className="login-form-wrap">
          <h2>Connexion</h2>
          <p className="login-subtitle">ESPACE SÉCURISÉ MULTI-UTILISATEUR</p>
          <p className="login-hint">Connectez-vous avec le compte de votre structure</p>

          <form onSubmit={handleSubmit}>
            <label className="login-field">
              <span>IDENTIFIANT</span>
              <input
                type="text"
                placeholder="ex. agence.abidjan"
                value={identifiant}
                onChange={(e) => setIdentifiant(e.target.value)}
              />
            </label>

            <label className="login-field">
              <span>MOT DE PASSE</span>
              <div className="login-password-wrap">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={motDePasse}
                  onChange={(e) => setMotDePasse(e.target.value)}
                />
                <button
                  type="button"
                  className="login-toggle-pwd"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </label>

            <button type="submit" className="login-submit-btn">
              Se connecter
            </button>
          </form>

          <hr className="login-divider" />

          <p className="login-demo-title">
            COMPTES DE DÉMONSTRATION — MOT DE PASSE : <strong>AEJ2026</strong>
          </p>
          <div className="login-demo-pills">
            {DEMO_ACCOUNTS.map((acc) => (
              <button key={acc.key} className="login-demo-pill" onClick={() => handleDemoAccount(acc)}>
                {acc.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
