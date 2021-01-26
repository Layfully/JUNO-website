import '../styles/globals.css'
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';
// kick off the polyfill

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof (window) !== 'undefined') {
      smoothscroll.polyfill();
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
