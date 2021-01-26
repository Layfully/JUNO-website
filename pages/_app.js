import '../styles/globals.css'
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
