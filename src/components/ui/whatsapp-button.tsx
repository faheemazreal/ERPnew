import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in Evoulth ERP for our school. Can you please provide more information?";
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-6 left-6 z-40 gradient-cta text-white shadow-hero hover:shadow-feature transition-all duration-300 hover:scale-110 animate-pulse-glow rounded-full p-4 group"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="ml-2 hidden sm:inline">WhatsApp</span>
    </Button>
  );
}