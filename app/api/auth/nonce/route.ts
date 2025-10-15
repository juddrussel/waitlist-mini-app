import crypto from "crypto";
import { NextResponse } from "next/server";

// Simple in-memory nonce store (replace with Redis/DB in production)
const nonces = new Set<string>();

export async function GET(request: Request): Promise<NextResponse> {
  const nonce = crypto.randomBytes(16).toString("hex");
  nonces.add(nonce);
  return NextResponse.json({ nonce });
}

// Export helper so /verify can access same memory (for demo only)
export { nonces };
