export default function ManagedCloudSecurity() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-24 space-y-16 text-[#001B3A]">
      {/* HERO */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#401AB2]">
          Managed Cloud Security (SOC-as-a-Service)
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Operação gerenciada de segurança 24/7 com visibilidade, detecção e resposta
          rápida a ameaças em ambientes cloud e multicloud.
        </p>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Ataques modernos exigem monitoramento contínuo, correlação inteligente de eventos
        e resposta rápida. O <strong>SOC-as-a-Service</strong> entrega uma operação de
        segurança gerenciada, com alertas em tempo real, dashboards e relatórios
        executivos para manter sua nuvem protegida e em conformidade.
      </p>

      {/* ABORDAGEM */}
      <div className="bg-[#F5F7FB] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
        <p className="text-gray-700 leading-relaxed">
          Integramos logs, telemetria e alertas do ambiente cloud com soluções SIEM/SOAR,
          definimos casos de uso, criamos playbooks de resposta e operamos a detecção e
          contenção de incidentes de forma contínua — com foco em reduzir risco e tempo
          de resposta.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        <ServiceBox
          title="Entregáveis"
          items={[
            "Onboarding e integração de fontes de logs",
            "Dashboards de segurança e KPIs",
            "Casos de uso e regras de correlação (SIEM)",
            "Playbooks e automações (SOAR)",
            "Relatórios periódicos e recomendações",
          ]}
        />

        <ServiceBox
          title="Benefícios"
          items={[
            "Detecção e resposta 24/7",
            "Redução de MTTD e MTTR",
            "Visibilidade total do ambiente",
            "Melhoria contínua da postura de segurança",
            "Suporte para auditorias e compliance",
          ]}
        />

        <ServiceBox
          title="Indicado Para"
          items={[
            "Empresas com ambientes críticos",
            "Times sem SOC interno dedicado",
            "Organizações multicloud",
            "Negócios em escala e expansão",
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
