import { put, head } from "@vercel/blob";
import { NextResponse } from "next/server";

export interface Comment {
  id: string;
  x: number;
  y: number;
  text: string;
  author: string;
  page: string;
  resolved: boolean;
  createdAt: string;
}

const BLOB_PATH = "wireframe-comments.json";
const BLOB_URL = `${process.env.BLOB_STORE_URL || ""}/${BLOB_PATH}`;

async function getComments(): Promise<Comment[]> {
  try {
    const meta = await head(BLOB_PATH, { token: process.env.BLOB_READ_WRITE_TOKEN });
    const res = await fetch(meta.url, { cache: "no-store" });
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
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
}

export async function GET() {
  try {
    const comments = await getComments();
    return NextResponse.json(comments);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
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
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
