import { http, createConfig } from 'wagmi';
import { base, mainnet, baseSepolia } from 'wagmi/chains';
import { coinbaseWallet, metaMask } from 'wagmi/connectors';

// Configure Wagmi with the Base chain and Coinbase Wallet
export const wagmiConfig = createConfig({
  chains: [base, mainnet, baseSepolia], // Specify Base as the chain
  multiInjectedProviderDiscovery: false, // Disable automatic provider discovery for multi-injected wallets
  connectors: [
    metaMask(),
    coinbaseWallet({
      appName: 'EduChain', // Replace with your actual app name
      preference: 'all', // Use 'smartWalletOnly' or 'all' for EOA support
      version: '4', // Version of the wallet connector
    }),
  ],
  ssr: true, // Enable server-side rendering
  transports: {
    [base.id]: http(), // Use HTTP transport for Base chain
    [mainnet.id]: http(),
    [baseSepolia.id]: http(
      'https://api.developer.coinbase.com/rpc/v1/base-sepolia/Q1XfWXgaOkk_wLG9V_p3Rogc3ybu6efj'
    ),
  },
});
