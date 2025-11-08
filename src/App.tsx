import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Home/Hero";
import Footer from "./components/Layout/Footer";
import Services from "./components/Services/ServiceCard";
import About from "./components/Home/About";
import Blog from "./pages/Blog";
import FaleConosco from "./components/Layout/FaleConosco";



function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-neutral">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="services" element={<Services />} />  
            <Route path="about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
             <Route path="/contact" element={<FaleConosco />} />
            
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
