import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel={'icon'} type={'image/png'} sizes={'32x32'} href={'/favicon.png'} />
        </Head>
        <body className={'text-base text-black dark:text-white dark:bg-slate-900'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
