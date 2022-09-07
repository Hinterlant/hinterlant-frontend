import "@styles/globals.css";
import type { AppProps } from "next/app";

function IgoApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default IgoApp;
