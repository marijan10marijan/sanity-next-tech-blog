import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req) {
  try {
    const body = await req.json();

    // Dobij slug iz requesta
    const slug = body.slug;

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    // Poziva revalidaciju za stranicu bloga sa tim slugom
    revalidatePath(`/blog/${slug}`);

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error("Error revalidating:", err);
    return NextResponse.json({ error: "Error revalidating" }, { status: 500 });
  }
}
