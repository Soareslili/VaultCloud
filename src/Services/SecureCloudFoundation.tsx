export default function SecureCloudFoundation() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-24 space-y-16 text-[#001B3A]">

      {/* HERO */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#401AB2]">
          Secure Cloud Foundation & Landing Zone
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Base segura em nuvem com identidade, rede e políticas automatizadas desde o primeiro dia.
        </p>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Uma <strong>Landing Zone segura</strong> é o alicerce de qualquer ambiente cloud moderno.
        Este serviço garante que sua nuvem nasça com padrões sólidos de segurança,
        governança, identidade e rede, evitando retrabalho, riscos e custos futuros.
      </p>

      {/* ABORDAGEM */}
      <div className="bg-[#F5F7FB] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
        <p className="text-gray-700 leading-relaxed">
          Projetamos e implementamos uma fundação cloud segura baseada em boas práticas
          de mercado, utilizando Infrastructure as Code (IaC) para garantir padronização,
          escalabilidade e controle total do ambiente desde o início.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        <ServiceBox
          title="Entregáveis"
          items={[
            "Landing Zone segura (AWS, Azure ou GCP)",
            "Arquitetura de identidade e acesso (IAM)",
            "Rede segmentada e segura",
            "Políticas de segurança automatizadas",
            "Infraestrutura como Código (Terraform)",
          ]}
        />

        <ServiceBox
          title="Benefícios"
          items={[
            "Base segura e escalável",
            "Redução de erros de configuração",
            "Padronização do ambiente",
            "Acelera novos projetos cloud",
            "Compliance desde o primeiro dia",
          ]}
        />

        <ServiceBox
          title="Indicado Para"
          items={[
            "Empresas iniciando na nuvem",
            "Projetos de migração cloud",
            "Ambientes sem padrão de segurança",
            "Times que precisam escalar rapidamente",
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
