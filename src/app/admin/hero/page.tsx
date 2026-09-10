import Link from "next/link";
import { Plus } from "lucide-react";
import { AdminShell } from "../_components/AdminShell";
import { adminFetchWP, requireModule } from "@/lib/admin-client";
import type { WPBanner } from "@/lib/wordpress";
import { decodeHtmlEntities } from "@/lib/html-entities";
import { BannersList, type BannerRow } from "./_components/BannersList";

export default async function HeroPage({
  searchParams,
}: {
  searchParams: Promise<{ created?: string; deleted?: string }>;
}) {
  const session = await requireModule("hero");
  const flash = await searchParams;

  const banners = await adminFetchWP<WPBanner[]>("/wp/v2/banner", {
    query: { per_page: "100", orderby: "menu_order", order: "asc", context: "edit", _fields: "id,title,acf" },
  });

  const rows: BannerRow[] = banners.map((b) => ({
    id: b.id,
    title: decodeHtmlEntities(b.title.rendered),
    subtitulo: b.acf.subtitulo,
    bgImage: b.acf.imagem_fundo,
  }));

  return (
    <AdminShell displayName={session.displayName} canHero={session.canHero} canBlog={session.canBlog}>
      <div className="mx-auto w-full max-w-[900px] px-6 py-8 lg:px-10">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-[24px] font-bold text-em-dark">Banners do hero</h1>
            <p className="text-[13px] text-em-dark/60">
              O primeiro da lista é o que aparece no ar na home; os demais ficam como conteúdo de reserva
            </p>
          </div>
          <Link
            href="/admin/hero/novo"
            className="inline-flex items-center gap-2 self-start rounded-full bg-em-green px-5 py-2.5 text-[13px] font-bold text-white hover:bg-em-green-dark md:self-auto"
          >
            <Plus className="h-4 w-4" strokeWidth={1.8} />
            Novo banner
          </Link>
        </div>

        {flash.created && <FlashBanner message="Banner criado com sucesso." />}
        {flash.deleted && <FlashBanner message="Banner excluído." />}

        <BannersList rows={rows} />
      </div>
    </AdminShell>
  );
}

function FlashBanner({ message }: { message: string }) {
  return (
    <div className="mb-4 rounded-[12px] bg-em-green-pale px-4 py-3 text-[13px] font-semibold text-em-green-dark">
      {message}
    </div>
  );
}
