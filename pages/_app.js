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
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
