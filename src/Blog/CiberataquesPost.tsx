import Cyber from "../assets/blog-cyber.png";

export default function CiberataquesPost() {
  return (
    <>
      <section
        className="relative min-h-[55vh] flex items-center justify-center text-center text-white px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${Cyber})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#001B3A]/80 to-black/90"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Ciberataques: os hackers estão preparados. E você?
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            A importância vital da cibersegurança em um mundo cada vez mais digital e conectado.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-16 mb-20 space-y-10">

        <p className="text-gray-700 leading-relaxed text-lg">
          Cibercriminosos estão mais organizados, sofisticados e rápidos. 
          Novos ataques surgem diariamente, explorando vulnerabilidades humanas e tecnológicas.
        </p>

        <h2 className="text-2xl font-semibold text-[#001B3A]">O cenário atual de ameaças</h2>
        <p className="text-gray-700 leading-relaxed">
          Ataques de ransomware, phishing e invasões via credenciais expostas crescem exponencialmente.
        </p>

        <ul className="text-gray-700 space-y-2">
          <li>🛑 Ransomware como serviço</li>
          <li>📨 Phishing baseado em IA</li>
          <li>🔐 Vazamento de credenciais</li>
          <li>🌐 Ataques direcionados a nuvem</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Como se preparar</h2>
        <p className="text-gray-700 leading-relaxed">
          Programas de treinamento, políticas de acesso, monitoramento contínuo e Zero Trust 
          são essenciais para reduzir riscos.
        </p>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Conclusão</h2>
        <p className="text-gray-700 leading-relaxed">
          Ciberataques são uma questão de “quando”, não “se”. Preparar-se é a única forma 
          de garantir resiliência digital.
        </p>
      </section>
    </>
  );
}
