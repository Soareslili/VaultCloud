export default function CloudCostOptimization() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-24 space-y-16 text-[#001B3A]">

      {/* HERO */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#401AB2]">
          Cloud Cost & Performance Optimization
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Otimize custos, aumente performance e traga previsibilidade financeira para sua operação em nuvem.
        </p>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Ambientes cloud mal gerenciados geram desperdício financeiro, baixa performance
        e falta de previsibilidade. O serviço de
        <strong> Cloud Cost & Performance Optimization</strong> aplica práticas de
        <strong> FinOps</strong> para alinhar tecnologia, finanças e negócio,
        garantindo eficiência operacional e controle total dos custos.
      </p>

      {/* ABORDAGEM */}
      <div className="bg-[#F5F7FB] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
        <p className="text-gray-700 leading-relaxed">
          Analisamos o consumo atual de recursos, identificamos desperdícios,
          oportunidades de otimização e gargalos de performance. Implementamos
          automações, políticas de uso e métricas claras para garantir economia
          contínua sem comprometer disponibilidade ou segurança.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        <ServiceBox
          title="Entregáveis"
          items={[
            "Análise detalhada de custos cloud",
            "Relatórios de consumo e tendências",
            "Recomendações de right-sizing",
            "Políticas de tagging e controle",
            "Dashboards financeiros (FinOps)",
          ]}
        />

        <ServiceBox
          title="Benefícios"
          items={[
            "Redução imediata de custos",
            "Maior previsibilidade financeira",
            "Melhoria de performance",
            "Uso eficiente de recursos",
            "Decisões orientadas por dados",
          ]}
        />

        <ServiceBox
          title="Indicado Para"
          items={[
            "Empresas com custos cloud elevados",
            "Ambientes sem controle financeiro",
            "Times em crescimento rápido",
            "Organizações multicloud",
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

/* CARD COMPONENT */
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
