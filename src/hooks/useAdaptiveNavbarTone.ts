"use client";

import { useEffect, useState, type RefObject } from "react";
import { usePathname } from "next/navigation";

export type NavbarTone = "light" | "dark";

type Rgba = {
  r: number;
  g: number;
  b: number;
  a: number;
};

const DEFAULT_TONE: NavbarTone = "dark";
const LIGHT_BACKGROUND_THRESHOLD = 0.48;

function parseCssColor(value: string): Rgba | null {
  const match = value.match(
    /rgba?\(\s*([\d.]+)(?:\s+|,\s*)([\d.]+)(?:\s+|,\s*)([\d.]+)(?:\s*(?:\/|,)\s*([\d.]+)(%)?)?\s*\)/i,
  );

  if (!match) return null;

  const alphaValue = match[4] ? Number(match[4]) : 1;
  const alpha = match[5] ? alphaValue / 100 : alphaValue;

  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
    a: Math.min(Math.max(alpha, 0), 1),
  };
}

function relativeLuminance({ r, g, b }: Rgba): number {
  const channel = (value: number) => {
    const normalized = value / 255;
    return normalized <= 0.04045
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  };

  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function backgroundLuminance(element: Element): number | null {
  const style = window.getComputedStyle(element);
  const imageColors =
    style.backgroundImage === "none"
      ? []
      : [...style.backgroundImage.matchAll(/rgba?\([^)]+\)/gi)]
          .map(([color]) => parseCssColor(color))
          .filter((color): color is Rgba => Boolean(color && color.a > 0.08));

  if (imageColors.length > 0) {
    const weightedTotal = imageColors.reduce(
      (total, color) => total + relativeLuminance(color) * color.a,
      0,
    );
    const totalAlpha = imageColors.reduce((total, color) => total + color.a, 0);
    return weightedTotal / totalAlpha;
  }

  const backgroundColor = parseCssColor(style.backgroundColor);
  if (!backgroundColor || backgroundColor.a < 0.08) return null;

  return relativeLuminance(backgroundColor);
}

function sampleBackgroundTone(nav: HTMLElement): NavbarTone {
  const navRect = nav.getBoundingClientRect();
  const sampleY = Math.min(
    window.innerHeight - 1,
    Math.max(1, navRect.top + navRect.height / 2),
  );
  const sampleXs = [0.08, 0.25, 0.5, 0.75, 0.92].map(
    (position) => window.innerWidth * position,
  );

  const samples = sampleXs
    .map((x) => {
      const elements = document
        .elementsFromPoint(x, sampleY)
        .filter((element) => !nav.contains(element) && element !== nav);

      for (const element of elements) {
        const luminance = backgroundLuminance(element);
        if (luminance !== null) return luminance;
      }

      return null;
    })
    .filter((value): value is number => value !== null);

  if (samples.length === 0) return DEFAULT_TONE;

  const average =
    samples.reduce((total, luminance) => total + luminance, 0) / samples.length;

  return average >= LIGHT_BACKGROUND_THRESHOLD ? "light" : "dark";
}

export function useAdaptiveNavbarTone(
  navRef: RefObject<HTMLElement | null>,
): NavbarTone {
  const pathname = usePathname();
  const [tone, setTone] = useState<NavbarTone>(DEFAULT_TONE);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        if (navRef.current) {
          setTone(sampleBackgroundTone(navRef.current));
        }
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    const observer = new MutationObserver(update);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [navRef, pathname]);

  return tone;
}
