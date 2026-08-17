// WP core aplica wptexturize/convert_chars em title.rendered (REST), então
// aspas, apóstrofo e "&" chegam como entidade (&#8217;, &quot;, &amp;...).
// Decodifica uma única vez no limite entre o WP e a UI (form do admin e
// Hero.tsx do site público), nunca dentro de componentes que já recebem
// texto puro.
export function decodeHtmlEntities(input: string): string {
  if (!input) return input;
  return input
    .replace(/&#(\d+);/g, (_, dec: string) => String.fromCodePoint(Number(dec)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    // &amp; por último: decodificar antes converteria "&amp;#039;" em
    // "&#039;" e o passo numérico (já rodado) deixaria de resolvê-lo.
    .replace(/&amp;/g, "&");
}
