"use client";

export type CategoryOption = { id: number; name: string };

export function CategoryChecklist({
  options,
  value,
  onChange,
}: {
  options: CategoryOption[];
  value: number[];
  onChange: (v: number[]) => void;
}) {
  if (options.length === 0) {
    return <p className="text-[13px] text-em-dark/50">Nenhuma categoria encontrada no WordPress.</p>;
  }

  function toggle(id: number) {
    onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id]);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = value.includes(opt.id);
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => toggle(opt.id)}
            aria-pressed={active}
            className={`rounded-full border-[1.5px] px-3.5 py-1.5 text-[12px] font-semibold transition ${
              active
                ? "border-em-green bg-em-green-pale text-em-green-dark"
                : "border-wire-200 bg-white text-em-dark/60 hover:border-em-green/40"
            }`}
          >
            {opt.name}
          </button>
        );
      })}
    </div>
  );
}
