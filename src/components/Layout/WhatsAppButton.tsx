import { MessageCircle } from "lucide-react";
import { Button } from "../../components/ui/Button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Formato: código do país + DDD + número
    const message = encodeURIComponent("Olá! Gostaria de conhecer mais sobre os serviços da VaultCloud Experts.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 rounded-full w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] shadow-[var(--shadow-strong)] hover:shadow-[var(--shadow-glow)] z-50 animate-float group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
    </Button>
  );
};

export default WhatsAppButton;