import { AdminShell } from "../../_components/AdminShell";
import { requireModule } from "@/lib/admin-client";
import { BannerForm } from "../_components/BannerForm";
import type { BannerContentData } from "../_schema";

const EMPTY_CONTENT: BannerContentData = {
  title: "",
  subtitulo: "",
  descricao: "",
  cta_texto: "",
  cta_link: "#lead",
  cor_overlay: "#1A2744",
};

export default async function NovoBannerPage() {
  const session = await requireModule("hero");

  return (
    <AdminShell displayName={session.displayName} canHero={session.canHero} canBlog={session.canBlog}>
      <div className="mx-auto w-full max-w-[1440px] px-6 py-8 lg:px-10">
        <h1 className="mb-6 text-[24px] font-bold text-em-dark">Novo banner</h1>
        <BannerForm mode="create" initialContent={EMPTY_CONTENT} />
      </div>
    </AdminShell>
  );
}
