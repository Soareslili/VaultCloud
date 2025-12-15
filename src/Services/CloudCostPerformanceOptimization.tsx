export default function CloudCostPerformanceOptimization() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-24 space-y-16 text-[#001B3A]">

      {/* HERO */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#401AB2]">
          Cloud Cost & Performance Optimization
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Redução de custos e aumento de performance com práticas FinOps, automação e governança contínua.
        </p>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Ambientes cloud sem controle financeiro tendem a crescer de forma desordenada,
        gerando desperdícios e baixa eficiência operacional. O serviço de
        <strong> Cloud Cost & Performance Optimization</strong> ajuda sua empresa a
        reduzir custos, melhorar performance e garantir previsibilidade financeira,
        sem comprometer segurança ou escalabilidade.
      </p>

      {/* ABORDAGEM */}
      <div className="bg-[#F5F7FB] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
        <p className="text-gray-700 leading-relaxed">
          Avaliamos o consumo atual de recursos, identificamos desperdícios e
          gargalos de performance, aplicando práticas FinOps, automações e políticas
          de governança para garantir uso eficiente da nuvem ao longo do tempo.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        <ServiceBox
          title="Entregáveis"
          items={[
            "Análise detalhada de custos cloud",
            "Identificação de recursos ociosos",
            "Recomendações de right-sizing",
            "Políticas de tagging e budgets",
            "Relatórios executivos de otimização",
          ]}
        />

        <ServiceBox
          title="Benefícios"
          items={[
            "Redução imediata de custos",
            "Melhor performance das aplicações",
            "Previsibilidade financeira",
            "Uso eficiente de recursos",
            "Governança contínua de custos",
          ]}
        />

        <ServiceBox
          title="Indicado Para"
          items={[
            "Ambientes com custos elevados",
            "Empresas em crescimento rápido",
            "Ambientes multicloud",
            "Organizações buscando FinOps",
          ]}
        />

      </div>

      {/* CTA */}
      <div>
         <a
          href="/services"
          className="inline-block mt-10 ml-[40%] bg-[#001B3A] text-white px-8 py-3 rounded-md font-semibold hover:bg-cyan-600 transition"
        >
          Ver todos os serviços
        </a>
      </div>

    </section>
  );
}

/* CARD PADRÃO */
function ServiceBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all">
      <h3 className="font-semibold mb-3 text-[#001B3A]">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
