export default function CloudRiskAssessment() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-24 space-y-16 text-[#001B3A]">

      {/* HERO */}
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#401AB2]">
          Cloud Risk Assessment & Compliance
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Identificação de riscos, gaps de segurança e adequação aos principais frameworks globais.
        </p>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Ambientes cloud mal configurados são uma das principais causas de incidentes
        de segurança. Este serviço realiza uma avaliação completa da postura de
        segurança, conformidade e governança do ambiente.
      </p>

      {/* FRAMEWORKS */}
      <div className="bg-[#F5F7FB] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Frameworks e Normas</h2>
        <p className="text-gray-700">
          Trabalhamos alinhados aos principais padrões de mercado, incluindo
          <strong> NIST, ISO 27001, CIS Benchmarks, SOC 2 e LGPD</strong>.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        <ServiceBox
          title="Entregáveis"
          items={[
            "Avaliação de riscos e ameaças",
            "Gap Analysis de compliance",
            "Relatórios executivos",
            "Plano de remediação priorizado",
            "Recomendações técnicas",
          ]}
        />

        <ServiceBox
          title="Benefícios"
          items={[
            "Redução de riscos e incidentes",
            "Preparação para auditorias",
            "Compliance contínuo",
            "Maior visibilidade do ambiente",
            "Confiança do mercado",
          ]}
        />

        <ServiceBox
          title="Indicado Para"
          items={[
            "Empresas em auditoria",
            "Ambientes regulados",
            "Organizações multicloud",
            "Empresas em expansão",
          ]}
        />
      </div>

      {/* CTA */}
      <div>
        <button className="btn-glow px-6 py-3">
          Solicitar Avaliação de Riscos
        </button>
      </div>
    </section>
  );
}

/* =======================
   CARD REUTILIZÁVEL
======================= */

function ServiceBox({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div
      className="
        bg-white
        rounded-lg
        p-6
        border
        border-gray-100
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
      "
    >
      <h3 className="font-semibold mb-3 text-[#001B3A]">
        {title}
      </h3>

      <ul className="space-y-1 text-sm text-gray-700">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
