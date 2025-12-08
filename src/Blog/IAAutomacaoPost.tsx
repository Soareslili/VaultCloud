import DataAI from "../assets/blog-ai.png";

export default function IAAutomacaoPost() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[55vh] flex items-center justify-center text-center text-white px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${DataAI})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#001B3A]/80 to-black/90"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            IA e automação: o futuro da segurança digital
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Descubra como a inteligência artificial está transformando o monitoramento e resposta a incidentes.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-5xl mx-auto px-4 mt-16 mb-20 space-y-10">
     
        <p className="text-gray-700 leading-relaxed text-lg">
          A crescente sofisticação dos ataques cibernéticos exige respostas rápidas e inteligentes. 
          A inteligência artificial (IA) e a automação estão revolucionando a segurança digital, 
          permitindo identificar ameaças com precisão, antecipar comportamentos suspeitos e responder a incidentes 
          em questão de segundos.
        </p>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Por que a IA se tornou indispensável?</h2>
        <p className="text-gray-700 leading-relaxed">
          O volume de dados, logs e eventos de segurança é tão grande que a análise manual se tornou inviável. 
          Com IA, sistemas conseguem aprender padrões, detectar anomalias e tomar decisões baseadas em contexto.
        </p>

        <ul className="text-gray-700 space-y-2">
          <li>🤖 Detecção de ameaças antes da execução</li>
          <li>⚡ Automatização de respostas em milissegundos</li>
          <li>📡 Redução do tempo médio de resposta (MTTR)</li>
          <li>🔍 Identificação de comportamentos suspeitos invisíveis ao humano</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#001B3A]">A automação na linha de frente</h2>
        <p className="text-gray-700 leading-relaxed">
          Soluções integradas com SOAR, SIEM e SOC 24/7 permitem resposta automatizada, mitigando o impacto de incidentes 
          e reduzindo o risco de falha humana.
        </p>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Conclusão</h2>
        <p className="text-gray-700 leading-relaxed">
          A junção entre IA e automação projeta um novo cenário de segurança: mais rápido, inteligente e escalável 
          — indispensável para empresas que buscam operar com confiança.
        </p>

      </section>
    </>
  );
}
