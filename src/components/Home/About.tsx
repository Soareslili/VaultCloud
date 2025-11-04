export default function About() {
  return (
    <section className="pt-28 pb-24 px-6 max-w-6xl mx-auto text-center md:text-left">
      <h1 className="text-4xl font-bold text-primary mb-6">Sobre a VaultCloud Experts</h1>
      <p className="text-gray-700 leading-relaxed text-lg">
        A VaultCloud Experts é uma consultoria especializada em segurança, automação e governança multicloud.
        Nosso time ajuda empresas a fortalecerem sua infraestrutura e atingirem excelência operacional,
        com foco em **proteção de dados, conformidade e inovação**.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-secondary mb-2">Missão</h3>
          <p className="text-gray-600">Proteger o futuro digital das empresas através da nuvem segura.</p>
        </div>
        <div>
          <h3 className="font-bold text-secondary mb-2">Visão</h3>
          <p className="text-gray-600">Ser referência em soluções de segurança e automação em nuvem.</p>
        </div>
        <div>
          <h3 className="font-bold text-secondary mb-2">Valores</h3>
          <p className="text-gray-600">Excelência, transparência, ética e inovação contínua.</p>
        </div>
      </div>
    </section>
  );
}
