import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Home/Hero";
import Footer from "./components/Layout/Footer";
import Services from "./components/Services/ServiceCard";
import About from "./components/Home/About";
import Blog from "./pages/Blog";
import FaleConosco from "./components/Layout/FaleConosco";
import AOSInit from "./components/ui/AOSInit";
import Obrigado from "./pages/Obrigado";






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
            <Route path="/obrigado" element={<Obrigado />} />

          </Routes>

          <a
            href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20trabalho&type=phone_number&app_absent=0"
            className="fixed bottom-4 right-4 z-99 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-[50px] h-[50px] text-green-500 transition-transform duration-300 group-hover:scale-110 bi bi-whatsapp" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
            <span className="absolute right-14 top-1 w-[140px] px-3 py-2 rounded-lg text-center text-sm font-medium bg-white text-blue-600 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Conheça nossos Trabalhos
            </span>
          </a>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
