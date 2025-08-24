import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TonConnectUIProvider manifestUrl={process.env.NEXT_PUBLIC_TONCONNECT_MANIFEST_URL || ''}>
      <Component {...pageProps} />
    </TonConnectUIProvider>
  );
}
