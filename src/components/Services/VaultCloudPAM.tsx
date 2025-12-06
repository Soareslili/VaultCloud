import Fingerprint from "../../assets/fingerprint.png";



export default function VaultCloudPAM() {
    return (
        <>

            <section className="relative min-h-[65vh] flex items-center justify-center text-center text-white px-6 overflow-hidden"
                style={{
                    backgroundImage: `url(${Fingerprint})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >

                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#001B3A]/80 to-black/90"></div>

                <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        VaultCloud PAM
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mt-4">
                        Controle, audite e proteja acessos privilegiados com uma solução baseada em Zero Trust,
                        eliminando riscos de credenciais expostas, fraudes internas e ataques direcionados.
                    </p>
                </div>

            </section>

            <section className="max-w-6xl mx-auto px-4 mt-16 mb-20 space-y-10">
                <div>
                    <h1 className="text-3xl font-extrabold mb-14 text-[#401AB2] mb-4"> Gestão de Acessos Privilegiados com Segurança e Governança</h1>
                    <p className="text-gray-700 leading-relaxed">
                        O <strong>VaultCloud PAM</strong> foi desenvolvido para garantir controle, proteção e auditoria de acessos
                        privilegiados em ambientes cloud, DevOps e infraestrutura corporativa. Nossa solução elimina riscos de
                        credenciais expostas, acessos indevidos e ataques internos ou externos que exploram privilégios de usuários.
                        <br /><br />
                        Com automação, cofre de segredos, acessos <strong>Just-in-Time</strong> e gravação de sessões, implementamos
                        uma governança de acessos robusta, alinhada às normas de compliance e ao modelo Zero Trust.
                    </p>
                </div>

                <div className="bg-[#F5F8FD] p-6 rounded-lg">
                    <h2 className="font-semibold text-lg text-[#001B3A] mb-2">Nossa Solução</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Implementamos uma solução completa de PAM que protege credenciais sensíveis, administra acessos elevados,
                        audita atividades críticas e realiza integrações com pipelines de CI/CD, garantindo controle total sobre
                        quem acessa, quando acessa e por qual motivo.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all">
                        <h3 className="font-semibold mb-2 text-[#001B3A]">Entregáveis</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            ✔ Cofre seguro de credenciais <br />
                            ✔ Acesso Just-in-Time e expiração automática <br />
                            ✔ Gravação e auditoria de sessões <br />
                            ✔ MFA integrado <br />
                            ✔ Relatórios e trilhas de auditoria
                        </p>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all">
                        <h3 className="font-semibold mb-2 text-[#001B3A]">Benefícios</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            ✔ Fim do compartilhamento de senhas <br />
                            ✔ Redução de riscos internos e externos <br />
                            ✔ Compliance com LGPD, ISO e SOC2 <br />
                            ✔ Monitoramento e governança <br />
                            ✔ Zero Trust aplicado
                        </p>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all">
                        <h3 className="font-semibold mb-2 text-[#001B3A]">Indicado Para</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Organizações com equipes DevOps,<br />
                            terceirizados com acesso,<br />
                            ambientes críticos de infraestrutura<br />
                            e empresas em auditoria.
                        </p>
                    </div>

                </div>

                <div>
                    <h2 className="text-xl font-semibold text-[#401AB2] mb-2">Diferenciais da Nossa Abordagem</h2>
                    <ul className="text-gray-700 space-y-1">
                        <li>✅ Zero Trust aplicado na prática</li>
                        <li>✅ Integração com CI/CD e DevOps</li>
                        <li>✅ Sessões gravadas e rastreáveis</li>
                        <li>✅ Redução de riscos internos e externos</li>
                        <li>✅ Gestão completa de acessos privilegiados</li>
                    </ul>
                </div>



            </section>
        </>

    )
} 