import { Phone, Mail, MapPin, Clock, MessageCircle, Building2, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContactChannel {
  icon: LucideIcon;
  title: string;
  desc: string;
  info: { label: string; value: string; href?: string }[];
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    icon: Building2,
    title: "Franqueadora",
    desc: "Nossa sede administrativa em São José do Rio Preto.",
    info: [
      { label: "Telefone", value: "(17) 3214-8699", href: "tel:+551732148699" },
      { label: "E-mail", value: "sac@moveedu.com.br", href: "mailto:sac@moveedu.com.br" },
      { label: "Endereço", value: "Av. Bady Bassitt, 4960 — Jardim Alto Rio Preto, São José do Rio Preto/SP" },
      { label: "CEP", value: "15025-000" },
    ],
  },
  {
    icon: MessageCircle,
    title: "SAC e Ouvidoria",
    desc: "Para dúvidas, reclamações ou sugestões sobre nossos serviços.",
    info: [
      { label: "Telefone", value: "(17) 3214-8699", href: "tel:+551732148699" },
      { label: "E-mail", value: "sac@moveedu.com.br", href: "mailto:sac@moveedu.com.br" },
      { label: "Horário de atendimento", value: "Seg a Sex — 8h às 18h  ·  Sáb — 8h às 12h" },
    ],
  },
  {
    icon: Users,
    title: "Seja um Franqueado",
    desc: "Quer abrir uma unidade Ensina Mais na sua cidade?",
    info: [
      { label: "E-mail", value: "franquia@moveedu.com.br", href: "mailto:franquia@moveedu.com.br" },
      { label: "Página", value: "Saiba mais sobre franquia", href: "/franquia" },
    ],
  },
];

export const OPENING_HOURS = [
  { days: "Segunda a Sexta", hours: "08h às 18h" },
  { days: "Sábado", hours: "08h às 12h" },
  { days: "Domingo e feriados", hours: "Fechado" },
];
