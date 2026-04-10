"use client";

import { useState, useEffect } from "react";
import { X, Layers, Smartphone, Navigation, Eye, Info } from "lucide-react";

const STORAGE_KEY = "wireframe-notice-dismissed";

export default function WireframeNotice() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      // Small delay para não competir com o LCP
      const t = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  const reopen = () => setOpen(true);

  if (!mounted) return null;

  return (
    <>
      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[2000] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/60 backdrop-blur-sm"
          onClick={dismiss}
        >
          <div
            className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-[640px] max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-wire-900 px-6 sm:px-8 pt-6 pb-8 rounded-t-3xl relative">
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-wire-400 hover:text-white hover:bg-white/15 transition-all cursor-pointer"
                aria-label="Fechar"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Layers size={16} className="text-white" />
                </div>
                <span className="text-xs font-bold text-wire-500 uppercase tracking-widest">Wireframe · v1.0</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-2 leading-tight">
                Bem-vindo ao wireframe do novo site Ensina Mais
              </h2>
              <p className="text-sm text-wire-400 leading-relaxed">
                Protótipo navegável em <strong className="text-white">escala de cinza intencional</strong>, consolidando o blueprint de UX para avaliação antes do design final.
              </p>
            </div>

            {/* Content */}
            <div className="px-6 sm:px-8 pt-5 pb-4">
              <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-3">O que avaliar</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {[
                  { icon: Navigation, title: "Jornada & IA", desc: "Fluxo, menu e agrupamento de conteúdo." },
                  { icon: Eye, title: "Hierarquia visual", desc: "Ordem, proporção e ritmo das seções." },
                  { icon: Smartphone, title: "Mobile", desc: "Adaptação e usabilidade no touch." },
                  { icon: Info, title: "Conteúdo", desc: "Títulos, descrições e microcopy." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-wire-100 flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-wire-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-wire-black leading-tight">{item.title}</h3>
                      <p className="text-xs text-wire-500 leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Warning box */}
              <div className="bg-wire-100 rounded-lg p-3 border-l-4 border-wire-black">
                <p className="text-xs text-wire-700 leading-relaxed">
                  <strong className="text-wire-black">Cores, fontes e ilustrações não fazem parte desta fase.</strong> Serão substituídas pela identidade visual da marca no design final.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-wire-100 flex items-center justify-between gap-3 flex-wrap">
              <p className="text-xs text-wire-500 flex-1 min-w-[200px]">
                💬 Use <strong className="text-wire-black">&ldquo;Adicionar Comentário&rdquo;</strong> no canto direito para deixar feedback.
              </p>
              <button
                onClick={dismiss}
                className="text-sm font-bold text-white bg-wire-black rounded-xl px-5 py-2.5 hover:bg-wire-900 transition-colors cursor-pointer shrink-0"
              >
                Entendi, vamos começar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating info button — reopen modal */}
      {!open && (
        <button
          onClick={reopen}
          className="fixed bottom-6 left-6 z-[999] w-11 h-11 rounded-full bg-white border border-wire-200 shadow-lg flex items-center justify-center text-wire-600 hover:text-wire-black hover:bg-wire-50 transition-all cursor-pointer"
          aria-label="Sobre este wireframe"
          title="Sobre este wireframe"
        >
          <Info size={18} />
        </button>
      )}
    </>
  );
}
