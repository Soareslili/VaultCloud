import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Hero from "./Home/Hero";
import Footer from "./Layout/Footer";
import Services from "./components/ui/ServiceCard";
import About from "./pages/About";
import Blog from "./pages/Blog";
import FaleConosco from "./pages/FaleConosco";
import AOSInit from "./components/ui/AOSInit";
import Obrigado from "./pages/Obrigado";
import ScrollToTop from "./components/ui/ScrollToTop";

import CloudRisk from "./Services/CloudRisk";
import VaultCloudPAM from "./Services/VaultCloudPAM";
import DevSecPipeline from "./Services/DevSecPipeline";
import ZeroTrustPost from "./Blog/ZeroTrustPost";
import IAAutomacaoPost from "./Blog/IAAutomacaoPost";
import GovernancaCloudPost from "./Blog/GovernancaCloudPost";
import CloudOpsPost from "./Blog/CloudOpsPost";
import CiberataquesPost from "./Blog/CiberataquesPost";
import DevSecOpsPost from "./Blog/DevSecOpsPost";

import CloudStrategy from "./Services/CloudStrategy";
import CloudRiskAssessment from "./Services/CloudRiskAssessment";
import VaultCloudPAMService from "./Services/VaultCloudPAMService";
import SecureCloudFoundation from "./Services/SecureCloudFoundation";
import CloudCostOptimization from "./Services/CloudCostOptimization";
import DevSecPipelineService from "./Services/DevSecPipelineService";
import BackupImmutableVaultService from "./Services/BackupImmutableVaultService";
import DataProtectionEncryption from "./Services/DataProtectionEncryption";
import SensitiveDataDiscovery from "./Services/SensitiveDataDiscovery";
import ManagedCloudSecurity from "./Services/ManagedCloudSecurity";
import IncidentResponseForensics from "./Services/IncidentResponseForensics";
import WorkshopsTreinamentos from "./Services/WorkshopsTreinamentos";
import DRPDisasterRecovery from "./Services/DRPDisasterRecovery";






function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-neutral">
        <Navbar />

        <main className="flex-grow">
          <AOSInit />
          <Routes>

            /* Main Pages */

            <Route path="/" element={<Hero />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<FaleConosco />} />
            <Route path="/obrigado" element={<Obrigado />} />


            /* Service Pages */

            <Route path="/cloud-risk" element={<CloudRisk />} />
            <Route path="/vaultcloud-pam" element={<VaultCloudPAM />} />
            <Route path="/devsec-pipeline" element={<DevSecPipeline />} />

            /* Blog Posts */

            <Route path="/blog/zero-trust" element={<ZeroTrustPost />} />
            <Route path="/blog/ia-automacao" element={<IAAutomacaoPost />} />
            <Route path="/blog/governanca-cloud" element={<GovernancaCloudPost />} />
            <Route path="/blog/cloudops" element={<CloudOpsPost />} />
            <Route path="/blog/devsecops" element={<DevSecOpsPost />} />
            <Route path="/blog/ciberataques" element={<CiberataquesPost />} />

            /* Service Details */

            <Route path="/services/cloud-strategy" element={<CloudStrategy />} />
            <Route path="/services/cloud-risk-assessment" element={<CloudRiskAssessment />} />
            <Route path="/services/vaultcloud-pam" element={<VaultCloudPAMService />} />
            <Route path="/services/secure-cloud-foundation" element={<SecureCloudFoundation />} />
            <Route path="/services/cloud-detection-response" element={<CloudCostOptimization />} />
            <Route path="/services/devsec-pipeline" element={<DevSecPipelineService />} />
            <Route path="/services/backup-immutable-vault" element={<BackupImmutableVaultService />} />
            <Route path="/services/finops-optimization" element={<CloudCostOptimization />} />
            <Route path="/services/data-protection" element={<DataProtectionEncryption />} />
            <Route path="/services/sensitive-data-discovery" element={<SensitiveDataDiscovery />} />
            <Route path="/services/managed-cloud-security" element={<ManagedCloudSecurity />} />
            <Route path="/services/incident-response" element={<IncidentResponseForensics />} />
            <Route path="/services/training-workshops" element={<WorkshopsTreinamentos />} />
            <Route path="/services/drp-it-ot" element={<DRPDisasterRecovery />} />


          </Routes>


        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
