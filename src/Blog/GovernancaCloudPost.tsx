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
            Como boas práticas de governança garantem segurança, controle de custos,
            compliance e escalabilidade em ambientes cloud e multicloud.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-5xl mx-auto px-4 mt-16 mb-20 space-y-12">

        {/* INTRODUÇÃO */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#401AB2]">
          Governança Cloud como base da transformação digital
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          A computação em nuvem acelerou a inovação e a escalabilidade das organizações.
          No entanto, esse avanço também trouxe desafios significativos relacionados a
          controle, segurança, custos e conformidade regulatória.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          Em ambientes <strong>cloud e multicloud</strong>, a governança deixou de ser
          opcional e passou a ser um elemento essencial para garantir crescimento sustentável
          e operações seguras.
        </p>

        {/* DESAFIOS */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Os riscos da nuvem sem governança
        </h2>

        <p className="text-gray-700 leading-relaxed">
          A ausência de um modelo de governança bem definido pode gerar impactos diretos
          no negócio, desde falhas de segurança até desperdício financeiro.
        </p>

        <ul className="text-gray-700 space-y-2 list-inside mt-4">
          <li>🚨 Acessos não autorizados e permissões excessivas</li>
          <li>💸 Custos descontrolados e desperdício de recursos</li>
          <li>📉 Falta de visibilidade e rastreabilidade</li>
          <li>📄 Não conformidade com normas e regulamentos</li>
        </ul>

        {/* PILARES */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Os pilares da Governança Cloud
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Uma estratégia eficaz de governança cloud se apoia em pilares fundamentais
          que garantem controle e eficiência operacional.
        </p>

        <ul className="text-gray-700 space-y-2 list-inside mt-4">
          <li>🔐 Segurança e proteção de dados</li>
          <li>📄 Compliance e auditoria contínua</li>
          <li>💰 FinOps — gestão e otimização de custos</li>
          <li>⚙ Padronização e automação de processos</li>
          <li>📊 Observabilidade, métricas e monitoramento</li>
          <li>🧱 Segregação de ambientes (dev, test, prod)</li>
        </ul>

        {/* FINOPS */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Governança financeira e FinOps
        </h2>

        <p className="text-gray-700 leading-relaxed">
          O modelo FinOps conecta times técnicos, financeiros e de negócio para garantir
          uso consciente e eficiente dos recursos em nuvem.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Com governança financeira, as empresas ganham previsibilidade de custos,
          evitam desperdícios e maximizam o retorno sobre investimento (ROI).
        </p>

        {/* AUTOMACAO */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Automação como pilar da governança
        </h2>

        <p className="text-gray-700 leading-relaxed">
          A automação é essencial para aplicar políticas de governança de forma consistente
          e escalável. Infraestrutura como código (IaC), policies as code e pipelines
          automatizados reduzem erros humanos e garantem conformidade contínua.
        </p>

        {/* VANTAGEM */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Governança como vantagem competitiva
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Organizações que tratam governança cloud como estratégia conseguem inovar com
          mais rapidez, segurança e controle.
        </p>

        <p className="text-gray-700 leading-relaxed">
          A governança deixa de ser um freio e passa a ser um acelerador de crescimento.
        </p>

        {/* COMPLIANCE */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Governança, segurança e compliance
        </h2>

        <p className="text-gray-700 leading-relaxed">
          A governança cloud é fundamental para atender normas como LGPD, ISO 27001,
          SOC 2 e NIST, garantindo controle de acessos, rastreabilidade e auditoria contínua.
        </p>

        {/* CONCLUSÃO */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Conclusão
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Governar a nuvem é garantir equilíbrio entre inovação, segurança e eficiência
          operacional.
        </p>

        <p className="text-gray-700 leading-relaxed font-medium">
          Empresas que investem em governança cloud constroem bases sólidas para crescer
          com controle, conformidade e sustentabilidade.
        </p>

      </section>

      <RelatedPosts currentSlug="governanca-cloud" />
    </>
  );
}
