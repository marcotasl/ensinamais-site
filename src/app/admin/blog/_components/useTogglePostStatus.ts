"use client";

import { useState, useTransition } from "react";
import { togglePostStatusAction } from "../_actions";
import type { PostStatus } from "../_schema";

/**
 * Despublicar/republicar sempre passa por um clique de confirmação inline
 * (sem `confirm()` nativo, que trava a automação). Compartilhado entre a
 * tabela de posts (várias linhas) e o form de edição (um post só).
 */
export function useTogglePostStatus(onDone?: (id: number, next: PostStatus) => void) {
  const [pendingId, setPendingId] = useState<number | null>(null);
  const [confirmId, setConfirmId] = useState<number | null>(null);
  const [errorId, setErrorId] = useState<number | null>(null);
  const [, startTransition] = useTransition();

  function request(id: number, current: PostStatus) {
    if (confirmId !== id) {
      setConfirmId(id);
      return;
    }
    setConfirmId(null);
    setErrorId(null);
    setPendingId(id);
    const next: PostStatus = current === "publish" ? "draft" : "publish";
    startTransition(async () => {
      try {
        await togglePostStatusAction(id, next);
        onDone?.(id, next);
      } catch {
        setErrorId(id);
      } finally {
        setPendingId(null);
      }
    });
  }

  function cancel() {
    setConfirmId(null);
  }

  return { pendingId, confirmId, errorId, request, cancel };
}
