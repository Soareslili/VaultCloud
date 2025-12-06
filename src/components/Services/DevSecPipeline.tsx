
import Notebook from "../../assets/notebook.png";

export default function DevSecPipeline() {
    return (
        <>
            <section className="relative min-h-[65vh] flex items-center justify-center text-center text-white px-6 overflow-hidden"
                style={{
                    backgroundImage: `url(${Notebook})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#001B3A]/80 to-black/90"></div>

                <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        DevSecPipeline
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mt-4">
                        Integre segurança ao pipeline DevOps com automação, validação contínua e controles
                        de conformidade sem perder velocidade nas entregas.
                    </p>
                </div>

            </section>

            <section className="max-w-6xl mx-auto px-4 mt-16 mb-14 space-y-10">

                <div>
                    <h1 className="text-3xl font-semibold text-[#401AB2] mb-4"> Segurança integrada ao ciclo de desenvolvimento</h1>
                    <p className="text-gray-700 leading-relaxed">
                        O <strong>DevSecPipeline</strong> transforma pipelines DevOps em operações seguras, automatizadas
                        e auditáveis. Inserimos segurança desde o início do ciclo de desenvolvimento com validações de código,
                        políticas como código, deteção de vulnerabilidades e prevenção de falhas antes do deploy.
                        <br /><br />
                        Segurança deixa de ser um obstáculo e passa a ser um acelerador, reduzindo incidentes, retrabalho e custos,
                        enquanto aumenta visibilidade e confiança em cada entrega.
                    </p>
                </div>

                <div className="bg-[#F5F8FD] p-6 rounded-lg">
                    <h2 className="font-semibold text-lg text-[#001B3A] mb-2">Nossa Solução</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Automatizamos scanners de vulnerabilidades, análise estática (SAST), análise dinâmica (DAST),
                        validação de infraestrutura como código, gestão de segredos e políticas de compliance diretamente no pipeline.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all">
                        <h3 className="font-semibold mb-2 text-[#001B3A]">Entregáveis</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            ✔ Scans SAST e DAST <br />
                            ✔ Policies-as-Code <br />
                            ✔ Pipeline seguro validado <br />
                            ✔ Gestão e proteção de segredos <br />
                            ✔ Auditoria e relatórios
                        </p>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all">
                        <h3 className="font-semibold mb-2 text-[#001B3A]">Benefícios</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                           ✔ Menos falhas em produção<br />
                           ✔ Redução de custos e retrabalho<br />
                           ✔ Deploys mais rápidos e seguros<br />
                           ✔ Compliance automatizado<br />
                           ✔ Segurança sem atrito com devs
                        </p>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all">
                        <h3 className="font-semibold mb-2 text-[#001B3A]">Indicado Para</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Empresas com CI/CD,<br />
                            equipes distribuídas,<br />
                            alta frequência de deploy,<br />
                            ou maturidade em DevOps.
                        </p>
                    </div>

                </div>

                <div>
                    <h2 className="text-xl font-semibold text-[#401AB2]  mb-2">Diferenciais da Nossa Abordagem</h2>
                    <ul className="text-gray-700 space-y-1">
                        <li>✅ Integração com Terraform, Kubernetes e GitOps</li>
                        <li>✅ Segurança automatizada no PR</li>
                        <li>✅ Cultura DevSecOps implementada</li>
                        <li>✅ Mais agilidade com menos riscos</li>
                        <li>✅ Observabilidade e auditoria contínua</li>
                    </ul>
                </div>

               

            </section>


        </>
    )
}