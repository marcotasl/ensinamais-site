import { permanentRedirect } from "next/navigation";

/*
 * /beneficios foi consolidada dentro de /metodologia (seção "Benefícios na
 * prática" com ancora #beneficios). Redirect 308 permanente preserva
 * qualquer link externo que apontava pra cá.
 */
export default function Page() {
  permanentRedirect("/metodologia#beneficios");
}
