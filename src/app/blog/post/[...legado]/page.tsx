import { notFound, permanentRedirect } from "next/navigation";
import redirects from "@/lib/legacy-blog-redirects.json";

interface Props {
  params: Promise<{ legado: string[] }>;
}

const MAP = redirects as Record<string, string>;

function decode(segment: string) {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

/** URLs antigas do Magento (/blog/post/<categoria>/<slug>) para o post equivalente. */
export default async function LegacyMagentoPostPage({ params }: Props) {
  const { legado } = await params;
  const key = legado
    .map(decode)
    .join("/")
    .normalize("NFC")
    .trim()
    .replace(/\/+$/, "")
    .toLowerCase();
  const destino = Object.hasOwn(MAP, key) ? MAP[key] : undefined;
  if (!destino) notFound();
  permanentRedirect(destino);
}
