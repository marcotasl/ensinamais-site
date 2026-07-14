#!/usr/bin/env python3
"""Executa typecheck no Stop quando o worktree contém TypeScript alterado."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path


def run(*args: str, cwd: Path, timeout: int = 150) -> subprocess.CompletedProcess[str]:
    return subprocess.run(args, cwd=cwd, text=True, capture_output=True, timeout=timeout, check=False)


def main() -> int:
    try:
        event = json.load(sys.stdin)
    except json.JSONDecodeError:
        print(json.dumps({"systemMessage": "Hook TypeScript recebeu JSON inválido."}))
        return 0

    if event.get("stop_hook_active"):
        print("{}")
        return 0

    cwd = Path(event.get("cwd") or ".").resolve()
    root_result = run("git", "rev-parse", "--show-toplevel", cwd=cwd)
    if root_result.returncode:
        print("{}")
        return 0
    root = Path(root_result.stdout.strip())
    if not (root / "package.json").exists() or not (root / "tsconfig.json").exists():
        print("{}")
        return 0

    changed = run("git", "status", "--porcelain", "--untracked-files=all", cwd=root)
    paths = [line[3:] for line in changed.stdout.splitlines() if len(line) > 3]
    if not any(path.endswith((".ts", ".tsx", ".mts", ".cts")) for path in paths):
        print("{}")
        return 0

    package = json.loads((root / "package.json").read_text(encoding="utf-8"))
    scripts = package.get("scripts", {})
    command = ("npm", "run", "typecheck") if "typecheck" in scripts else ("npx", "tsc", "--noEmit")
    try:
        result = run(*command, cwd=root)
    except subprocess.TimeoutExpired:
        print(json.dumps({"systemMessage": "Typecheck excedeu 150s; execute-o manualmente antes de concluir."}))
        return 0

    if result.returncode == 0:
        print("{}")
        return 0

    output = (result.stdout + "\n" + result.stderr).strip()
    tail = "\n".join(output.splitlines()[-40:])
    print(json.dumps({
        "decision": "block",
        "reason": f"O typecheck falhou. Corrija os erros antes de concluir:\n{tail}",
    }))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
