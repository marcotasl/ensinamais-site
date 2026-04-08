const BRANDS = [
  "ABF",
  "PEGN",
  "Google Partner",
  "Facebook Partner",
  "Endeavor",
  "MoveEdu",
  "Selo de Excelência ABF",
  "Estúdio Maurício de Sousa",
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-100 py-5 overflow-hidden">
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {/* Double the items for seamless loop */}
        {[...BRANDS, ...BRANDS].map((brand, i) => (
          <span
            key={i}
            className="text-sm font-extrabold text-gray-400 tracking-wide uppercase shrink-0"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
