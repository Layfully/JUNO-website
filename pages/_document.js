import Document, { Html, Head, Main, NextScript } from "next/document";
import StoryblokService from "../utils/storyblok-service";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Alegreya+SC&display=swap'
            rel='stylesheet'
          />

          <link rel='preload' href='/fonts/Lekton/Lekton.otf' as='font' />
          <link rel='preload' href='/fonts/Lekton/Lekton-Bold.otf' as='font' />
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
