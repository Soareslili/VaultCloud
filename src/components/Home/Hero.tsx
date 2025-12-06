import { useEffect, useRef, useState } from "react";
import BgImg from "../../assets/Hero.png";
import dashbordImg from "../../assets/dashboard.png";
import ReuniaoImg from "../../assets/reuniao-corporativa.png";
import Fingerprint from "../../assets/fingerprint.png";
import Notebook from "../../assets/notebook.png";

import { Link } from "react-router-dom";


import { Lock } from "lucide-react";
import CertificationsLoop from "./CertificationsLoop";

export default function Hero() {
  return (
    <>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-start text-left text-white px-6 md:px-16 overflow-hidden"
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BgImg})`,
            filter: "brightness(0.7) contrast(1.1) saturate(1.2)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B23]/95 via-[#001B3A]/80 to-transparent"></div>
        </div>


        <div className="font-Inter relative z-10 max-w-2xl mt-24 md:mt-20 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#112240] to-[#0A192F] border border-cyan-400/50 text-cyan-300 px-4 py-2 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.3)] backdrop-blur-md">
            <Lock className="w-4 h-4 text-cyan-300" />
            <span className="text-sm font-semibold">
              Especialistas em Segurança Cloud
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tight"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1300"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(80,180,255,0.5)]">
              Protegendo o futuro
            </span>
            <br />
            <span className="text-white drop-shadow-lg">da sua nuvem.</span>
          </h1>

          <p
            className="text-lg md:text-xl text-gray-300 mt-6"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1700"
          >
            Consultoria especializada em segurança, automação e governança
            multicloud.
          </p>
        </div>
      </section>


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
              link: "/cloud-risk",
            },
            {
              image: Fingerprint,
              title: "VaultCloud PAM",
              desc: "Proteja acessos privilegiados com soluções PAM integradas a CI/CD.",
              link: "/vaultcloud-pam",
            },
            {
              image: Notebook,
              title: "DevSecPipeline",
              desc: "Segurança contínua no pipeline DevOps, automatizando validações IaC.",
              link: "/devsec-pipeline",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 300}
              data-aos-duration="1200"
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#001B3A] mb-3">
                  {s.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>

                {/* BOTÃO SAIBA MAIS */}
                <Link
                  to={s.link}
                  className="inline-block mt-2 text-blue-600 font-semibold hover:underline"
                >
                  Saiba mais →
                </Link>
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


      <StatsSection />


      <section className="py-24 bg-[#0B1F3A] text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Por que escolher a VaultCloud Experts?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            A VaultCloud combina experiência prática com inovação contínua.
            Atuamos em todos os pilares da segurança em nuvem: prevenção,
            detecção e resposta.
          </p>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto ml-0 md:ml-12">
            <ul className="space-y-8 text-gray-300">
              <li>✅ Especialistas certificados em AWS, Azure e GCP</li>
              <li>✅ Governança e automação personalizadas</li>
            </ul>
            <ul className="space-y-8 text-gray-300">
              <li>✅ Conformidade com NIST, ISO27001 e LGPD</li>
              <li>✅ Monitoramento e resposta 24/7</li>
            </ul>
          </div>
        </div>
      </section>



      <section
        className="relative py-24 text-center text-white"
        style={{
          backgroundImage: `url(${ReuniaoImg})`,
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
            Fale com a VaultCloud Experts e descubra como fortalecer sua
            infraestrutura em nuvem.
          </p>

        </div>
      </section>


      <CertificationsLoop />
    </>
  );
}


function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} className="relative py-20 text-center text-white">
      <div className="absolute inset-0 bg-[#001B3A]/90 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <Stat value={8} suffix="+" label="anos de experiência em segurança cloud" visible={visible} />
        <Stat value={30} suffix="+" label="clientes atendidos no Brasil e exterior" visible={visible} />
        <Stat value={100} suffix="%" label="foco em governança e automação" visible={visible} />
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
  visible,
}: {
  value: number;
  suffix?: string;
  label: string;
  visible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(timer);
        setCount(value);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div className="transition-transform duration-700 hover:-translate-y-1">
      <h3 className="text-4xl font-bold text-cyan-400 mb-2">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-300 font-medium">{label}</p>
    </div>
  );
}
