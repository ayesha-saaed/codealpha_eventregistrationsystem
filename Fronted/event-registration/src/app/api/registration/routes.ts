

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 🔗 Call your backend Express API
    const res = await fetch("http://localhost:5000/api/registrations/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (err: unknown) {
    console.error("❌ Backend connection error:", err);

    return NextResponse.json(
      { error: "Failed to connect backend" },
      { status: 500 }
    );
  }
}
