const BRANDS = ["ABF", "PEGN", "Google Partner", "Facebook Partner", "Endeavor", "MoveEdu"];

export default function TrustBar() {
  return (
    <section className="bg-gray-50 border-y border-gray-200 py-7 px-6">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-10 flex-wrap opacity-50">
        {BRANDS.map((brand) => (
          <span
            key={brand}
            className="text-sm font-extrabold text-gray-500 tracking-wide uppercase"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
