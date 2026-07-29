import type { ReactNode } from "react";

type LegalPageShellProps = {
  title: string;
  children: ReactNode;
};

export default function LegalPageShell({ title, children }: LegalPageShellProps) {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <section className="relative bg-em-dark pt-28 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden rounded-b-[46px]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-12 bg-repeat pointer-events-none"
          style={{ backgroundImage: "url(/images/3d/pattern-dense.webp)", backgroundSize: "520px" }}
        />
        <div className="relative max-w-[760px] mx-auto text-center">
          <p className="eyebrow text-em-yellow mb-4">Legal</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.05]">
            {title}
          </h1>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <article className="max-w-[760px] mx-auto">
          <div className="prose-article">{children}</div>
        </article>
      </section>
    </main>
  );
}
