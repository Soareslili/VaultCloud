export default function SensitiveDataDiscovery() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-24 space-y-16 text-[#001B3A]">

      {/* HERO */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#401AB2]">
          Sensitive Data Discovery & Remediation
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Descubra, classifique e proteja dados sensíveis automaticamente em ambientes cloud e multicloud.
        </p>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Dados sensíveis como <strong>PII, PHI e informações reguladas</strong> estão
        espalhados por ambientes cloud, bancos de dados, storage e aplicações.
        Este serviço identifica automaticamente esses dados e aplica ações de
        remediação para reduzir riscos e garantir conformidade.
      </p>

      {/* ABORDAGEM */}
      <div className="bg-[#F5F7FB] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
        <p className="text-gray-700 leading-relaxed">
          Utilizamos ferramentas avançadas de discovery, classificação e
          monitoramento contínuo para localizar dados sensíveis, avaliar riscos
          e aplicar controles técnicos e organizacionais alinhados a LGPD,
          ISO 27001 e NIST.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        <ServiceBox
          title="Entregáveis"
          items={[
            "Mapeamento de dados sensíveis (PII, PHI)",
            "Classificação automática de dados",
            "Relatórios de risco e exposição",
            "Planos de remediação",
            "Dashboards de visibilidade contínua",
          ]}
        />

        <ServiceBox
          title="Benefícios"
          items={[
            "Redução de riscos de vazamento",
            "Conformidade com LGPD e normas globais",
            "Visibilidade total dos dados",
            "Automação de controles",
            "Confiança para auditorias",
          ]}
        />

        <ServiceBox
          title="Indicado Para"
          items={[
            "Empresas com dados regulados",
            "Ambientes cloud e multicloud",
            "Organizações em auditoria",
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
