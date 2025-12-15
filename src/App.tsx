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






function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-neutral">
        <Navbar />

        <main className="flex-grow">
          <AOSInit />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<FaleConosco />} />
            <Route path="/obrigado" element={<Obrigado />} />


            <Route path="/cloud-risk" element={<CloudRisk />} />
            <Route path="/vaultcloud-pam" element={<VaultCloudPAM />} />
            <Route path="/devsec-pipeline" element={<DevSecPipeline />} />

            <Route path="/blog/zero-trust" element={<ZeroTrustPost />} />
            <Route path="/blog/ia-automacao" element={<IAAutomacaoPost />} />
            <Route path="/blog/governanca-cloud" element={<GovernancaCloudPost />} />
            <Route path="/blog/cloudops" element={<CloudOpsPost />} />
            <Route path="/blog/devsecops" element={<DevSecOpsPost />} />
            <Route path="/blog/ciberataques" element={<CiberataquesPost />} />

            <Route path="/services/cloud-strategy" element={<CloudStrategy />} />
            <Route path="/services/cloud-risk-assessment" element={<CloudRiskAssessment/>} />
            <Route path="/services/vaultcloud-pam" element={<VaultCloudPAMService />} />
      



          </Routes>


        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
