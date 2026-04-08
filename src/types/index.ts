import type { LucideIcon } from "lucide-react";

export interface Course {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  light: string;
  img: string;
}

export interface Reason {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Stat {
  icon: LucideIcon;
  number: string;
  prefix: string;
  suffix: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
  img: string;
  stars: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}
