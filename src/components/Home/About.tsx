

export default function About() {
  return (
    <section className="pt-28 pb-24 mt-20 px-6 max-w-6xl mx-auto text-center md:text-left">
   
      <h1 className="text-4xl font-bold text-primary mb-6">
        Sobre a VaultCloud Experts
      </h1>

    
      <p className="text-gray-700 leading-relaxed text-lg mb-8">
        A <strong>VaultCloud Experts</strong> é uma consultoria especializada em{" "}
        <strong>segurança da informação, automação e governança multicloud</strong>.
        Nossa missão é proteger o futuro digital das organizações, integrando tecnologia
        de ponta, estratégia e conformidade em cada projeto.
      </p>

      <p className="text-gray-700 leading-relaxed text-lg mb-12">
        Reunimos um time de <strong>profissionais certificados em AWS, Azure e Google Cloud</strong>,
        com ampla experiência em ambientes corporativos complexos. Nossa abordagem une
        <strong> segurança, eficiência e inovação</strong>, entregando soluções que garantem
        visibilidade total, redução de riscos e automação inteligente para operações em nuvem híbrida e multicloud.
      </p>

     
      <div className="bg-[#F5F7FB] rounded-xl p-8 mb-12 border border-gray-100">
        <h2 className="text-2xl font-semibold text-primary mb-4">Nossa História</h2>
        <p className="text-gray-700 leading-relaxed">
          A VaultCloud Experts surgiu da visão de transformar a maneira como empresas lidam
          com segurança digital e governança na nuvem. Desde o início, buscamos unir{" "}
          <strong>performance, automação e proteção de dados</strong> em um único ecossistema.
          Nossa trajetória é marcada por projetos de alto impacto em <strong>Cloud Security, Zero Trust,
          DevSecOps</strong> e <strong>Governança de Dados</strong>, atendendo organizações que buscam
          excelência operacional e compliance em seus ambientes de TI.
        </p>
      </div>

    
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all">
          <h3 className="font-bold text-secondary mb-2">Missão</h3>
          <p className="text-gray-600">
            Proteger o futuro digital das empresas por meio de soluções seguras e automatizadas,
            garantindo integridade, conformidade e agilidade em ambientes de nuvem.
          </p>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all">
          <h3 className="font-bold text-secondary mb-2">Visão</h3>
          <p className="text-gray-600">
            Ser reconhecida como a principal referência em <strong>segurança multicloud</strong> e 
            <strong> inovação tecnológica</strong> na América Latina, impulsionando negócios a operarem com confiança e escalabilidade.
          </p>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all">
          <h3 className="font-bold text-secondary mb-2">Valores</h3>
          <p className="text-gray-600">
            Ética, transparência, excelência técnica e inovação contínua. 
            Cada parceria é construída com comprometimento, confiança e propósito.
          </p>
        </div>
      </div>

    
      <div>
        <h2 className="text-2xl font-semibold text-primary mb-6">
          Nossos Diferenciais
        </h2>
        <ul className="text-gray-700 space-y-2 list-disc list-inside">
          <li>✅ Especialistas certificados em AWS, Azure e Google Cloud</li>
          <li>✅ Expertise em Zero Trust, DevSecOps, Compliance (LGPD, ISO 27001 e NIST)</li>
          <li>✅ Monitoramento e resposta a incidentes 24/7</li>
          <li>✅ Implementações seguras com Terraform, Ansible, SIEM e SOAR</li>
          <li>✅ Consultoria estratégica com foco em resultados e redução de riscos</li>
          <li>✅ Workshops e capacitação para equipes corporativas</li>
        </ul>
      </div>
    </section>
  );
}
