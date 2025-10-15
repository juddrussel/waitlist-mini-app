import { useState } from 'react';
import { EIP1193Provider } from 'viem';
import { BaseError, ConnectorAlreadyConnectedError, useConnect } from 'wagmi';
interface WalletData {
    signIn: () => Promise<void>;
    isLoading: boolean;
}

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
            const provider = baseAccountConnector.provider as EIP1193Provider;

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
            if (!capabilities?.signInWithEthereum) {
                throw new Error("signInWithEthereum capability missing");
            }
            const { message, signature } = capabilities.signInWithEthereum

            // Send to backend for verification
            await fetch('/auth/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ address, message, signature })
            })
        } catch (err) {
            if (err instanceof ConnectorAlreadyConnectedError) {
                console.log("Already Signed in");
            } else if (err instanceof BaseError && (err as any).code === -32603) {
                window.location.href = "../signin";
            } else if (err instanceof BaseError && (err as any).code === 4001) {
                window.location.href = "../signin";
            } else {
                console.error("Unknown error:", err);
            }
        } finally {
            setLoading(false)
        }
    }
    return { signIn, isLoading };
}