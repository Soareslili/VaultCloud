import { Link } from "react-router-dom";


import HeroImg from "../assets/hero-blog.png";
import CloudSecurity from "../assets/blog-cloud.png";
import DataAI from "../assets/blog-ai.png";
import Governance from "../assets/blog-governance.png";
import Innovation from "../assets/blog-innovation.png";
import Team from "../assets/blog-team.png";
import Cyber from "../assets/blog-cyber.png";


const posts = [
  {
    image: CloudSecurity,
    title: "Zero Trust: o novo padrão de segurança em nuvem",
    desc: "Entenda como o modelo Zero Trust fortalece a defesa cibernética e garante compliance em ambientes multicloud.",
    link: "/blog/zero-trust"
  },
  {
    image: DataAI,
    title: "IA e automação: o futuro da segurança digital",
    desc: "Descubra como a inteligência artificial está transformando o monitoramento e resposta a incidentes.",
    link: "/blog/ia-automacao"
  },
  {
    image: Governance,
    title: "Governança Cloud: pilares para uma gestão eficiente",
    desc: "A importância da governança e boas práticas na sustentação de infraestruturas seguras e escaláveis.",
    link: "/blog/governanca-cloud"
  },
  {
    image: Innovation,
    title: "Inovação e competitividade com CloudOps",
    desc: "Veja como empresas estão modernizando seus processos com automação e FinOps inteligentes.",
    link: "/blog/cloudops"
  },
  {
    image: Team,
    title: "O papel da cultura DevSecOps",
    desc: "Integração de segurança desde o início do ciclo de desenvolvimento para prevenir vulnerabilidades.",
    link: "/blog/devsecops"
  },
  {
    image: Cyber,
    title: "Ciberataques: os hackers estão preparados. E você?",
    desc: "A importância vital da cibersegurança em um mundo cada vez mais digital e conectado.",
    link: "/blog/ciberataques"
  },
];

export default function Blog() {
  return (
    <>
    
      <section
        className="relative min-h-[75vh] flex items-center justify-center text-center text-white px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#001B3A]/80 to-black/90"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Insights que impulsionam inovação e segurança
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Tendências, cases e novidades sobre cloud, segurança e automação — produzidas por especialistas VaultCloud Experts.
          </p>
        </div>
      </section>

     
      <section className="py-24 bg-[#F5F7FB] text-[#001B3A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-12">
            Últimos Artigos e Insights
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((p, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 200}
                data-aos-duration="1200"

              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[#001B3A] group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {p.desc}
                  </p>

                    <Link
                  to={p.link}
                  className="inline-block mt-2 text-blue-600 font-semibold hover:underline"
                >
                  Saiba mais →
                </Link>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-[#001B3A] text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para proteger e evoluir sua nuvem?
        </h2>
        <p className="text-gray-300 mb-8">
          Fale com nossos especialistas e descubra como a VaultCloud pode fortalecer sua infraestrutura e acelerar sua inovação.
        </p>
       
      </section>
    </>
  );
}
