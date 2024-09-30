import { http, createConfig } from 'wagmi';
import { base } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

// Configure Wagmi with the Base chain and Coinbase Wallet
export const wagmiConfig = createConfig({
  chains: [base], // Specify Base as the chain
  multiInjectedProviderDiscovery: false, // Disable automatic provider discovery for multi-injected wallets
  connectors: [
    coinbaseWallet({
      appName: 'yourAppName', // Replace with your actual app name
      preference: 'smartWalletOnly', // Use 'smartWalletOnly' or 'all' for EOA support
      version: '4', // Version of the wallet connector
    }),
  ],
  ssr: true, // Enable server-side rendering
  transports: {
    [base.id]: http(), // Use HTTP transport for Base chain
  },
});
