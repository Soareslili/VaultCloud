import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-foreground backdrop-blur-md shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/">
          <img src={logo} alt="VaultCloud Experts" className="h-18 ml-20" />
        </Link>

        <ul className="hidden md:flex gap-8 text-card-foreground font-medium mr-20">
          <li><Link to="/" className="hover:text-primary">Início</Link></li>
          <li><Link to="/services" className="hover:text-primary">Serviços</Link></li>
          <li><Link to="/about" className="hover:text-primary">Sobre</Link></li>
          <li><Link to="/contact" className="hover:text-primary">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
