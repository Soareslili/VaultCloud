
import ContactHero from "../../assets/contact-hero.png"; 


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

    
    
      
    </section>
  );
}
