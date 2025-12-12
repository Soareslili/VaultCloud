import CloudSecurity from "../assets/blog-cloud.png";
import RelatedPosts from "../Blog/RelatedPosts";



export default function ZeroTrustPost() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[55vh] flex items-center justify-center text-center text-white px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${CloudSecurity})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#001B3A]/80 to-black/90"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Zero Trust: o novo padrão de segurança em nuvem
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Entenda como o modelo Zero Trust fortalece a defesa cibernética e garante compliance em ambientes multicloud.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-5xl mx-auto px-4 mt-16 mb-20 space-y-10">

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#401AB2] mb-8">
    Zero Trust: segurança que acompanha a transformação digital
  </h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          O aumento da complexidade dos ambientes digitais, o trabalho remoto e o uso de múltiplos provedores de nuvem 
          redefiniram por completo a estratégia de segurança das organizações. Nesse cenário, o modelo <strong>Zero Trust</strong> 
          tornou-se o novo padrão para garantir proteção, governança e conformidade em escala.
          <br /><br />
          Em vez de confiar por padrão nos dispositivos e usuários dentro da rede, Zero Trust parte do princípio de:
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-[#001B3A] my-6">
          "Nunca confie. Sempre verifique."
        </blockquote>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Por que Zero Trust se tornou indispensável?</h2>
        <p className="text-gray-700 leading-relaxed">
          Ataques cibernéticos cada vez mais sofisticados exploram credenciais privilegiadas, acessos remotos e falhas de configuração. 
          O Zero Trust elimina a confiança implícita e implementa verificações contínuas, reduzindo drasticamente a superfície de ataque.
        </p>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Os pilares fundamentais do Zero Trust</h2>
        <ul className="text-gray-700 space-y-2 list-inside">
          <li>🔐 Verificação contínua de identidade e dispositivo</li>
          <li>📍 Menor privilégio — acesso mínimo necessário</li>
          <li>🧩 Microsegmentação e isolamento de recursos</li>
          <li>📊 Monitoramento constante e análise de comportamentos</li>
          <li>⚙ Policies as Code e automação inteligente</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Zero Trust e a jornada multicloud</h2>
        <p className="text-gray-700 leading-relaxed">
          Em ambientes multicloud, usuários, aplicações e dados transitam entre diferentes provedores. O Zero Trust atua como camada 
          unificadora de governança, controle e visibilidade, reforçando compliance com LGPD, ISO 27001, SOC2 e NIST.
        </p>

        <h2 className="text-2xl font-semibold text-[#001B3A]">Conclusão</h2>
        <p className="text-gray-700 leading-relaxed">
          Implementar Zero Trust não é apenas uma tendência — é uma necessidade para organizações que buscam operar com segurança, 
          eficiência e conformidade no cenário digital atual.
        </p>
      </section>

      <RelatedPosts currentSlug="zero-trust" />
    </>
  );
}
