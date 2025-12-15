



export default function VaultCloudPAMService() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-24 space-y-16 text-[#001B3A]">

      {/* HERO */}
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#401AB2]">
          VaultCloud PAM
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Controle, proteção e auditoria de acessos privilegiados em ambientes cloud,
          DevOps e infraestrutura crítica.
        </p>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Contas privilegiadas são um dos principais vetores de ataques cibernéticos.
        O <strong>VaultCloud PAM</strong> foi projetado para eliminar riscos associados
        ao uso indevido de credenciais, acessos excessivos e falta de rastreabilidade,
        aplicando o modelo <strong>Zero Trust</strong> na prática.
      </p>

      {/* ABORDAGEM */}
      <div className="bg-[#F5F7FB] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
        <p className="text-gray-700 leading-relaxed">
          Implementamos uma solução completa de Privileged Access Management (PAM),
          centralizando credenciais sensíveis, aplicando acesso Just-in-Time,
          autenticação forte e auditoria contínua de sessões.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        <ServiceBox
          title="Entregáveis"
          items={[
            "Cofre seguro de credenciais",
            "Acesso Just-in-Time (JIT)",
            "Gravação e auditoria de sessões",
            "Integração com CI/CD e DevOps",
            "Relatórios e trilhas de auditoria",
          ]}
        />

        <ServiceBox
          title="Benefícios"
          items={[
            "Eliminação de senhas compartilhadas",
            "Redução de riscos internos e externos",
            "Visibilidade total de acessos",
            "Compliance com LGPD, ISO e SOC 2",
            "Modelo Zero Trust aplicado",
          ]}
        />

        <ServiceBox
          title="Indicado Para"
          items={[
            "Ambientes críticos e regulados",
            "Equipes DevOps e SRE",
            "Acessos de terceiros",
            "Empresas em auditoria",
          ]}
        />
      </div>

      {/* CTA */}
      <div>
        <button className="btn-glow px-6 py-3">
          Solicitar Avaliação PAM
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
