import ServiceCard from "../components/Services/ServiceCard";
import { ShieldCheck, Cloud, Lock } from "lucide-react";



export default function ServicesPage() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Security & Compliance",
      description: "Soluções robustas para conformidade e proteção em ambientes multicloud.",
    },
    {
      icon: Lock,
      title: "Privileged Access Management (PAM)",
      description: "Controle total e seguro sobre acessos privilegiados e credenciais sensíveis.",
    },
    {
      icon: ShieldCheck,
      title: "DevSecOps & Automação",
      description: "Integração de segurança contínua no pipeline DevOps e processos automatizados.",
    },
  ];

  return (
    <section className="py-24 bg-[#0A0B23] text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
