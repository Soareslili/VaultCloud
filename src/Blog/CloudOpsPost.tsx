import Innovation from "../assets/blog-innovation.png";

export default function CloudOpsPost() {
  return (
    <>
      <section
        className="relative min-h-[55vh] flex items-center justify-center text-center text-white px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${Innovation})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#001B3A]/80 to-black/90"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Inovação e competitividade com CloudOps
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Veja como empresas estão modernizando seus processos com automação e FinOps inteligentes.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-16 mb-20 space-y-10">
        
        <p className="text-gray-700 leading-relaxed text-lg">
          CloudOps combina governança, automação, observabilidade e FinOps 
          para reduzir custos, aumentar a eficiência operacional e acelerar a inovação.
        </p>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Por que CloudOps importa?</h2>
        <p className="text-gray-700 leading-relaxed">
          Ambientes multicloud geram desafios de controle, padronização e monitoramento. CloudOps 
          centraliza e otimiza operações, impulsionando competitividade.
        </p>

        <ul className="text-gray-700 space-y-2">
          <li>⚙ Padronização e automação de processos</li>
          <li>💰 Redução de custos com FinOps</li>
          <li>📈 Escalabilidade e inovação contínua</li>
          <li>📊 Métricas e visibilidade para decisões estratégicas</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Conclusão</h2>
        <p className="text-gray-700 leading-relaxed">
          CloudOps é o caminho para empresas que buscam crescer com eficiência, controle e sustentabilidade financeira.
        </p>
      </section>
    </>
  );
}
