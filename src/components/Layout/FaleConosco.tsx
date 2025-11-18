import { useState } from "react";
import ContactHero from "../../assets/contact-hero.png";


export default function Contact() {

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const API_URL = "http://localhost:4000/send-email"; // ajustar para produção se necessário

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      company: String(fd.get("company") || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Erro no envio");
      setStatus("success");
      form.reset();
      // opcional: redirecionar para página de obrigado
      // window.location.href = "https://vaultcloudexperts.cloud/obrigado";
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }




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

         <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-md border border-gray-100"
        >
          {/* CONFIGURAÇÕES (se precisar manter hidden inputs) */}
          <input type="hidden" name="_subject" value="Nova mensagem do site VaultCloud Experts" />
          <input type="hidden" name="_next" value="https://vaultcloudexperts.cloud/obrigado" />

          {/* CAMPOS - names ajustados para o backend */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 shadow-sm"
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail corporativo"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 shadow-sm"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Telefone"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 shadow-sm"
            />

            <input
              type="text"
              name="company"
              placeholder="Empresa"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          <textarea
            name="message"
            placeholder="Mensagem"
            rows={5}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 shadow-sm resize-none"
          ></textarea>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" required className="accent-blue-600 w-4 h-4" />
            <label>
              Concordo com a política de privacidade da <strong>VaultCloud Experts</strong>.
            </label>
          </div>

          {status === "success" && <p className="text-green-600">Mensagem enviada com sucesso.</p>}
          {status === "error" && <p className="text-red-600">Erro ao enviar a mensagem. Tente novamente.</p>}

          {/* BOTÃO */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#001B3A] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-blue-900 transition-all disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>
        </form>


      </div>




    </section>
  );
}
