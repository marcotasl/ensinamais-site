import { requireModule } from "@/lib/admin-client";
import { HeroPreviewFrame } from "./HeroPreviewFrame";

// Rota isolada dentro de /admin, sem AdminShell: existe só para ser
// embutida num <iframe> pelo formulário do banner (ver
// _components/HeroPreview.tsx). Continua atrás de requireModule("hero")
// mesmo sendo "só preview", porque renderiza rascunho enviado por
// postMessage e é a mesma superfície de autenticação do resto do admin.
export default async function HeroPreviewPage() {
  await requireModule("hero");
  return <HeroPreviewFrame />;
}
