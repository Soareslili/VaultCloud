import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/Logo.png"
import Capa from "../../assets/HeroCapa.jpg"



import { Search, Menu, X } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [

    { name: "Home", path: "/" },
    { name: "Serviços", path: "/services" },
    { name: "Sobre Nós", path: "/about" },
    { name: "Insights ", path: "/blog" },
    { name: "Fale Conosco", path: "/contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/services?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className="fixed top-0 w-full  z-50 shadow-[var(--shadow-soft)]"
      style={{
        background: `URL(${Capa})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between h-20 ">

          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="logo-empresa" className=" md:h-24 w-24" />
          </Link>


          <div className="hidden md:flex items-center space-x-1 gap-10 font-Inter font-bold">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <a
                  className={`${isActive(item.path)
                      ? "text-[var(--color-card)]"
                      : "text-white hover:text-[var(--color-card)]"
                    } transition-all`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>



          <form onSubmit={handleSearch} className="hidden lg:flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 cursor-pointer top-1/2 -translate-y-1/2 w-4 h-4 text-card-foreground" />
              <Input
                type="text"
                placeholder="Buscar serviços..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64 bg-background/50 border-border border-card-foreground focus:border-primary transition-all"
              />
            </div>
          </form>


          <a

            className=" text-card-foreground md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </a>
        </div>


        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <form onSubmit={handleSearch} className="px-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-card-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar serviços..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full bg-background/50 border-border border-card-foreground focus:border-primary transition-all"
                />
              </div>
            </form>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all ${isActive(item.path)
                    ? "bg-primary/10 text-card-foreground font-medium"
                    : "text-white hover:bg-accent/10 hover:text-accent"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
