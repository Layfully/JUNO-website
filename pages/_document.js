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
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Alegreya+SC&display=swap'
            rel='stylesheet'
          />
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
