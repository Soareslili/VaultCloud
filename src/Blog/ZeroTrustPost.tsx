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
            Entenda como o modelo Zero Trust fortalece a defesa cibernética,
            protege dados sensíveis e garante compliance em ambientes cloud e multicloud.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-5xl mx-auto px-4 mt-16 mb-20 space-y-12">

        {/* INTRO */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#401AB2]">
          Zero Trust: segurança alinhada à transformação digital
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          A evolução da computação em nuvem, a adoção do trabalho remoto e o crescimento
          de ambientes híbridos e multicloud transformaram completamente a forma como
          as organizações operam — e também como precisam se proteger.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          Nesse novo cenário, confiar apenas no perímetro da rede deixou de ser eficaz.
          O modelo <strong>Zero Trust</strong> surge como resposta a essa realidade,
          propondo uma abordagem mais rigorosa, dinâmica e alinhada às exigências modernas
          de segurança e compliance.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-[#001B3A] my-6">
          “Nunca confie. Sempre verifique.”
        </blockquote>

        {/* SEGURANÇA TRADICIONAL */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          O fim da confiança implícita
        </h2>

        <p className="text-gray-700 leading-relaxed">
          O modelo tradicional de segurança foi construído com base na ideia de um
          perímetro fixo: tudo o que estivesse dentro da rede corporativa era considerado seguro.
          Com aplicações na nuvem, usuários remotos e APIs expostas, esse conceito se tornou obsoleto.
        </p>

        <ul className="text-gray-700 space-y-2 list-inside mt-4">
          <li>🚫 Confiança excessiva em redes internas</li>
          <li>🌍 Falta de visibilidade sobre acessos</li>
          <li>🔓 Exposição de dados sensíveis</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-4">
          O Zero Trust elimina essa confiança automática e passa a validar cada acesso,
          independentemente da localização do usuário ou recurso.
        </p>

        {/* COMO FUNCIONA */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Como o Zero Trust funciona na prática
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Na prática, o Zero Trust combina identidade, contexto, políticas e automação
          para garantir que apenas acessos legítimos sejam permitidos.
        </p>

        <ul className="text-gray-700 space-y-2 list-inside mt-4">
          <li>🔐 Autenticação multifator (MFA)</li>
          <li>📱 Avaliação contínua do dispositivo</li>
          <li>🧠 Análise comportamental e de risco</li>
          <li>⏱ Acessos com tempo limitado</li>
          <li>🚨 Revogação automática em caso de anomalias</li>
        </ul>

        {/* PILARES */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Pilares fundamentais do Zero Trust
        </h2>

        <ul className="text-gray-700 space-y-2 list-inside">
          <li>🔑 Verificação contínua de identidade</li>
          <li>📍 Princípio do menor privilégio</li>
          <li>🧩 Microsegmentação de redes</li>
          <li>📊 Monitoramento e auditoria constantes</li>
          <li>⚙ Políticas automatizadas (Policies as Code)</li>
        </ul>

        {/* MULTICLOUD */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Zero Trust em ambientes multicloud
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Em arquiteturas multicloud, dados e aplicações transitam entre diferentes provedores.
          O Zero Trust atua como uma camada unificadora de governança, garantindo consistência
          nas políticas de acesso e segurança.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Essa abordagem aumenta a visibilidade, reduz riscos operacionais e fortalece a
          postura de segurança em ambientes distribuídos.
        </p>

        {/* COMPLIANCE */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Zero Trust como aliado do compliance
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Regulamentações como LGPD, ISO 27001, SOC 2 e NIST exigem controle rigoroso
          de acessos, rastreabilidade e proteção de dados.
        </p>

        <p className="text-gray-700 leading-relaxed">
          O Zero Trust facilita a conformidade ao fornecer registros auditáveis,
          controle granular de permissões e monitoramento contínuo.
        </p>

        {/* BENEFÍCIOS */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Benefícios para as organizações
        </h2>

        <ul className="text-gray-700 space-y-2 list-inside">
          <li>✅ Redução significativa de ataques cibernéticos</li>
          <li>✅ Proteção avançada contra credenciais comprometidas</li>
          <li>✅ Maior controle sobre acessos privilegiados</li>
          <li>✅ Melhor experiência para usuários legítimos</li>
          <li>✅ Segurança alinhada à estratégia do negócio</li>
        </ul>

        {/* CONCLUSÃO */}
        <h2 className="text-2xl font-semibold text-[#001B3A]">
          Conclusão
        </h2>

        <p className="text-gray-700 leading-relaxed">
          O Zero Trust não é apenas uma tecnologia, mas uma mudança estratégica na
          forma como a segurança é pensada e aplicada.
        </p>

        <p className="text-gray-700 leading-relaxed font-medium">
          Em um cenário onde ameaças são constantes e o perímetro deixou de existir,
          Zero Trust se consolida como o alicerce da segurança moderna.
        </p>
      </section>

      <RelatedPosts currentSlug="zero-trust" />
    </>
  );
}
