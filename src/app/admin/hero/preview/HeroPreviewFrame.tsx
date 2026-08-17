"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/sections/Hero";
import { FALLBACK_BANNERS, type FallbackBanner } from "@/lib/fallback-banners";

const MESSAGE_SOURCE = "em-hero-preview";
const READY_SOURCE = "em-hero-preview-ready";

export function HeroPreviewFrame() {
  const [slide, setSlide] = useState<FallbackBanner>(FALLBACK_BANNERS[0]);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== window.location.origin) return;
      if (e.data?.source !== MESSAGE_SOURCE) return;
      setSlide(e.data.slide);
    }
    window.addEventListener("message", onMessage);
    window.parent.postMessage({ source: READY_SOURCE }, window.location.origin);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return <Hero banners={[slide]} />;
}
