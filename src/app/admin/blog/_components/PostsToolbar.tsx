"use client";

import { useRef, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

const STATUS_OPTIONS = [
  { value: "publish,draft", label: "Todos" },
  { value: "publish", label: "Publicados" },
  { value: "draft", label: "Rascunhos" },
] as const;

export function PostsToolbar({ initialQuery, initialStatus }: { initialQuery: string; initialStatus: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  function pushParams(next: { q?: string; status?: string }) {
    const params = new URLSearchParams(searchParams.toString());
    if (next.q !== undefined) {
      if (next.q) params.set("q", next.q);
      else params.delete("q");
    }
    if (next.status !== undefined) params.set("status", next.status);
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  }

  function onQueryChange(v: string) {
    setQuery(v);
    if (debounce.current) clearTimeout(debounce.current);
    debounce.current = setTimeout(() => pushParams({ q: v }), 400);
  }

  return (
    <div className="mb-5 flex flex-wrap items-center gap-3">
      <div className="relative min-w-[240px] flex-1">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-em-dark/40" strokeWidth={1.8} />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Buscar por título"
          className="w-full rounded-full border-[1.5px] border-wire-200 bg-white py-2.5 pl-10 pr-4 text-[13px] text-em-dark outline-none transition focus:border-em-green focus:ring-4 focus:ring-em-green/15"
        />
      </div>
      <div className="flex gap-1.5 rounded-full bg-white p-1 shadow-[0_1px_3px_rgba(26,39,68,0.08)]">
        {STATUS_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => pushParams({ status: opt.value })}
            className={`rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition ${
              initialStatus === opt.value
                ? "bg-em-green-pale text-em-green-dark"
                : "text-em-dark/55 hover:text-em-dark"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
