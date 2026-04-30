import FadeIn from "@/components/ui/FadeIn";
import Placeholder from "@/components/ui/Placeholder";
import ValidationNotice from "@/components/ui/ValidationNotice";

interface InstitutionalStubProps {
  eyebrow: string;
  title: string;
  lead: string;
  validation?: { message: string; title?: string };
  blocks: { title: string; desc: string }[];
}

export default function InstitutionalStub({
  eyebrow,
  title,
  lead,
  validation,
  blocks,
}: InstitutionalStubProps) {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {validation && (
        <ValidationNotice
          title={validation.title ?? "Validar com cliente"}
          message={validation.message}
        />
      )}

      <section className="bg-wire-900 pt-20 pb-24 sm:pb-28 px-4 sm:px-6 rounded-b-[46px] mt-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-3">{eyebrow}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 max-w-[760px] mx-auto">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-wire-400 max-w-[620px] mx-auto leading-relaxed">
              {lead}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 sm:px-6 pt-12 pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blocks.map((block, i) => (
              <FadeIn key={block.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-wire-200 p-6 sm:p-7 h-full">
                  <Placeholder className="w-full aspect-[16/10] rounded-xl mb-5" />
                  <h2 className="text-lg sm:text-xl font-extrabold text-wire-black mb-2 leading-tight">
                    {block.title}
                  </h2>
                  <p className="text-sm text-wire-600 leading-relaxed">{block.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
