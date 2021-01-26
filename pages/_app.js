import '../styles/globals.css'
import { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof (window) != 'undefined') {
      smoothscroll.polyfill();
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
