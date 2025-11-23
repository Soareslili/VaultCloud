import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function Obrigado() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-white text-[#001B3A] px-6">
      <div className="text-center max-w-lg">
      
        <div className="flex justify-center mb-6">
          <CheckCircle size={80} className="text-green-500" />
        </div>

       
        <h1 className="text-4xl font-extrabold mb-3">
          Mensagem enviada!
        </h1>

       
        <p className="text-lg text-gray-600 mb-8">
          Recebemos sua mensagem e nossa equipe entrará em contato o mais breve possível.
        </p>

       
        <Link
          to="/"
          className="inline-block bg-[#001B3A] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all hover:bg-blue-900"
        >
          Voltar ao site
        </Link>
      </div>
    </section>
  );
}
