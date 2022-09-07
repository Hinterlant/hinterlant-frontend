import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <title>IGOPAD</title>
      <body>
        <Main />
        <NextScript />
        {/* Core JS */}
        <Script src="/js/vendor/core.min.js" strategy="lazyOnload"></Script>

        {/* Boostrap */}
        <Script src="/js/vendor/popper.min.js" strategy="lazyOnload"></Script>
        <Script
          src="/js/vendor/bootstrap.min.js"
          strategy="lazyOnload"
        ></Script>

        {/* Plugins */}
        <Script src="/js/vendor/all.min.js" strategy="lazyOnload"></Script>
        <Script src="/js/vendor/gallery.min.js" strategy="lazyOnload"></Script>
        <Script src="/js/vendor/slider.min.js" strategy="lazyOnload"></Script>
        <Script
          src="/js/vendor/countdown.min.js"
          strategy="lazyOnload"
        ></Script>
        <Script src="/js/vendor/shuffle.min.js" strategy="lazyOnload"></Script>

        <Script src="/js/main.js" strategy="lazyOnload"></Script>
      </body>
    </Html>
  );
}
