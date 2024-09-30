// config.ts or a similar file

// Use `NODE_ENV` to determine the environment and set the base URL accordingly
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://onchain-app-template.vercel.app';

// Export your API Key from the environment variable
export const NEXT_PUBLIC_CDP_API_KEY = process.env.REACT_APP_NEXT_PUBLIC_CDP_API_KEY;

// Export your WalletConnect project ID from the environment variable
export const NEXT_PUBLIC_WC_PROJECT_ID = process.env.REACT_APP_NEXT_PUBLIC_WC_PROJECT_ID;
