export default function DataProtectionEncryption() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-24 space-y-16 text-[#001B3A]">

      {/* HERO */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#401AB2]">
          Data Protection & Encryption-as-a-Service
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Proteção avançada de dados com criptografia, gestão de chaves e compliance contínuo.
        </p>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Dados são um dos ativos mais valiosos das organizações modernas. O serviço de
        <strong> Data Protection & Encryption-as-a-Service</strong> garante a
        confidencialidade, integridade e disponibilidade das informações, protegendo
        dados sensíveis em repouso, em trânsito e em uso, com total aderência às normas
        regulatórias.
      </p>

      {/* ABORDAGEM */}
      <div className="bg-[#F5F7FB] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
        <p className="text-gray-700 leading-relaxed">
          Implementamos estratégias de criptografia robustas, gestão centralizada de
          chaves (KMS), políticas de acesso seguro e mecanismos de prevenção contra
          vazamento de dados (DLP), garantindo proteção contínua em ambientes cloud e
          multicloud.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        <ServiceBox
          title="Entregáveis"
          items={[
            "Criptografia de dados em repouso e em trânsito",
            "Implementação de KMS e rotação de chaves",
            "Políticas de proteção de dados sensíveis",
            "Integração com serviços cloud nativos",
            "Relatórios de compliance e auditoria",
          ]}
        />

        <ServiceBox
          title="Benefícios"
          items={[
            "Proteção contra vazamento de dados",
            "Atendimento a requisitos regulatórios",
            "Redução de riscos operacionais",
            "Maior confiança de clientes e parceiros",
            "Governança centralizada de dados",
          ]}
        />

        <ServiceBox
          title="Indicado Para"
          items={[
            "Ambientes com dados sensíveis",
            "Empresas reguladas (LGPD, ISO, SOC)",
            "Organizações multicloud",
            "Negócios orientados a dados",
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
