import RelatedPosts from "./RelatedPosts";
import Cyber from "../assets/blog-cyber.png";

export default function CiberataquesPost() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[55vh] flex items-center justify-center text-center text-white px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${Cyber})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#001B3A]/80 to-black/90"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Ciberataques: os hackers estão preparados. E você?
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Entenda o cenário atual de ameaças e como fortalecer a resiliência
            digital em um mundo cada vez mais conectado.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-5xl mx-auto px-4 mt-16 mb-20 space-y-12">

        {/* INTRODUÇÃO */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#401AB2]">
          O novo cenário da cibersegurança
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          O crescimento da transformação digital trouxe inúmeros benefícios para
          empresas e usuários. No entanto, também ampliou drasticamente a superfície
          de ataque para cibercriminosos.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          Hoje, os ataques não são mais amadores ou aleatórios. Eles são
          planejados, automatizados e executados por grupos altamente organizados,
          utilizando tecnologia avançada e inteligência artificial.
        </p>

        {/* CENÁRIO ATUAL */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          O cenário atual de ameaças
        </h2>

        <p className="text-gray-700 leading-relaxed">
          O ecossistema de ameaças evoluiu rapidamente. Ataques tornaram-se mais
          frequentes, direcionados e difíceis de detectar, afetando empresas de
          todos os tamanhos e setores.
        </p>

        <ul className="text-gray-700 space-y-2 list-inside mt-4">
          <li>🛑 Ransomware como serviço (RaaS)</li>
          <li>📨 Phishing altamente personalizado com uso de IA</li>
          <li>🔐 Vazamento e reutilização de credenciais</li>
          <li>🌐 Ataques direcionados a ambientes cloud</li>
          <li>📡 Exploração de APIs e serviços expostos</li>
        </ul>

        {/* IMPACTOS */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Impactos dos ciberataques para as organizações
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Um ciberataque vai muito além de uma falha técnica. Os impactos podem ser
          financeiros, operacionais, legais e reputacionais.
        </p>

        <ul className="text-gray-700 space-y-2 list-inside mt-4">
          <li>💸 Perdas financeiras significativas</li>
          <li>⏱ Interrupção de operações críticas</li>
          <li>📉 Danos à reputação e perda de confiança</li>
          <li>📄 Penalidades por não conformidade regulatória</li>
          <li>⚠ Exposição de dados sensíveis</li>
        </ul>

        {/* PREPARAÇÃO */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Como as empresas podem se preparar
        </h2>

        <p className="text-gray-700 leading-relaxed">
          A preparação contra ciberataques exige uma abordagem estratégica,
          combinando pessoas, processos e tecnologia.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Medidas isoladas não são suficientes. A segurança precisa ser contínua,
          integrada e alinhada ao negócio.
        </p>

        <ul className="text-gray-700 space-y-2 list-inside mt-4">
          <li>🎓 Programas de conscientização e treinamento de usuários</li>
          <li>🔐 Controle rigoroso de identidade e acessos (IAM)</li>
          <li>🧩 Adoção do modelo Zero Trust</li>
          <li>📊 Monitoramento contínuo e resposta a incidentes</li>
          <li>⚙ Automação de segurança e resposta</li>
        </ul>

        {/* RESILIÊNCIA */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Resiliência digital como diferencial estratégico
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Não se trata apenas de evitar ataques, mas de estar preparado para
          responder rapidamente, minimizar impactos e recuperar operações.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Empresas resilientes assumem que ataques podem acontecer e constroem
          estratégias sólidas de prevenção, detecção e resposta.
        </p>

        {/* CONCLUSÃO */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Conclusão
        </h2>

        <p className="text-gray-700 leading-relaxed">
          No cenário atual, ciberataques não são uma questão de “se”, mas de “quando”.
        </p>

        <p className="text-gray-700 leading-relaxed font-medium">
          Estar preparado é a única forma de garantir resiliência digital, proteger
          dados críticos e manter a confiança de clientes e parceiros.
        </p>

      </section>

      <RelatedPosts currentSlug="ciberataques" />
    </>
  );
}
