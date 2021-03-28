import React from 'react';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // esse aqui eh o template

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          {/* essa tag head corresponde à tag head do html, e é possivel fazer as mesmas */}
          {/* coisas que num cabeçalho html, como definir o charset, importar fontes, etc */}
          {/* entretanto, esse head é global, ou seja, é usado em todas as páginas do site, */}
          {/* sem exceção */}

          <meta charSet="utf-8" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* as tags main e nextscript servem pra coisas de renderização que eu não entendo */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
