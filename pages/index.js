import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu/Menu'
import { FooterBackground } from '../components/Svg'


export default function Home() {
  return (
    <div className={styles.container, "bg-black overflow-x-hidden"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Menu />
      </header>
      <main className={styles.main}>
        <header className="text-center space-y-4">
          <h1 className={styles.title, "text-4xl text-white text-opacity-50 font-title"}>
            J/ψ <span className="custom-underline">U</span>nder Observation ...
          </h1>
          <h2 className="text-2xl text-orange text-opacity-60 font-mono">Physics story explained easy</h2>
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
            <iframe className={styles.teaser} src="https://www.youtube-nocookie.com/embed/wjs4eJPYDzQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section>

        <div className="text-3xl text-orange text-opacity-60 font-mono">
          Visualization of Data-Acquisition at BNL
        </div>
      </main>

      <footer className={styles.footer, "wave-container text-center relative mt-96"} id="About">
        <div className="absolute bottom-0">
          <FooterBackground />
        </div>
        <div className="relative px-8">
          <h1 className="text-6xl text-white text-opacity-50 font-mono font-bold mb-16 " ><span className="custom-underline">Le</span>arn more about:</h1>
          <h2 className="text-4xl text-white text-opacity-50 font-mono font-bold my-8">World of particle physics</h2>
          <ul className={`${styles.list} ${styles.listBullet} text-left`}>
            <li className="text-2xl text-white text-opacity-50 font-mono">Particle Physics at CERN</li>
            <li className="text-2xl text-white text-opacity-50 font-mono">Particle Physics at ALTAS</li>
            <li className="text-2xl text-white text-opacity-50 font-mono">The Standard Model of Particle Physics</li>
          </ul>
          <h2 className="text-4xl text-white text-opacity-50 font-mono font-bold my-8">Laboratories discovered J/ψ</h2>
          <ul className={`${styles.list} ${styles.listBullet} text-left`}>
            <li className="text-2xl text-white text-opacity-50 font-mono">SLAC - Stanford Linear Accelerator Center</li>
            <li className="text-2xl text-white text-opacity-50 font-mono">History of SLAC</li>
            <li className="text-2xl text-white text-opacity-50 font-mono">BNL - Brookhaven National Laboratory</li>
            <li className="text-2xl text-white text-opacity-50 font-mono">History of discoveries at BNL</li>
          </ul>
          <h2 className="text-4xl text-white text-opacity-50 font-mono font-bold my-8">Stay up to date:</h2>
          <div className="grid grid-cols-3 gap-4 text-left">
            <a className="text-2l text-orange text-opacity-60 font-mono font-bold">Symmetry Magazine</a>
            <a className="text-2l text-orange text-opacity-60 font-mono font-bold">Quanta Maganizne</a>
            <a className="text-2l text-orange text-opacity-60 font-mono font-bold">Nature Research</a>
            <a className="text-2l text-orange text-opacity-60 font-mono font-bold">Fermilab at Work</a>
            <a className="text-2l text-orange text-opacity-60 font-mono font-bold">CMS</a>
            <a className="text-2l text-orange text-opacity-60 font-mono font-bold ">Quiz</a>
          </div>
          <p className="text-2l text-white text-opacity-50 font-mono               py-14 pb-4">2021 &#169; Juno</p>
        </div>
      </footer>
    </div >
  )
}
