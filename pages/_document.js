import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          {/* PWA primary color */}
          <meta name='theme-color' content='#0CB3A1' />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,600,700|Roboto:300,400,500,700&display=swap" rel="stylesheet" />
        </Head>
        <body dir='ltr'>
          <Main />
          <NextScript />
        </body>

        <style global jsx>{`
          html {
            height: 100%;
          }

          body,
          body > div:first-child,
          div#__next {
            height: 100%;
          }

          div#__next > div {
            minHeight: 100%;
          }
        `}</style>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
