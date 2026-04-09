import { put, list } from "@vercel/blob";
import { NextResponse } from "next/server";

export interface Comment {
  id: string;
  x: number; // % from left
  y: number; // px from top (absolute)
  text: string;
  author: string;
  page: string;
  resolved: boolean;
  createdAt: string;
}

const BLOB_PATH = "wireframe-comments.json";

async function getComments(): Promise<Comment[]> {
  try {
    const { blobs } = await list({ prefix: BLOB_PATH });
    if (blobs.length === 0) return [];
    const res = await fetch(blobs[0].url);
    return res.json();
  } catch {
    return [];
  }
}

async function saveComments(comments: Comment[]) {
  await put(BLOB_PATH, JSON.stringify(comments), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });
}

export async function GET() {
  const comments = await getComments();
  return NextResponse.json(comments);
}

export async function POST(req: Request) {
  const body = await req.json();
  const comments = await getComments();

  if (body.action === "resolve") {
    const updated = comments.map((c) =>
      c.id === body.id ? { ...c, resolved: !c.resolved } : c
    );
    await saveComments(updated);
    return NextResponse.json(updated);
  }

  if (body.action === "delete") {
    const updated = comments.filter((c) => c.id !== body.id);
    await saveComments(updated);
    return NextResponse.json(updated);
  }

  // Add new comment
  const comment: Comment = {
    id: crypto.randomUUID(),
    x: body.x,
    y: body.y,
    text: body.text,
    author: body.author || "Anônimo",
    page: body.page || "/",
    resolved: false,
    createdAt: new Date().toISOString(),
  };

  comments.push(comment);
  await saveComments(comments);
  return NextResponse.json(comments);
}
