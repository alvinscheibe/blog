import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body className={'text-base text-black dark:text-white dark:bg-slate-900'}>
          <Main />
          <NextScript />
          {/*<script type="text/javascript" src="/app.js"></script>*/}
        </body>
      </Html>
    );
  }
}