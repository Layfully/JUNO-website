import Document, { Html, Head, Main, NextScript } from "next/document";
import StoryblokService from "../utils/storyblok-service";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const lang = ctx.query.language || "en";
    return { ...initialProps, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <link
            rel='preload'
            as='font'
            href='/fonts/Lekton.woff2'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            as='font'
            href='/fonts/AlegreyaSC.woff2'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            as='font'
            href='/fonts/Lekton-Bold.woff2'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link rel='stylesheet ' href='/fonts/fonts.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
          {StoryblokService.bridge()}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
