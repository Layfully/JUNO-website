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
      <main className={styles.main, "pt-10"}>
        <header className="text-center space-y-4">
          <h1 className={styles.title, "text-4xl text-white text-opacity-50 font-title"}>
            J/ψ <span className="custom-underline">U</span>nder Observation ...
          </h1>
          <h2 className="text-2xl text-orange text-opacity-60 font-mono">Physics story explained easy</h2>
        </header>

        <ul className="list-star text-lg text-white text-opacity-50 font-mono">
          <li>J/psi UNder Observation (JUNO) is a visualization of the J/psi particle discovery in virtual reality
(VR). </li>
          <li>The JUNO adventure introduces the viewer into the exciting world of particle physics and
intends to excite people for the fascinating world of particle physics.</li>
          <li>Follow the J/psi along its virtual journey and get to know the tiny particles that build the matter surrounding us</li>
        </ul>

        <div className="text-3xl text-orange text-opacity-60 font-mono">
          Visualization of Data-Acquisition at BNL
        </div>
      </main>

      <footer className={styles.footer, "wave-container text-center relative"} id="about">
        <div className="absolute bottom-0">
          <FooterBackground />
        </div>
        <div className="relative px-8">
          <h1 className="text-6xl text-white text-opacity-50 font-mono font-bold mb-16 " ><span className="custom-underline">Le</span>arn more about:</h1>
          <h2 className="text-4xl text-white text-opacity-50 font-mono font-bold my-8">World of particle physics</h2>
          <ul className="list-bullet text-left ml-8">
            <li className="text-2xl text-white text-opacity-50 font-mono">Particle Physics at CERN</li>
            <li className="text-2xl text-white text-opacity-50 font-mono">Particle Physics at ALTAS</li>
            <li className="text-2xl text-white text-opacity-50 font-mono">The Standard Model of Particle Physics</li>
          </ul>
          <h2 className="text-4xl text-white text-opacity-50 font-mono font-bold my-8">Laboratories discovered J/ψ</h2>
          <ul className="list-bullet text-left ml-8">
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
