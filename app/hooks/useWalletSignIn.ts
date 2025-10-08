'use client';

import { getCryptoKeyAccount } from '@base-org/account';
import { useState } from 'react';
import { ConnectorAlreadyConnectedError, useConnect } from 'wagmi';
interface WalletData {
    account: string | null;
    signIn: () => Promise<void>;
}
export default function useWalletSignIn(): WalletData {
    const [account, setAccount] = useState<string | null>(null);
    const { connectAsync, connectors } = useConnect()
    const signIn = async () => {

        const baseAccountConnector = connectors.find(
            connector => connector.id === 'baseAccount'
        )

        if (!baseAccountConnector) return

        try {
            // Generate nonce
            const nonce = window.crypto.randomUUID().replace(/-/g, '')

            // Connect and get provider
            await connectAsync({ connector: baseAccountConnector })
            const provider = baseAccountConnector.provider as any;

            // Perform SIWE authentication
            const authResult = await provider.request({
                method: 'wallet_connect',
                params: [{
                    version: '1',
                    capabilities: {
                        signInWithEthereum: {
                            nonce,
                            chainId: '0x2105'
                        }
                    }
                }]
            })

            // Extract and verify signature
            const { accounts } = authResult
            const { address, capabilities } = accounts[0]
            const { message, signature } = capabilities.signInWithEthereum

            // Send to backend for verification
            await fetch('/auth/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ address, message, signature })
            })
        } catch (err) {
            const account = await getCryptoKeyAccount();
            if (err instanceof ConnectorAlreadyConnectedError) {
                setAccount(account.account?.id ?? null);
                console.log("Already Signed in");
            } else {
                console.error('Authentication failed:', err)
            }
        }
    }
    return { account, signIn };
}