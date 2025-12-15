


export default function DRPDisasterRecovery() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-24 space-y-16 text-[#001B3A]">

      {/* HERO */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#401AB2]">
          DRP IT/OT – Disaster Recovery
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Plano de Recuperação de Desastres para ambientes críticos de TI e OT,
          garantindo continuidade operacional mesmo em cenários extremos.
        </p>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Falhas operacionais, ataques cibernéticos, desastres naturais e incidentes
        industriais podem comprometer sistemas críticos. O serviço de
        <strong> DRP IT/OT</strong> assegura que a organização esteja preparada para
        recuperar operações com rapidez, previsibilidade e segurança.
      </p>

      {/* ABORDAGEM */}
      <div className="bg-[#F5F7FB] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
        <p className="text-gray-700 leading-relaxed">
          Desenvolvemos Planos de Recuperação de Desastres baseados em análise de
          impacto ao negócio (BIA), definição de RPO e RTO, testes periódicos e
          alinhamento com normas internacionais como
          <strong> ISO 22301, NIST e IEC 62443</strong>.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        <ServiceBox
          title="Entregáveis"
          items={[
            "Análise de Impacto ao Negócio (BIA)",
            "Definição de RPO e RTO",
            "Planos de recuperação IT e OT",
            "Testes de contingência e simulações",
            "Documentação técnica e executiva",
          ]}
        />

        <ServiceBox
          title="Benefícios"
          items={[
            "Continuidade operacional garantida",
            "Redução de downtime",
            "Preparação para incidentes críticos",
            "Conformidade regulatória",
            "Confiança para stakeholders",
          ]}
        />

        <ServiceBox
          title="Indicado Para"
          items={[
            "Ambientes industriais (OT)",
            "Infraestruturas críticas",
            "Empresas reguladas",
            "Organizações que exigem alta disponibilidade",
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
