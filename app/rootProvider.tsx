
'use client'

import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './config/wagmi'
import { OnchainKitProvider } from '@coinbase/onchainkit'
import { baseSepolia } from 'viem/chains'

const queryClient = new QueryClient()

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider

          miniKit={{
            enabled: true,
          }}
          chain={baseSepolia}>
            {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

