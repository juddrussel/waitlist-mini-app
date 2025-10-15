import crypto from "crypto";
import { NextResponse } from "next/server";
import nonces from "@/lib/nonceStore";

export async function GET(): Promise<NextResponse> {
  const nonce = crypto.randomBytes(16).toString("hex");
  nonces.add(nonce);
  return NextResponse.json({ nonce });
}
