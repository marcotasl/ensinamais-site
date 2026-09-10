import { notFound } from "next/navigation";
import { AdminShell } from "../../_components/AdminShell";
import { adminFetchWP, requireModule } from "@/lib/admin-client";
import type { WPBanner } from "@/lib/wordpress";
import { decodeHtmlEntities } from "@/lib/html-entities";
import { BannerForm } from "../_components/BannerForm";
import type { BannerContentData } from "../_schema";

export default async function EditarBannerPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await requireModule("hero");
  const { id } = await params;
  const bannerId = Number(id);
  if (!Number.isInteger(bannerId) || bannerId <= 0) notFound();

  const banner = await adminFetchWP<WPBanner>(`/wp/v2/banner/${bannerId}`, {
    query: { context: "edit", _fields: "id,title,acf" },
  }).catch(() => null);

  if (!banner) notFound();

  const initialContent: BannerContentData = {
    title: decodeHtmlEntities(banner.title.rendered),
    subtitulo: banner.acf.subtitulo,
    descricao: banner.acf.descricao,
    cta_texto: banner.acf.cta_texto,
    cta_link: banner.acf.cta_link,
    cor_overlay: banner.acf.cor_overlay,
  };

  return (
    <AdminShell displayName={session.displayName} canHero={session.canHero} canBlog={session.canBlog}>
      <div className="mx-auto w-full max-w-[1440px] px-6 py-8 lg:px-10">
        <h1 className="mb-6 text-[24px] font-bold text-em-dark">Editar banner</h1>
        <BannerForm
          mode="edit"
          id={banner.id}
          initialContent={initialContent}
          initialImageUrl={banner.acf.imagem_fundo}
        />
      </div>
    </AdminShell>
  );
}
