"use client";

import { useEffect, useRef, useState } from "react";
import { Monitor, Smartphone } from "lucide-react";
import type { FallbackBanner } from "@/lib/fallback-banners";

const MESSAGE_SOURCE = "em-hero-preview";
const READY_SOURCE = "em-hero-preview-ready";

const VIEWPORTS = {
  desktop: { width: 1280, height: 640 },
  mobile: { width: 390, height: 640 },
} as const;

// Preview real de Hero.tsx (não uma cópia da marcação): embute a rota
// /admin/hero/preview num <iframe> e envia o rascunho por postMessage. Um
// iframe tem viewport próprio, então os breakpoints lg: do Tailwind
// respondem ao tamanho do iframe (desktop vs mobile), coisa que um simples
// container CSS redimensionado não reproduziria.
export function HeroPreview({ slide }: { slide: FallbackBanner }) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [ready, setReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== window.location.origin) return;
      if (e.data?.source === READY_SOURCE) setReady(true);
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    if (!ready) return;
    iframeRef.current?.contentWindow?.postMessage({ source: MESSAGE_SOURCE, slide }, window.location.origin);
  }, [ready, slide]);

  const vp = VIEWPORTS[device];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-fit items-center gap-1 rounded-full bg-white p-1 shadow-[0_1px_3px_rgba(26,39,68,0.08)]">
        <button
          type="button"
          onClick={() => setDevice("desktop")}
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition ${
            device === "desktop" ? "bg-em-green-pale text-em-green-dark" : "text-em-dark/55 hover:bg-wire-50"
          }`}
        >
          <Monitor className="h-3.5 w-3.5" strokeWidth={1.8} />
          Desktop
        </button>
        <button
          type="button"
          onClick={() => setDevice("mobile")}
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition ${
            device === "mobile" ? "bg-em-green-pale text-em-green-dark" : "text-em-dark/55 hover:bg-wire-50"
          }`}
        >
          <Smartphone className="h-3.5 w-3.5" strokeWidth={1.8} />
          Mobile
        </button>
      </div>

      <div className="overflow-auto rounded-[16px] bg-em-dark/5 p-4">
        <iframe
          ref={iframeRef}
          src="/admin/hero/preview"
          title="Preview do hero"
          width={vp.width}
          height={vp.height}
          style={{ border: 0 }}
          className="mx-auto rounded-[12px] bg-white shadow-[0_1px_3px_rgba(26,39,68,0.12)]"
          onLoad={() => setReady(false)}
        />
      </div>
    </div>
  );
}
