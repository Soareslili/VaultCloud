import ContactHero from "../../assets/contact-hero.png";

export default function Contact() {
  return (
    <section className="bg-white text-[#001B3A]">
    
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

   
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-[#001B3A] mb-3 text-center">
          Vamos conversar?
        </h2>
        <p className="text-gray-600 mb-10 text-center">
          Preencha o formulário abaixo e nossa equipe retornará o contato o mais breve possível.
        </p>

        <form
          action="https://formsubmit.co/claudio0003@gmail.com"
          method="POST"
          className="space-y-6 bg-white p-8 rounded-2xl shadow-md border border-gray-100"
        >
       
          <input type="hidden" name="_subject" value="Nova mensagem do site VaultCloud Experts" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://vaultcloudexperts.cloud/obrigado" />

         
          <input
            type="hidden"
            name="_autoresponse"
            value="Recebemos sua mensagem! Nossa equipe da VaultCloud Experts entrará em contato em breve."
          />

        
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="Nome"
              placeholder="Nome"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 shadow-sm"
            />

            <input
              type="email"
              name="Email"
              placeholder="E-mail corporativo"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 shadow-sm"
            />

            <input
              type="tel"
              name="Telefone"
              placeholder="Telefone"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 shadow-sm"
            />

            <input
              type="text"
              name="Empresa"
              placeholder="Empresa"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          <textarea
            name="Mensagem"
            placeholder="Mensagem"
            rows={5}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 shadow-sm resize-none"
          ></textarea>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" required className="accent-blue-600 w-4 h-4" />
            <label>
              Concordo com a política de privacidade da{" "}
              <strong>VaultCloud Experts</strong>.
            </label>
          </div>

        
          <button
            type="submit"
            className="w-full bg-[#001B3A] text-white font-semibold py-3 cursor-pointer rounded-xl shadow-md hover:bg-blue-900 transition-all"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
