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

export type Testimonial =
  | {
      type: "text";
      quote: string;
      name: string;
      city: string;
      img: string;
      stars: number;
    }
  | {
      type: "video";
      videoId: string;
      name: string;
      city: string;
      title?: string;
    };

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}
