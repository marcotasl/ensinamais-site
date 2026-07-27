import { NextResponse } from "next/server";
import { z } from "zod";
import {
  getMoveEduLocations,
  MoveEduError,
  type LocationResource,
} from "@/lib/moveedu";

const querySchema = z
  .object({
    resource: z.enum(["states", "cities", "units"]),
    state: z.string().trim().min(2).max(80).optional(),
    city: z.string().trim().min(2).max(120).optional(),
  })
  .superRefine((value, context) => {
    if (value.resource === "cities" && !value.state) {
      context.addIssue({
        code: "custom",
        path: ["state"],
        message: "state_required",
      });
    }
    if (value.resource === "units" && !value.city) {
      context.addIssue({
        code: "custom",
        path: ["city"],
        message: "city_required",
      });
    }
  });

export async function GET(request: Request) {
  const url = new URL(request.url);
  const parsed = querySchema.safeParse({
    resource: url.searchParams.get("resource"),
    state: url.searchParams.get("state") || undefined,
    city: url.searchParams.get("city") || undefined,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "invalid_query" },
      { status: 400 },
    );
  }

  try {
    const options = await getMoveEduLocations(
      parsed.data.resource as LocationResource,
      parsed.data,
    );
    return NextResponse.json({ ok: true, options });
  } catch (error) {
    if (error instanceof MoveEduError) {
      console.error(`[moveedu/locations] ${error.code}`);
      return NextResponse.json(
        { ok: false, error: error.code },
        { status: error.status },
      );
    }

    return NextResponse.json(
      { ok: false, error: "unexpected_error" },
      { status: 500 },
    );
  }
}
