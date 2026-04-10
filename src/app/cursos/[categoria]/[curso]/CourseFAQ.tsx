"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function CourseFAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="bg-white rounded-xl border border-wire-200 overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left cursor-pointer"
            >
              <span className="text-sm sm:text-base font-bold text-wire-black pr-4">{item.q}</span>
              <ChevronDown
                size={18}
                className={`text-wire-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 -mt-1">
                <p className="text-sm text-wire-500 leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
