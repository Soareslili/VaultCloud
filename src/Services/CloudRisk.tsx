import dashbordImg from "../assets/dashboard.png";

export default function CloudRisk() {
    return (
        <>
            {/* HERO SECTION */}
            <section
                className="relative min-h-[65vh] flex items-center justify-center text-center text-white px-6 overflow-hidden"
                style={{
                    backgroundImage: `url(${dashbordImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#001B3A]/80 to-black/90"></div>

                <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Cloud Risk & Compliance
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mt-4">
                        Garanta a segurança, conformidade e governança dos seus ambientes em nuvem com nossa solução especializada.
                    </p>
                </div>
            </section>


            {/* CONTEÚDO PRINCIPAL */}
            <section className="max-w-6xl mx-auto px-4 mt-16 mb-20 space-y-10">

                {/* PARÁGRAFO PRINCIPAL */}
                <div>

                    <h2 className="text-4xl font-extrabold mb-14 text-[#401AB2] leading-snug">
                        Governança, segurança e conformidade: como o Cloud Risk & Compliance protege
                        o seu negócio em ambientes multicloud
                    </h2>

                    <p className="text-gray-800 leading-relaxed">
                        O serviço de <strong>Cloud Risk & Compliance</strong> foi desenvolvido para auxiliar empresas na jornada
                        de conformidade, governança e proteção de dados em ambientes de nuvem. Atuamos alinhados aos principais
                        frameworks do mercado, como <strong>NIST, ISO 27001, SOC2, CIS, PCI-DSS e LGPD</strong>, garantindo
                        visibilidade total, análise de riscos e orientações estratégicas para tomada de decisão.
                        <br /><br />
                        Nosso objetivo é proporcionar <strong>segurança, agilidade e controle</strong>, reduzindo ataques,
                        fortalecendo a governança e preparando sua operação para auditorias, certificações e exigências legais.
                    </p>
                </div>

                {/* BLOCO SOLUÇÃO */}
                <div className="bg-[#F5F8FD] p-6 rounded-lg">
                    <h2 className="font-bold text-2xl  text-[#001B3A] mb-2">Nossa Solução</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Realizamos diagnóstico completo de segurança e conformidade em nuvem, identificando riscos, lacunas,
                        controles necessários e processos que impactam segurança da informação. Entregamos documentação,
                        recomendações estratégicas, priorização de riscos, políticas e suporte para implementação de normas
                        corporativas.
                    </p>
                </div>

                {/* GRID DE CARDS */}
                <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all">
                        <h3 className="font-semibold mb-2 text-[#001B3A]">Entregáveis</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            ✔ Avaliação de riscos e superfícies de ataque <br />
                            ✔ Gap Analysis de compliance <br />
                            ✔ Políticas e normas de segurança <br />
                            ✔ Plano estratégico de remediação <br />
                            ✔ Relatórios executivos
                        </p>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all">
                        <h3 className="font-semibold mb-2 text-[#001B3A]">Benefícios</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                           ✔ Menos riscos e incidentes<br />
                           ✔ Redução de custos e multas<br />
                           ✔ Auditoria e governança simplificada<br />
                           ✔ Confiabilidade do cliente e mercado<br />
                           ✔ Segurança alinhada ao negócio
                        </p>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all">
                        <h3 className="font-semibold mb-2 text-[#001B3A]">Indicado Para</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Empresas que estão migrando para nuvem,<br />
                            passando por auditorias,<br />
                            buscando certificações ou escalando ambientes<br />
                            sem perder segurança.
                        </p>
                    </div>

                </div>

                {/* LISTA DE DIFERENCIAIS */}
                <div>
                    <h2 className="text-xl font-bold text-[#401AB2] mb-2">Diferenciais da Nossa Abordagem</h2>
                    <ul className="text-gray-700 space-y-1">
                        <li>✅ Metodologia baseada em NIST e ISO</li>
                        <li>✅ Profissionais certificados em AWS, Azure e Google Cloud</li>
                        <li>✅ Entregáveis claros e documentação completa</li>
                        <li>✅ Suporte estratégico e técnico</li>
                        <li>✅ Foco em visibilidade, redução de risco e compliance real</li>
                    </ul>
                </div>

            
            </section>
        </>
    );
}
