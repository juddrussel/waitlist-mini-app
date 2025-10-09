import { NextResponse } from 'next/server';
import { createPublicClient, http } from 'viem';
import { base, baseSepolia } from 'viem/chains';
import { useNonceStore } from '../nonce/route';

const nonces = useNonceStore();
const client = createPublicClient({ chain: baseSepolia, transport: http() });

export async function POST(req: Request) {
  try {
    const { address, message, signature } = await req.json();

    // 1. Validate nonce
    const nonceMatch = message.match(/at (\w{32})$/);
    const nonce = nonceMatch?.[1];
    if (!nonce || !nonces.delete(nonce)) {
      return NextResponse.json({ error: 'Invalid or reused nonce' }, { status: 400 });
    }

    // 2. Verify message signature
    const valid = await client.verifyMessage({ address, message, signature });
    if (!valid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    // 3. Create JWT/session (placeholder)
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
