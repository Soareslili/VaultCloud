import { GradientButton } from "../components/ui/Button";



import BgImg from "../assets/Hero.png";
import dashbordImg from "../assets/dashboard.png";
import ReuniaoImg from "../assets/reuniao-corporativa.png";
import Fingerprint from '../assets/fingerprint.png'
import Notebook from '../assets/notebook.png'
import Equipe from '../assets/Equipe.png'




export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-6 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BgImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#001B3A]/90"></div>
        </div>

        <div className="font-Inter relative z-10 max-w-3xl mt-32 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,150,255,0.5)] animate-pulse-slow">
            Protegendo o futuro da sua nuvem.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mt-6">
            Consultoria especializada em segurança, automação e governança multicloud.
          </p>

          <div className="mt-10">
            <GradientButton variant="variant">Conheça nossos serviços</GradientButton>
          </div>
        </div>
      </section>



      {/* SERVIÇOS */}
      {/* 1️⃣ SEÇÃO DE CONFIANÇA / NÚMEROS */}
      <section
        className="relative py-20 text-center text-white"
        
      >
        <div className="absolute inset-0 bg-[#001B3A]/90 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-2">+8 anos</h3>
            <p className="text-gray-300 font-medium">de experiência em segurança cloud</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-2">+30 clientes</h3>
            <p className="text-gray-300 font-medium">atendidos no Brasil e exterior</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-2">100%</h3>
            <p className="text-gray-300 font-medium">foco em governança e automação</p>
          </div>
        </div>
      </section>

      {/* 2️⃣ SEÇÃO DE SERVIÇOS */}
      <section className="py-24 bg-[#F5F7FB] text-center px-6">
        <h2 className="text-4xl font-bold text-[#001B3A] mb-12">
          Nossos Principais Serviços
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              image: dashbordImg,
              title: "Cloud Risk & Compliance",
              desc: "Avaliação de riscos e conformidade baseada em NIST, ISO27001 e LGPD.",
            },
            {
              image: Fingerprint,
              title: "VaultCloud PAM",
              desc: "Proteja acessos privilegiados com soluções PAM integradas a CI/CD.",
            },
            {
              image: Notebook,
              title: "DevSecPipeline",
              desc: "Segurança contínua no pipeline DevOps, automatizando validações IaC.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img src={s.image} alt={s.title} className="w-full h-52 object-cover" />
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#001B3A] mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/services"
          className="inline-block mt-10 bg-[#001B3A] text-white px-8 py-3 rounded-md font-semibold hover:bg-cyan-600 transition"
        >
          Ver todos os serviços
        </a>
      </section>

      {/* 3️⃣ SEÇÃO POR QUE ESCOLHER A VAULTCLOUD */}
      <section className="py-24 bg-[#0B1F3A] text-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Por que escolher a VaultCloud Experts?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              A VaultCloud combina experiência prática com inovação contínua. Atuamos em
              todos os pilares da segurança em nuvem: prevenção, detecção e resposta.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>✅ Especialistas certificados em AWS, Azure e GCP</li>
              <li>✅ Governança e automação personalizadas</li>
              <li>✅ Conformidade com NIST, ISO27001 e LGPD</li>
              <li>✅ Monitoramento e resposta 24/7</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src={Equipe}
              alt="Consultoria VaultCloud"
              className=" ml-20 rounded-lg shadow-2xl w-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4️⃣ CTA FINAL */}
      <section
        className="relative py-24 text-center text-white"
        style={{
          backgroundImage:  `url(${ReuniaoImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#001B3A]/85 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proteja o futuro da sua nuvem com especialistas.
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Fale com a VaultCloud Experts e descubra como fortalecer sua infraestrutura em nuvem.
          </p>
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            className="inline-block bg-white text-[#001B3A] font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Falar com um especialista
          </a>
        </div>
      </section>

    </>
  );
}
