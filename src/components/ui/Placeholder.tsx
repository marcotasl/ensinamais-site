import { ImageIcon } from "lucide-react";

interface PlaceholderProps {
  className?: string;
  label?: string;
}

export default function Placeholder({ className = "w-full h-48", label }: PlaceholderProps) {
  return (
    <div className={`bg-wire-100 rounded-xl flex flex-col items-center justify-center gap-2 ${className}`}>
      <ImageIcon size={32} className="text-wire-400" />
      {label && <span className="text-xs font-medium text-wire-400">{label}</span>}
    </div>
  );
}
