import BgImg from "../assets/BgHero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-white px-6 overflow-hidden"
    >
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        {/* Camada de gradiente para escurecer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background"></div>
      </div>

      {/* Conteúdo do Hero */}
      <div className="relative z-10 max-w-3xl space-y-6 mt-16 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Protegendo o futuro da sua nuvem.
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Consultoria especializada em segurança, automação e governança multicloud.
        </p>
        <a
          href="#services"
          className="inline-block mt-6 bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-400 transition-all shadow-md"
        >
          Conheça nossos serviços
        </a>
      </div>
    </section>
  );
}
