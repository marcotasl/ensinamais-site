"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, Image as ImageIcon, Newspaper } from "lucide-react";
import { LogoutButton } from "./LogoutButton";

type NavItem = {
  href: string;
  label: string;
  icon: typeof Home;
};

export function AdminShell({
  displayName,
  canHero,
  canBlog,
  children,
}: {
  displayName: string;
  canHero: boolean;
  canBlog: boolean;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { href: "/admin", label: "Início", icon: Home },
    ...(canHero ? [{ href: "/admin/hero", label: "Hero", icon: ImageIcon }] : []),
    ...(canBlog ? [{ href: "/admin/blog", label: "Blog", icon: Newspaper }] : []),
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="flex w-[240px] shrink-0 flex-col justify-between border-r border-wire-200 bg-white px-4 py-6">
        <div>
          <Link href="/admin" className="mb-8 flex items-center px-2">
            <Image
              src="/images/logo/logo-preta.png"
              alt="Ensina Mais"
              width={140}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <nav className="flex flex-col gap-1">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = href === "/admin" ? pathname === href : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2.5 rounded-[10px] px-3 py-2.5 text-[13px] font-semibold transition ${
                    active
                      ? "bg-em-green-pale text-em-green-dark"
                      : "text-em-dark/60 hover:bg-wire-50 hover:text-em-dark"
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-wire-200 pt-4">
          <p className="mb-2 truncate px-3 text-[12px] font-semibold text-em-dark/45">
            {displayName}
          </p>
          <LogoutButton />
        </div>
      </aside>

      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
