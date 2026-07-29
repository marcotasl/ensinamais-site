import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-[70vh] bg-[#fafafa] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] bg-repeat pointer-events-none"
        style={{ backgroundImage: "url(/images/3d/pattern-dense.webp)", backgroundSize: "520px" }}
      />

      <div className="relative max-w-[720px] mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-28 text-center">
        <img
          src="/images/turma-da-monica/pose-9.webp"
          alt=""
          width={180}
          height={180}
          className="mx-auto mb-6 w-[140px] sm:w-[180px] h-auto"
        />

        <p className="text-[clamp(4.5rem,18vw,7.5rem)] font-black leading-none tracking-tight text-em-coral mb-3">
          404
        </p>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-em-dark leading-tight mb-3">
          Ops! Página não encontrada
        </h1>

        <p className="text-base sm:text-lg text-em-dark-soft/80 leading-relaxed max-w-[420px] mx-auto mb-8">
          Essa página saiu pra brincar e não voltou. Que tal escolher outro caminho?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center text-sm sm:text-base font-black text-em-dark bg-em-yellow rounded-full px-7 sm:px-8 py-3.5 sm:py-4 hover:bg-white transition-colors shadow-button w-full sm:w-auto"
          >
            Voltar pro início
          </Link>
          <Link
            href="/cursos"
            className="text-sm font-bold text-em-dark-soft hover:text-em-green-dark transition-colors"
          >
            Ver cursos
          </Link>
          <Link
            href="/blog"
            className="text-sm font-bold text-em-dark-soft hover:text-em-green-dark transition-colors"
          >
            Ler o blog
          </Link>
        </div>
      </div>
    </main>
  );
}
