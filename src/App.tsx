import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Home/Hero";
import Footer from "./components/Layout/Footer";
import Services from "./components/Services/ServiceCard";
import About from "./components/Home/About";
import Blog from "./pages/Blog";
import FaleConosco from "./components/Layout/FaleConosco";
import AOSInit from "./components/ui/AOSInit";
import {MessageCircle} from "lucide-react"





function App() {
  return (
    <Router>
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
            
          </Routes>

            <a
                href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20trabalho&type=phone_number&app_absent=0"
                className="fixed bottom-4 right-4 z-[99] group"
                target="_blank"
                rel="noopener noreferrer"
            >
                <MessageCircle className="w-[50px] h-[50px] text-green-500 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute right-14 top-1 w-[140px] px-3 py-2 rounded-lg text-center text-sm font-medium bg-white text-blue-600 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Conheçam nossos Trabalhos
                </span>
            </a>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
