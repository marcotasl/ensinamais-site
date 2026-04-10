const BRANDS = ["ABF", "PEGN", "Google Partner", "Endeavor", "MoveEdu", "Estúdio Maurício de Sousa"];

export default function TrustBar() {
  return (
    <section className="py-6 overflow-hidden">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {[...BRANDS, ...BRANDS].map((brand, i) => (
          <span key={i} className="text-sm font-bold text-wire-400 uppercase tracking-wide shrink-0">{brand}</span>
        ))}
      </div>
    </section>
  );
}
