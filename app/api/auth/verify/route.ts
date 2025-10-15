import { NextResponse } from "next/server";
import nonces from "@/lib/nonceStore";

export async function POST(req: Request): Promise<NextResponse> {
  const { nonce } = await req.json();

  if (!nonce || !nonces.has(nonce)) {
    return NextResponse.json({ error: "Invalid nonce" }, { status: 400 });
  }

  // Remove used nonce
  nonces.delete(nonce);

  return NextResponse.json({ success: true });
}
