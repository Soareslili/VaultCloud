
import ContactHero from "../../assets/contact-hero.png"; // coloque sua imagem hero aqui
import AreaCliente from "../../assets/client-area.png"

export default function Contact() {
  return (
    <section className="bg-white text-[#001B3A]">
      {/* HERO */}
      <div
        className="relative h-[70vh] flex items-center justify-start px-6 md:px-20 text-white"
        style={{
          backgroundImage: `url(${ContactHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001B3A]/90 via-[#001B3A]/70 to-transparent"></div>
        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Fale conosco
          </h1>
          <p className="text-lg text-gray-200 max-w-md">
            Entre em contato com nossa equipe de especialistas e descubra como a{" "}
            <strong>VaultCloud Experts</strong> pode fortalecer a segurança da
            sua nuvem.
          </p>
        </div>
      </div>

      {/* FORMULÁRIO */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-[#001B3A] mb-3 text-center">Vamos conversar?</h2>
        <p className="text-gray-600 mb-10 text-center">
          Preencha o formulário abaixo e nossa equipe retornará o contato o mais breve possível.
        </p>

        <form className="space-y-6 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Nome"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
            />
            <input
              type="email"
              placeholder="E-mail corporativo"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
            />
            <input
              type="tel"
              placeholder="Telefone"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
            />
            <input
              type="text"
              placeholder="Empresa"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
            />
          </div>

          <textarea
            placeholder="Mensagem"
            rows={5}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm resize-none"
          ></textarea>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" id="privacy" className="accent-blue-600 w-4 h-4" />
            <label htmlFor="privacy">
              Concordo com a política de privacidade da <strong>VaultCloud Experts</strong>.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#001B3A] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-blue-900 transition-all"
          >
            Enviar mensagem
          </button>
        </form>
      </div>

      {/* ONDE ESTAMOS */}
      <div className="py-24 bg-[#001B3A] text-white px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Onde estamos</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-cyan-400 mb-2">São Paulo</h3>
            <p className="text-gray-300">
              Av. Paulista, 1578 — 10º andar <br />
              Bela Vista, São Paulo/SP <br />
              CEP 01310-200
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              className="inline-block mt-4 bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-md transition"
            >
              Fale pelo WhatsApp
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-cyan-400 mb-2">Porto Alegre</h3>
            <p className="text-gray-300">
              Av. Carlos Gomes, 1000 — Boa Vista <br />
              Porto Alegre/RS <br />
              CEP 90480-003
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-md transition"
            >
              Agendar conversa
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-cyan-400 mb-2">Unidades e Suporte</h3>
            <p className="text-gray-300">
              Atendimento em todo o Brasil e LATAM <br />
              Unidade internacional em Miami, EUA
            </p>
            <a
              href="mailto:contato@vaultcloud.com.br"
              className="inline-block mt-4 bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-md transition"
            >
              Enviar e-mail
            </a>
          </div>
        </div>
      </div>

      {/* ÁREA DO CLIENTE */}
      <div className="py-20 bg-[#F5F7FB] text-center px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white shadow-md rounded-xl p-8 border border-gray-100">
          <div className="md:w-2/3 text-left">
            <h2 className="text-2xl font-bold text-primary mb-3">
              Área do Cliente
            </h2>
            <p className="text-gray-700 mb-5">
              Nossas soluções em Cloud Security, DevSecOps e Governança Digital
              ajudam empresas a alcançarem o próximo nível de proteção e eficiência
              tecnológica. Acesse as plataformas VaultCloud:
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-4 py-2 rounded-md transition"
              >
                Portal VaultCloud
              </a>
              <a
                href="#"
                className="border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-4 py-2 rounded-md transition"
              >
                Suporte Técnico
              </a>
            </div>
          </div>

          <div className="md:w-1/3">
            <img
              src={AreaCliente}
              alt="Área do Cliente"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
