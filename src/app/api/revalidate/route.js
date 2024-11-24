import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache"; // Import za revalidaciju u App Routeru

export async function POST(req) {
  try {
    // Poziva Next.js da revalidira početnu stranicu
    revalidatePath("/"); // Umjesto res.revalidate, koristi revalidatePath
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json({ error: "Error revalidating" }, { status: 500 });
  }
}
