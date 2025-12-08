import Team from "../assets/blog-team.png";

export default function DevSecOpsPost() {
  return (
    <>
      <section
        className="relative min-h-[55vh] flex items-center justify-center text-center text-white px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${Team})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#001B3A]/80 to-black/90"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            O papel da cultura DevSecOps
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Integração de segurança desde o início do ciclo de desenvolvimento para prevenir vulnerabilidades.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-16 mb-20 space-y-10">

        <p className="text-gray-700 leading-relaxed text-lg">
          DevSecOps une desenvolvimento, operações e segurança em um único fluxo, 
          garantindo entregas rápidas e seguras desde o primeiro commit.
        </p>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Por que a cultura é o maior desafio?</h2>
        <p className="text-gray-700 leading-relaxed">
          Segurança não é apenas tecnologia — é mentalidade. A cultura DevSecOps promove colaboração, 
          automação e responsabilidade compartilhada.
        </p>

        <ul className="text-gray-700 space-y-2">
          <li>🤝 Segurança integrada desde o planejamento</li>
          <li>🔐 Menos vulnerabilidades e retrabalho</li>
          <li>⚙ Automatização de testes e validações</li>
          <li>🚀 Entregas contínuas com confiança</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Conclusão</h2>
        <p className="text-gray-700 leading-relaxed">
          Adotar DevSecOps é criar equipes mais ágeis, colaborativas e preparadas para o futuro da segurança digital.
        </p>
      </section>
    </>
  );
}
