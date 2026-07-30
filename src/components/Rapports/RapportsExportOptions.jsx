import './Rapports.css';

export default function RapportsExportOptions() {
  return (
    <>
      <section className="rap-export-row">
        <div className="rap-card">
          <h3>Options d'export</h3>
          <div className="rap-export-btns">
            <button className="rap-export-btn tone-green">📕 Exporter en PDF</button>
            <button className="rap-export-btn tone-green">📗 Exporter en Excel</button>
            <button className="rap-export-btn tone-green">📘 Exporter en CSV</button>
            <button className="rap-export-btn tone-outline">🖨️ Imprimer</button>
          </div>
        </div>

        <div className="rap-card">
          <h3>Planification de rapport</h3>
          <p className="rap-plan-desc">
            Automatisez l'envoi de ce rapport par email selon une périodicité.
          </p>
          <button className="rap-export-btn tone-outline">📅 Planifier l'envoi</button>
        </div>

        <div className="rap-card">
          <h3>Destinataires (optionnel)</h3>
          <input
            type="text"
            className="rap-dest-input"
            placeholder="Saisir les emails (séparés par des virgules)"
          />
          <p className="rap-dest-hint">Ex: directeur@agence.cm, finance@agence.cm</p>
        </div>
      </section>

      <footer className="rap-footer">
        <p>
          <span className="rap-footer-check">✅</span> <strong>Prêt à générer</strong>
          <br />
          <span className="rap-footer-sub">Votre rapport sera généré selon les filtres sélectionnés.</span>
        </p>
        <button className="rap-generate-btn">📄 Générer le rapport</button>
      </footer>
    </>
  );
}
