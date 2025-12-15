import { Link } from "react-router-dom";
import { services } from "../data/servicesData";

export default function Services() {
  return (
    <main className="text-[#001B3A]">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-b from-[#0A0B23] to-[#001B3A] text-white text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl font-extrabold mt-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Soluções que protegem o futuro da sua nuvem
          </h1>
          <p className="text-gray-300 text-lg">
            Segurança, automação e governança multicloud para empresas que exigem excelência.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => {
              const Icon = service.icon;

              const Card = (
                <div
                  className={`group bg-white rounded-xl shadow-md border border-gray-200 p-8
  transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
  ${!service.hasPage && "opacity-60 cursor-not-allowed"}`}
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg
      bg-gradient-to-br from-cyan-400/20 to-blue-500/20">
                      <Icon className="w-6 h-6 text-cyan-600" />
                    </div>

                    <h3 className="text-lg font-semibold text-[#001B3A] group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* BOTÃO */}
                  {service.hasPage ? (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:underline">
                      Saiba mais →
                    </span>
                  ) : (
                    <span className="inline-block text-xs font-semibold text-gray-400">
                      Em breve
                    </span>
                  )}
                </div>

              );

              return service.hasPage ? (
                <Link key={service.slug} to={`/services/${service.slug}`}>
                  {Card}
                </Link>
              ) : (
                <div key={service.slug}>{Card}</div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
