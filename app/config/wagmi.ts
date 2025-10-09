// config/wagmi.ts
import { http, createConfig } from 'wagmi'
import { base, baseSepolia } from 'wagmi/chains'
import { baseAccount } from 'wagmi/connectors'


export const config = createConfig({
  chains: [baseSepolia],
  connectors: [
    baseAccount({
      appName: 'Sagana',
    })
  ],
  transports: {
    [baseSepolia.id]: http()
  },
})