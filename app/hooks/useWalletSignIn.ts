'use client';
import { useState } from 'react';
import { createPublicClient } from 'viem';
import { mainnet } from 'viem/chains';
import { ConnectorAlreadyConnectedError, http, useConnect } from 'wagmi';
interface WalletData {
    signIn: () => Promise<void>;
    isLoading: boolean;
}
const client = createPublicClient({
    chain: mainnet,
    transport: http(),
})
export default function useWalletSignIn(): WalletData {
    const [isLoading, setLoading] = useState<boolean>(true);
    const { connectAsync, connectors } = useConnect()
    const signIn = async () => {
        setLoading(true)
        const baseAccountConnector = connectors.find(
            connector => connector.id === 'baseAccount',
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
                            chainId: '0x14A34'
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
        } catch (err: any) {
            if (err instanceof ConnectorAlreadyConnectedError) {
                console.log("Already Signed in");
            } if (err.code == -32603) {
                window.location.href = '../signin'
            } if (err.code == 4001) {
                window.location.href = '../signin'
            }
        } finally {
            setLoading(false)
        }
    }
    return { signIn, isLoading };
}