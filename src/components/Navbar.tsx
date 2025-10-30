import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
  
    alert(`Buscando por: ${search}`);
    setSearch("");
  };

  return (
    <header className="fixed top-0 w-full bg-background/20 backdrop-blur-md shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-4">
   
        <div className="flex items-center justify-center w-full md:w-auto ml-16">
          <img src={logo} alt="VaultCloud Experts" className="h-20" />
        </div>

      
        <ul className="flex flex-wrap justify-center gap-6 text-card-foreground font-medium">
          <li><a href="#home" className="hover:text-gray-900 transition">Início</a></li>
          <li><a href="#services" className="hover:text-gray-900 transition">Serviços</a></li>
          <li><a href="#about" className="hover:text-gray-900 transition">Sobre</a></li>
          <li><a href="#contact" className="hover:text-gray-900 transition">Contato</a></li>
        </ul>

       
        <div className="flex items-center gap-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Pesquisar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" border border-gray-300 rounded-md text-gray-300 py-1.5 px-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition"
            >
            </button>
          </form>

        
        </div>
      </nav>
    </header>
  );
}
