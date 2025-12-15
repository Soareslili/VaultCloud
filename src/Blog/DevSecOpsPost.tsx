import RelatedPosts from "./RelatedPosts";
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
            A integração de segurança desde o início do ciclo de desenvolvimento para prevenir vulnerabilidades.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-16 mb-20 space-y-12">

        {/* INTRODUÇÃO */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#401AB2]">
          DevSecOps: Integrando segurança em cada etapa do desenvolvimento
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          No mundo digital acelerado de hoje, garantir que a segurança seja incorporada em todas as fases do desenvolvimento
          não é mais uma opção — é uma necessidade. O modelo DevSecOps surge como a solução para integrar segurança
          de forma contínua, sem comprometer a agilidade do ciclo de vida do software.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          DevSecOps é a combinação de **Desenvolvimento (Dev)**, **Operações (Ops)** e **Segurança (Sec)**, promovendo
          colaboração e automação para garantir que a segurança seja tratada desde a fase inicial do projeto até a entrega final.
        </p>

        {/* DESAFIO DA CULTURA */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Por que a cultura DevSecOps é o maior desafio?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          A segurança não deve ser tratada como uma função isolada. Para que o DevSecOps seja bem-sucedido, é preciso uma
          transformação cultural dentro da organização. A integração de segurança exige a mudança de mentalidade das equipes.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Não é suficiente apenas adotar ferramentas de segurança; é necessário que todos os membros da equipe — desenvolvedores,
          operadores e profissionais de segurança — se tornem responsáveis pela proteção do sistema.
        </p>

        <ul className="text-gray-700 space-y-2 list-inside mt-4">
          <li>🤝 Segurança integrada desde o planejamento</li>
          <li>🔐 Redução de vulnerabilidades e retrabalho</li>
          <li>⚙ Automatização de testes e validações de segurança</li>
          <li>🚀 Entregas contínuas com confiança e maior agilidade</li>
        </ul>

        {/* IMPLEMENTAÇÃO DE DEVSECOPS */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Como implementar uma cultura DevSecOps eficiente
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Para implementar DevSecOps com sucesso, as equipes precisam incorporar práticas de segurança em todas as etapas do
          desenvolvimento, desde o planejamento até a entrega contínua.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Isso inclui a automatização de testes de segurança, integração de ferramentas de segurança no pipeline de CI/CD
          e a criação de políticas de segurança que todos os membros da equipe possam seguir.
        </p>

        <ul className="text-gray-700 space-y-2 list-inside mt-4">
          <li>🔄 Integração contínua de ferramentas de segurança (SAST, DAST, etc.)</li>
          <li>🛠 Automação de testes e validações para garantir conformidade</li>
          <li>📋 Políticas de segurança bem definidas para todas as etapas do ciclo de vida</li>
          <li>👥 Colaboração entre todas as equipes envolvidas: Dev, Sec e Ops</li>
        </ul>

        {/* BENEFÍCIOS */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Benefícios da cultura DevSecOps para a organização
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Organizações que adotam DevSecOps têm a vantagem de integrar segurança sem comprometer a velocidade de entrega.
          Isso resulta em sistemas mais seguros, resilientes e eficientes, com menor probabilidade de falhas de segurança em
          produção.
        </p>

        <ul className="text-gray-700 space-y-2 list-inside mt-4">
          <li>✅ Redução de riscos e falhas de segurança em produção</li>
          <li>✅ Menor custo de correção de vulnerabilidades</li>
          <li>✅ Melhor colaboração entre equipes de desenvolvimento, segurança e operações</li>
          <li>✅ Aumento da confiança dos stakeholders e clientes</li>
        </ul>

        {/* CONCLUSÃO */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Conclusão
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Adotar a cultura DevSecOps não é apenas uma tendência; é uma necessidade para garantir que as organizações
          permaneçam competitivas, seguras e preparadas para o futuro.
        </p>

        <p className="text-gray-700 leading-relaxed font-medium">
          Equipes que adotam DevSecOps criam bases mais fortes para inovação contínua, melhorando a eficiência e a segurança de
          forma colaborativa e automatizada.
        </p>

      </section>

      <RelatedPosts currentSlug="devsecops" />
    </>
  );
}
