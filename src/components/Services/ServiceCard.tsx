import { useEffect, useRef, useState } from "react";
import Consultoria from "../../assets/consultoria.png";
import {
  Shield,
  Lock,
  Cloud,
  Cpu,
  Server,
  Network,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    title: "Cloud Strategy & Roadmap",
    desc: "Transforme sua jornada em nuvem em uma operação segura e escalável. Estratégias sob medida para adoção e governança multicloud.",
    icon: Cloud,
  },
  {
    title: "Cloud Risk Assessment & Compliance",
    desc: "Identifique riscos e alinhe sua nuvem às normas NIST, ISO27001 e LGPD, com relatórios e plano de remediação.",
    icon: Shield,
  },
  {
    title: "VaultCloud PAM",
    desc: "Controle e proteja acessos privilegiados com soluções PAM integradas a CI/CD e cofres de segredos.",
    icon: Lock,
  },
  {
    title: "Cloud-Native Detection & Response",
    desc: "Monitore ameaças em tempo real com integração SIEM e SOAR (Sentinel, Elastic, Chronicle).",
    icon: Cpu,
  },
  {
    title: "DevSecPipeline",
    desc: "Segurança contínua no pipeline DevOps com validações automatizadas e políticas IaC.",
    icon: Server,
  },
  {
    title: "Secure Cloud Foundation & Landing Zone",
    desc: "Base segura em nuvem com identidade, rede e políticas automatizadas via Terraform.",
    icon: Network,
  },
  {
    title: "Backup & Immutable Vault",
    desc: "Backup imutável e DRP com criptografia de ponta a ponta e failover programado.",
    icon: Lock,
  },
  {
    title: "Cloud Cost & Performance Optimization",
    desc: "Reduza custos e melhore performance com autoscaling, tagging e right-sizing.",
    icon: Cpu,
  },
  {
    title: "Data Protection & Encryption-as-a-Service",
    desc: "Criptografia e gestão de chaves KMS, garantindo confidencialidade e compliance.",
    icon: Shield,
  },
  {
    title: "Sensitive Data Discovery & Remediation",
    desc: "Localize dados sensíveis (PII, PHI) e crie planos automáticos de correção.",
    icon: Cloud,
  },
  {
    title: "Managed Cloud Security (SOC-as-a-Service)",
    desc: "Operação gerenciada de segurança 24/7 com alertas, dashboards e relatórios.",
    icon: Server,
  },
  {
    title: "Incident Response & Forensics",
    desc: "Resposta rápida e mitigação de incidentes com relatórios técnicos detalhados.",
    icon: Shield,
  },
  {
    title: "Workshops e Treinamentos",
    desc: "Capacite sua equipe em Cloud Security, DevSecOps, Zero Trust e Resposta a Incidentes.",
    icon: Network,
  },
];

export default function Services() {
  return (
    <main className="text-[#001B3A]">
      {/* INTRO */}
      <section className="py-24 bg-gradient-to-b from-[#0A0B23] to-[#001B3A] text-white text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6 mt-18">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Soluções que protegem o futuro da sua nuvem
          </h1>
          <p className="text-gray-300 text-lg">
            Estratégias integradas em segurança, automação e governança
            multicloud — projetadas para empresas que buscam excelência
            operacional e conformidade global.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="services" className="py-24 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
              Soluções completas em segurança, automação e governança multicloud —
              desenvolvidas por especialistas certificados.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-xl shadow-md border border-gray-200 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={i * 200}
                  data-aos-duration="1200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <Icon className="text-cyan-600 w-6 h-6 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#001B3A] group-hover:text-blue-600 transition-colors">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <a
              href="#contact"
              className="inline-block bg-[#001B3A] text-white px-10 py-3 rounded-md font-semibold hover:bg-cyan-600 transition"
            >
              Falar com um especialista
            </a>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS COM CONTAGEM */}
      <BenefitsSection />

      {/* PROCESSO */}
      <section className="py-24 bg-[#F5F7FB] px-6 text-center">
        <h2 className="text-4xl font-bold text-[#001B3A] mb-12">
          Como Trabalhamos
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-10">
          {[
            {
              step: "1",
              title: "Diagnóstico",
              desc: "Avaliamos riscos e mapeamos sua infraestrutura de nuvem.",
            },
            {
              step: "2",
              title: "Planejamento",
              desc: "Desenvolvemos estratégias seguras e personalizadas.",
            },
            {
              step: "3",
              title: "Implementação",
              desc: "Executamos com automação e monitoramento contínuo.",
            },
            {
              step: "4",
              title: "Evolução",
              desc: "Acompanhamos e aprimoramos continuamente suas operações.",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition"
              data-aos="fade-right"
              data-aos-delay={i * 300}
              data-aos-duration="1200"
            >
              <div className="text-cyan-500 text-2xl font-bold mb-3">
                {p.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 bg-[#0B1F3A] text-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Diferenciais VaultCloud Experts
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-cyan-400 w-5 h-5" />
                Especialistas certificados em AWS, Azure e GCP
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-cyan-400 w-5 h-5" />
                Governança e automação personalizadas
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-cyan-400 w-5 h-5" />
                Conformidade com NIST, ISO27001 e LGPD
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-cyan-400 w-5 h-5" />
                Monitoramento e resposta 24/7
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={Consultoria}
              alt="Consultoria em segurança cloud"
              className="rounded-lg shadow-2xl w-[550px] h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-[#001B3A] text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para proteger e evoluir sua nuvem?
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          Fale com nossos especialistas e descubra como a VaultCloud pode
          fortalecer a segurança e a eficiência da sua infraestrutura.
        </p>
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          className="inline-block bg-cyan-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-cyan-400 transition"
        >
          Falar com um especialista
        </a>
      </section>
    </main>
  );
}

/* 🔢 COMPONENTE DE BENEFÍCIOS COM CONTAGEM */
function BenefitsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => ref.current && obs.unobserve(ref.current);
  }, []);

  return (
    <section ref={ref} className="py-20 bg-[#001B3A] text-white text-center">
      <div className="max-w-6xl mx-auto space-y-10 px-6">
        <h2 className="text-3xl font-bold text-cyan-300">
          Por que empresas escolhem a VaultCloud?
        </h2>
        <div className="grid md:grid-cols-4 gap-10">
          <Benefit value={99.9} suffix="%" label="de disponibilidade garantida" visible={visible} />
          <Benefit value={50} prefix="+" label="empresas atendidas com sucesso" visible={visible} />
          <BenefitStatic label="monitoramento e resposta contínua" text="24/7" />
          <BenefitStatic label="padrões globais de segurança" text="ISO 27001" />
        </div>
      </div>
    </section>
  );
}

/* Número animado */
function Benefit({
  value,
  prefix = "",
  suffix = "",
  label,
  visible,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  visible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = 20;
    const totalSteps = duration / step;
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(timer);
        setCount(value);
      } else {
        setCount(Number(start.toFixed(1)));
      }
    }, step);

    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div>
      <h3 className="text-cyan-400 text-2xl font-bold mb-2">
        {prefix}
        {count}
        {suffix}
      </h3>
      <p className="text-gray-300">{label}</p>
    </div>
  );
}

/* Texto estático (para ISO e 24/7) */
function BenefitStatic({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <div>
      <h3 className="text-cyan-400 text-2xl font-bold mb-2">{text}</h3>
      <p className="text-gray-300">{label}</p>
    </div>
  );
}
