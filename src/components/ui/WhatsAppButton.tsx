"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "551732148699";
const WHATSAPP_MESSAGE = "Olá, tenho interesse nos cursos da Ensina Mais!";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] transition-all duration-200"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle size={28} color="#fff" fill="#fff" />
    </a>
  );
}
