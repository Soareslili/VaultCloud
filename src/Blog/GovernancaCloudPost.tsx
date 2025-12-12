import RelatedPosts from "./RelatedPosts";

import Governance from "../assets/blog-governance.png";

export default function GovernancaCloudPost() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[55vh] flex items-center justify-center text-center text-white px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${Governance})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#001B3A]/80 to-black/90"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Governança Cloud: pilares para uma gestão eficiente
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            A importância da governança e boas práticas na sustentação de infraestruturas seguras e escaláveis.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-5xl mx-auto px-4 mt-16 mb-20 space-y-10">

        <p className="text-gray-700 leading-relaxed text-lg">
          Com a expansão multicloud, a governança tornou-se indispensável para manter controle, segurança, custos 
          e compliance. Sem governança, organizações enfrentam riscos como acessos não autorizados, gastos 
          descontrolados e falhas regulatórias.
        </p>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Os pilares da Governança Cloud</h2>
        <ul className="text-gray-700 space-y-2">
          <li>🔐 Segurança e proteção de dados</li>
          <li>📄 Compliance e auditoria contínua</li>
          <li>💰 FinOps — controle de custos</li>
          <li>⚙ Automação e padronização de processos</li>
          <li>📊 Observabilidade e métricas</li>
          <li>🧱 Segregação de ambientes</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Governança como vantagem competitiva</h2>
        <p className="text-gray-700 leading-relaxed">
          Empresas que tratam governança como estratégia aceleram entregas, reduzem riscos e criam bases sólidas 
          para inovação e escalabilidade.
        </p>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Conclusão</h2>
        <p className="text-gray-700 leading-relaxed">
          Governar a nuvem é garantir controle, segurança e sustentabilidade operacional — pilares essenciais 
          para organizações que buscam crescer com tecnologia.
        </p>

      </section>

      <RelatedPosts currentSlug="governanca-cloud" />
    </>
  );
}
