

export default function WorkshopsTreinamentos() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-24 space-y-16 text-[#001B3A]">

      {/* HERO */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#401AB2]">
          Workshops e Treinamentos
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Capacitação prática e estratégica em Cloud Security, DevSecOps, Zero Trust
          e resposta a incidentes.
        </p>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed text-lg">
        A segurança em nuvem depende não apenas de tecnologia, mas principalmente de
        pessoas preparadas. O serviço de <strong>Workshops e Treinamentos</strong> da
        VaultCloud capacita equipes técnicas e executivas com conhecimento prático,
        alinhado às melhores práticas e frameworks globais.
      </p>

      {/* ABORDAGEM */}
      <div className="bg-[#F5F7FB] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
        <p className="text-gray-700 leading-relaxed">
          Os treinamentos são personalizados de acordo com o nível de maturidade da
          organização. Utilizamos exemplos reais, laboratórios práticos e estudos de
          caso para garantir aprendizado aplicável ao dia a dia.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        <ServiceBox
          title="Conteúdos"
          items={[
            "Cloud Security Fundamentals",
            "Zero Trust Architecture",
            "DevSecOps e segurança no pipeline",
            "Gestão de identidade e acessos",
            "Resposta a incidentes e forense",
          ]}
        />

        <ServiceBox
          title="Benefícios"
          items={[
            "Equipes mais preparadas",
            "Redução de falhas humanas",
            "Adoção segura de cloud",
            "Cultura de segurança contínua",
            "Maior alinhamento entre times",
          ]}
        />

        <ServiceBox
          title="Indicado Para"
          items={[
            "Times de TI e Segurança",
            "Equipes DevOps e Cloud",
            "Gestores e lideranças",
            "Empresas em transformação digital",
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
