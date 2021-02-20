import "swiper/swiper-bundle.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window != "undefined") {
      smoothscroll.polyfill();
    }
  }, []);
  return (
    <>
      <Head>
        <title>JUNO</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
