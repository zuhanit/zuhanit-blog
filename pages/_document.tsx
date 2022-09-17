import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <title>Zuhanit</title>
        <meta charSet="utf-8"></meta>
        <meta
          name="naver-site-verification"
          content="2ca8f890c6c33a763d8e72430ac18dd916c0ee08"
        />
        <meta
          name="google-site-verification"
          content="x6O2ooGrTYxU6AMm-9keopUnGH4wbgA4gvoLhzrIpro"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
