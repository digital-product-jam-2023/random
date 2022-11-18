import { Head, Html, Main, NextScript } from "next/document"

// You shouldn't need to touch this file, unless you have specific reasons to
// modify the HTML outside of our app. What we have here is just the Next.js default
// If we deleted this file the app will work identically
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Hebrew:wght@900&display=swap"
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
