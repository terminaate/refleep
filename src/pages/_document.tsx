import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel={'shortcut icon'} href={'/favicon.svg'} />
        <meta name={'title'} content={'Refleep'} />
        <meta name={'description'} content={'Refleep'} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
