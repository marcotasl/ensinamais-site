import { permanentRedirect } from "next/navigation";
import { SCHOOL_LOCATOR_URL } from "@/lib/navigation";

export default function EscolasPage() {
  permanentRedirect(SCHOOL_LOCATOR_URL);
}
