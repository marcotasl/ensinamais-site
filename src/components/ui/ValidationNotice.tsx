import { AlertTriangle } from "lucide-react";

interface ValidationNoticeProps {
  title: string;
  message: string;
}

export default function ValidationNotice({ title, message }: ValidationNoticeProps) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6">
      <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4 sm:p-5 flex gap-3">
        <AlertTriangle size={20} className="text-yellow-700 shrink-0 mt-0.5" strokeWidth={1.8} />
        <div>
          <p className="text-sm font-bold text-yellow-900 mb-1">{title}</p>
          <p className="text-sm text-yellow-800 leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  );
}
