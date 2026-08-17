import Link from "next/link";
import { ArrowUpRight, Image as ImageIcon, Newspaper } from "lucide-react";
import { AdminShell } from "./_components/AdminShell";
import { requireAdminSession } from "@/lib/admin-client";

export default async function AdminHome() {
  const session = await requireAdminSession();
  const firstName = session.displayName.split(" ")[0];

  const cards = [
    session.canHero
      ? {
          href: "/admin/hero",
          label: "Hero",
          desc: "Banners e destaques da home",
          Icon: ImageIcon,
        }
      : null,
    session.canBlog
      ? {
          href: "/admin/blog",
          label: "Blog",
          desc: "Posts e conteúdo editorial",
          Icon: Newspaper,
        }
      : null,
  ].filter((c): c is NonNullable<typeof c> => c !== null);

  return (
    <AdminShell displayName={session.displayName} canHero={session.canHero} canBlog={session.canBlog}>
      <div className="mx-auto w-full max-w-[1440px] px-6 py-8 lg:px-10">
        <header className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-em-dark/45">Início</p>
          <h1 className="mt-1 text-[26px] font-bold text-em-dark lg:text-[30px]">
            Olá, {firstName}. Por onde começar?
          </h1>
          <p className="mt-1 text-[14px] text-em-dark/60">
            Escolha um módulo para editar o conteúdo do site
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 lg:max-w-[720px]">
          {cards.map(({ href, label, desc, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[16px] bg-white p-5 shadow-[0_1px_3px_rgba(26,39,68,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-18px_rgba(110,168,50,0.4)]"
            >
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#8BC34A_0%,#6EA832_100%)] text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h2 className="text-[17px] font-bold text-em-dark">{label}</h2>
                <p className="mt-1 text-[13px] text-em-dark/60">{desc}</p>
              </div>

              <div className="mt-5 flex justify-end">
                <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-em-green-dark transition-transform group-hover:translate-x-0.5">
                  Abrir
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </AdminShell>
  );
}
