import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu/Menu'
import { FooterBackground } from '../components/Svg'


export default function Home() {
  return (
    <div className={"bg-black overflow-x-hidden"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Menu />
      </header>
      <main className={styles.main}>
        <header className="text-center space-y-4">
          <h1 className={"font-title"}>
            J/ψ <span className={styles.customUnderline}>U</span>nder Observation ...
          </h1>
          <h2 className="orangeText">Physics story explained easy</h2>
        </header>
        <section id="Story">
          <ul className={`${styles.list} ${styles.listStar} space-y-8`}>
            <li>J/ψ UNder Observation (JUNO) is a visualization of the J/ψ particle discovery in virtual reality (VR). </li>
            <li>The JUNO adventure introduces you to the exciting world of particle physics and can be enjoyed using the Google Cardboard coupled with any smartphone. It intends to give insight into the groundbreaking physics experiments involved in the J/ψ discovery in 1974 and highlights their different approaches.
            </li>
            <li>In a second story line, you can experiencet the subatomic particles being protagonists themselves, as they question the social order of their world.
Join J/ψ and its friends along in their virtual revolution and get to know the tiny particles that build the matter surrounding us!</li>
          </ul>
        </section>

        <section id="Teaser">
          <div className={styles.teaserContainer}>
            <iframe className={styles.teaser} src="https://www.youtube-nocookie.com/embed/wjs4eJPYDzQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </section>

        <div className="text-3xl text-orange text-opacity-60">
          Visualization of Data-Acquisition at BNL
        </div>
      </main>

      <footer className={styles.footerContainer} id="About">
        <FooterBackground />
        <div className={styles.footer}>
          <h1 className="font-bold pt-16 pb-8"><span className={styles.customUnderline}>Le</span>arn more about:</h1>
          <h2 className="whiteText font-bold my-8">World of particle physics</h2>
          <ul className={`${styles.list} ${styles.listBullet} text-left`}>
            <li>Particle Physics at CERN</li>
            <li>Particle Physics at ALTAS</li>
            <li>The Standard Model of Particle Physics</li>
          </ul>
          <h2 className="whiteText font-bold my-8">Laboratories discovered J/ψ</h2>
          <ul className={`${styles.list} ${styles.listBullet} text-left`}>
            <li>SLAC - Stanford Linear Accelerator Center</li>
            <li>History of SLAC</li>
            <li>BNL - Brookhaven National Laboratory</li>
            <li>History of discoveries at BNL</li>
          </ul>
          <h2 className="whiteText font-bold my-8">Stay up to date:</h2>
          <div className={`${styles.linkContainer} orangeText`}>
            <a>Symmetry Magazine</a>
            <a>Quanta Maganizne</a>
            <a>Nature Research</a>
            <a>Fermilab at Work</a>
            <a>CMS</a>
            <a>Quiz</a>
          </div>
          <p className="whiteText text-center pt-14 pb-4">2021 &#169; Juno</p>
        </div>
      </footer>
    </div >
  )
}
