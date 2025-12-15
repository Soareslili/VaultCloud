export default function BackupImmutableVaultService() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-24 space-y-16 text-[#001B3A]">

      {/* HERO */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#401AB2]">
          Backup & Immutable Vault
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Proteção de dados crítica com backups imutáveis, criptografia avançada e recuperação de desastres.
        </p>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Ataques de ransomware, falhas humanas e incidentes operacionais tornam
        essencial uma estratégia robusta de proteção de dados. O serviço de
        <strong> Backup & Immutable Vault</strong> garante que seus dados permaneçam
        protegidos, imutáveis e recuperáveis, mesmo nos cenários mais críticos.
      </p>

      {/* ABORDAGEM */}
      <div className="bg-[#F5F7FB] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
        <p className="text-gray-700 leading-relaxed">
          Implementamos soluções de backup imutável com criptografia ponta a ponta,
          controle de acesso rigoroso e políticas de retenção alinhadas às melhores
          práticas de mercado, garantindo integridade, disponibilidade e compliance.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        <ServiceBox
          title="Entregáveis"
          items={[
            "Arquitetura de backup imutável",
            "Cofre de dados protegido (Immutable Vault)",
            "Políticas de retenção e versionamento",
            "Criptografia em repouso e em trânsito",
            "Planos de Disaster Recovery (DRP)",
          ]}
        />

        <ServiceBox
          title="Benefícios"
          items={[
            "Proteção contra ransomware",
            "Recuperação rápida de dados",
            "Integridade garantida",
            "Redução de downtime",
            "Conformidade regulatória",
          ]}
        />

        <ServiceBox
          title="Indicado Para"
          items={[
            "Ambientes críticos de negócio",
            "Empresas expostas a ransomware",
            "Organizações reguladas",
            "Ambientes cloud e multicloud",
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
