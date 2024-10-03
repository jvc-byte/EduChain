import { http, createConfig } from 'wagmi';
import { base, mainnet, sepolia } from 'wagmi/chains';
import { coinbaseWallet, metaMask } from 'wagmi/connectors';

// Configure Wagmi with the Base chain and Coinbase Wallet
export const wagmiConfig = createConfig({
  chains: [base, mainnet, sepolia], // Specify Base as the chain
  multiInjectedProviderDiscovery: false, // Disable automatic provider discovery for multi-injected wallets
  connectors: [
    coinbaseWallet({
      appName: 'EduChain', // Replace with your actual app name
      preference: 'all', // Use 'smartWalletOnly' or 'all' for EOA support
      version: '4', // Version of the wallet connector
    }),
    metaMask(),
  ],
  ssr: true, // Enable server-side rendering
  transports: {
    [base.id]: http(), // Use HTTP transport for Base chain
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
