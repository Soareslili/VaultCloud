



export default function IncidentResponseForensics() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 py-24 space-y-16 text-[#001B3A]">

      {/* HERO */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#401AB2]">
          Incident Response & Forensics
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Resposta rápida a incidentes de segurança com análise forense detalhada,
          mitigação de impactos e suporte completo à tomada de decisão.
        </p>
      </div>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Incidentes de segurança exigem ação imediata, precisão técnica e documentação
        adequada. O serviço de <strong>Incident Response & Forensics</strong> atua desde
        a contenção do ataque até a análise detalhada das causas, garantindo recuperação
        segura e aprendizado contínuo.
      </p>

      {/* ABORDAGEM */}
      <div className="bg-[#F5F7FB] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
        <p className="text-gray-700 leading-relaxed">
          Atuamos em todas as fases do incidente: identificação, contenção, erradicação,
          recuperação e análise pós-incidente. Utilizamos técnicas forenses avançadas,
          preservando evidências e fornecendo relatórios técnicos e executivos.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        <ServiceBox
          title="Entregáveis"
          items={[
            "Análise e contenção imediata do incidente",
            "Coleta e preservação de evidências",
            "Análise forense de logs e sistemas",
            "Relatório técnico detalhado",
            "Relatório executivo com recomendações",
          ]}
        />

        <ServiceBox
          title="Benefícios"
          items={[
            "Resposta rápida e coordenada",
            "Redução do impacto operacional",
            "Preservação de evidências legais",
            "Aprendizado para prevenção futura",
            "Maior confiança de clientes e parceiros",
          ]}
        />

        <ServiceBox
          title="Indicado Para"
          items={[
            "Empresas vítimas de incidentes",
            "Ambientes regulados",
            "Organizações com dados sensíveis",
            "Cenários que exigem análise forense",
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
