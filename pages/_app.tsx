import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
