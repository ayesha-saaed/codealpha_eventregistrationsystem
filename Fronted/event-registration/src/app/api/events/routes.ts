import { NextResponse } from "next/server";

export async function GET() {
  const events = ["Hackathon 2025", "Design Sprint", "AI Bootcamp"];
  return NextResponse.json(events);
}
