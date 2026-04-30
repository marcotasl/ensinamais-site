"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle, X, Send, Check, Trash2, MessageSquare } from "lucide-react";
import type { Comment } from "@/app/api/comments/route";

export default function CommentOverlay() {
  const [active, setActive] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [placing, setPlacing] = useState<{ x: number; y: number } | null>(null);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [openPin, setOpenPin] = useState<string | null>(null);
  const [showResolved, setShowResolved] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch("/api/comments");
      if (res.ok) setComments(await res.json());
    } catch { /* offline fallback */ }
  }, []);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  // Restore author from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("comment-author");
    if (saved) setAuthor(saved);
  }, []);

  const handlePageClick = (e: React.MouseEvent) => {
    if (!active || placing || openPin) return;

    const rect = document.documentElement;
    const x = (e.clientX / rect.clientWidth) * 100;
    const y = e.pageY;

    setPlacing({ x, y });
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const submitComment = async () => {
    if (!text.trim()) return;

    const name = author.trim() || "Anônimo";
    localStorage.setItem("comment-author", name);

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ x: placing!.x, y: placing!.y, text: text.trim(), author: name }),
    });

    if (res.ok) setComments(await res.json());
    setPlacing(null);
    setText("");
  };

  const resolveComment = async (id: string) => {
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "resolve", id }),
    });
    if (res.ok) setComments(await res.json());
  };

  const deleteComment = async (id: string) => {
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", id }),
    });
    if (res.ok) {
      setComments(await res.json());
      setOpenPin(null);
    }
  };

  const visibleComments = comments.filter((c) => showResolved || !c.resolved);
  const unresolvedCount = comments.filter((c) => !c.resolved).length;

  return (
    <>
      {/* Click capture layer */}
      {active && (
        <>
          <div
            className="fixed inset-0 z-[997] pointer-events-none rounded-2xl"
            style={{ boxShadow: "inset 0 0 0 4px rgb(37 99 235)" }}
          />
          <div
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[1001] pointer-events-none bg-blue-600 text-white rounded-full pl-4 pr-1.5 py-1.5 shadow-lg flex items-center gap-2"
          >
            <MessageSquare size={16} />
            <span className="text-sm font-semibold">
              Modo comentário ativo · clique na página para adicionar um pin
            </span>
            <button
              type="button"
              onClick={() => { setActive(false); setPlacing(null); setOpenPin(null); }}
              aria-label="Sair do modo comentário"
              className="pointer-events-auto w-6 h-6 rounded-full hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors"
            >
              <X size={14} />
            </button>
          </div>
          <div
            className="fixed inset-0 z-[998]"
            style={{ cursor: placing ? "default" : "crosshair" }}
            onClick={handlePageClick}
          />
        </>
      )}

      {/* Comment pins */}
      {active &&
        visibleComments.map((c, i) => {
          const number = comments.filter((cc) => !cc.resolved).indexOf(c) + 1;
          const isOpen = openPin === c.id;

          return (
            <div
              key={c.id}
              className="absolute z-[999]"
              style={{ left: `${c.x}%`, top: `${c.y}px`, transform: "translate(-50%, -100%)" }}
            >
              {/* Pin */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenPin(isOpen ? null : c.id);
                }}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-lg cursor-pointer transition-transform hover:scale-110 ${
                  c.resolved
                    ? "bg-green-500 text-white"
                    : "bg-blue-600 text-white"
                }`}
              >
                {c.resolved ? <Check size={14} /> : number}
              </button>

              {/* Popover */}
              {isOpen && (
                <div
                  className="absolute top-9 left-1/2 -translate-x-1/2 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-[1000]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-sm font-bold text-gray-900">{c.author}</span>
                      <span className="text-xs text-gray-400 ml-2">
                        {new Date(c.createdAt).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <button
                      onClick={() => setOpenPin(null)}
                      className="text-gray-400 hover:text-gray-600 cursor-pointer"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed mb-3">{c.text}</p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => resolveComment(c.id)}
                      className={`flex-1 text-xs font-semibold py-1.5 rounded-lg cursor-pointer transition-colors ${
                        c.resolved
                          ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          : "bg-green-50 text-green-700 hover:bg-green-100"
                      }`}
                    >
                      {c.resolved ? "Reabrir" : "Resolver"}
                    </button>
                    <button
                      onClick={() => deleteComment(c.id)}
                      className="text-xs text-red-500 hover:text-red-700 p-1.5 cursor-pointer"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

      {/* Placing input */}
      {placing && (
        <div
          className="absolute z-[1000]"
          style={{ left: `${placing.x}%`, top: `${placing.y}px`, transform: "translate(-50%, 8px)" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-4">
            <input
              type="text"
              placeholder="Seu nome"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 mb-2 outline-none focus:border-blue-400"
            />
            <textarea
              ref={inputRef}
              placeholder="Escreva seu comentário..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  submitComment();
                }
              }}
              className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-blue-400 resize-none h-20"
            />
            <div className="flex justify-between items-center mt-2">
              <button
                onClick={() => { setPlacing(null); setText(""); }}
                className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={submitComment}
                disabled={!text.trim()}
                className="text-xs font-bold text-white bg-blue-600 rounded-lg px-4 py-2 flex items-center gap-1 cursor-pointer hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={12} /> Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating toolbar */}
      <div className="fixed bottom-6 right-6 z-[1001] flex items-center gap-2">
        {active && (
          <div className="flex items-center gap-2 bg-white rounded-full shadow-lg border border-gray-200 px-4 py-2.5">
            <span className="text-xs font-semibold text-gray-700">
              {unresolvedCount} aberto{unresolvedCount !== 1 ? "s" : ""}
            </span>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => setShowResolved(!showResolved)}
              className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              {showResolved ? "Ocultar resolvidos" : "Ver resolvidos"}
            </button>
          </div>
        )}

        <button
          onClick={() => {
            setActive(!active);
            setPlacing(null);
            setOpenPin(null);
          }}
          className={`shadow-lg flex items-center gap-2 cursor-pointer transition-all rounded-full px-5 py-3 ${
            active
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          <MessageSquare size={18} />
          <span className="text-sm font-semibold">
            {active ? "Sair" : "Adicionar Comentário"}
          </span>
        </button>
      </div>
    </>
  );
}
