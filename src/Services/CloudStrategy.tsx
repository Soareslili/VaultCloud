export default function CloudStrategy() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-24 space-y-16 text-[#001B3A]">

      {/* HERO */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#401AB2]">
          Cloud Strategy & Roadmap
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Planejamento estratégico para adoção, modernização e governança em ambientes cloud e multicloud.
        </p>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed text-lg">
        A adoção de cloud vai muito além da migração de workloads. O serviço de
        <strong> Cloud Strategy & Roadmap</strong> ajuda organizações a definirem uma
        estratégia clara, segura e escalável, alinhada aos objetivos de negócio,
        compliance e eficiência operacional.
      </p>

      {/* ABORDAGEM */}
      <div className="bg-[#F5F7FB] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
        <p className="text-gray-700 leading-relaxed">
          Avaliamos o cenário atual da empresa, maturidade cloud, riscos, custos e
          necessidades técnicas. A partir disso, construímos um roadmap claro,
          priorizando segurança, performance e governança desde o início.
        </p>
      </div>

      {/* ENTREGÁVEIS / BENEFÍCIOS / INDICADO PARA */}
      <div className="grid md:grid-cols-3 gap-6">
        <ServiceBox
          title="Entregáveis"
          items={[
            "Assessment de maturidade cloud",
            "Roadmap técnico e estratégico",
            "Modelo de governança e segurança",
            "Arquitetura alvo multicloud",
            "Plano de evolução contínua",
          ]}
        />

        <ServiceBox
          title="Benefícios"
          items={[
            "Redução de riscos na adoção cloud",
            "Decisões técnicas orientadas ao negócio",
            "Governança desde o primeiro dia",
            "Escalabilidade planejada",
            "Otimização de custos",
          ]}
        />

        <ServiceBox
          title="Indicado Para"
          items={[
            "Empresas iniciando jornada cloud",
            "Ambientes sem governança",
            "Cenários multicloud complexos",
            "Organizações em crescimento",
          ]}
        />
      </div>

      {/* CTA */}
      <div>
        <button className="btn-glow px-6 py-3">
          Falar com um Especialista
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
