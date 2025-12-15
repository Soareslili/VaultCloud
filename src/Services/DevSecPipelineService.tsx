export default function DevSecPipelineService() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-24 space-y-16 text-[#001B3A]">

      {/* HERO */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#401AB2]">
          DevSecPipeline
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Segurança contínua integrada ao pipeline DevOps, desde o código até a produção.
        </p>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Segurança não pode ser uma etapa final do desenvolvimento. O serviço de
        <strong> DevSecPipeline</strong> integra práticas de segurança diretamente
        no ciclo de CI/CD, garantindo que código, infraestrutura e aplicações
        sejam validados automaticamente antes de chegar à produção.
      </p>

      {/* ABORDAGEM */}
      <div className="bg-[#F5F7FB] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
        <p className="text-gray-700 leading-relaxed">
          Implementamos controles de segurança automatizados no pipeline,
          utilizando políticas como código, scanners de vulnerabilidade,
          validações de infraestrutura (IaC) e gates de segurança,
          sem impactar a velocidade de entrega.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        <ServiceBox
          title="Entregáveis"
          items={[
            "Integração de segurança no CI/CD",
            "Scan de código (SAST, DAST, SCA)",
            "Validação de infraestrutura como código (IaC)",
            "Políticas de segurança automatizadas",
            "Relatórios de vulnerabilidades",
          ]}
        />

        <ServiceBox
          title="Benefícios"
          items={[
            "Redução de falhas em produção",
            "Correção antecipada de vulnerabilidades",
            "Maior velocidade com segurança",
            "Compliance contínuo",
            "Padronização de boas práticas",
          ]}
        />

        <ServiceBox
          title="Indicado Para"
          items={[
            "Times DevOps e DevSecOps",
            "Ambientes cloud-native",
            "Empresas com pipelines CI/CD",
            "Organizações em escala",
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

/* CARD */
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
