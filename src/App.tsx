import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Home/Hero";
import Footer from "./components/Layout/Footer";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-neutral">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="services" element={<ServicesPage />} />  
            
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
