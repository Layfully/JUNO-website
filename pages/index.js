import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu/Menu'
import Text from '../components/Text'
import { FooterBackground } from '../components/Svg'


export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Menu />
      </header>
      <main className={styles.main}>
        <header id="Home" className="text-center space-y-4">
          <Text size="h1" custom="font-title">
            J/ψ <span className={styles.customUnderline}>U</span>nder Observation ...
          </Text>
          <Text size="h2" color="orange">
            Physics story explained easy
          </Text>
        </header>
        <section id="Story">
          <ul className={`${styles.list} ${styles.listStar} space-y-8`}>
            <li><Text>J/ψ UNder Observation (JUNO) is a visualization of the J/ψ particle discovery in virtual reality (VR). </Text></li>
            <li><Text>The JUNO adventure introduces you to the exciting world of particle physics and can be enjoyed using the Google Cardboard coupled with any smartphone. It intends to give insight into the groundbreaking physics experiments involved in the J/ψ discovery in 1974 and highlights their different approaches.
            </Text></li>
            <li><Text>In a second story line, you can experiencet the subatomic particles being protagonists themselves, as they question the social order of their world.
Join J/ψ and its friends along in their virtual revolution and get to know the tiny particles that build the matter surrounding us!</Text></li>
          </ul>
        </section>

        <section id="Teaser">
          <div className={styles.teaserContainer}>
            <iframe className={styles.teaser} src="https://www.youtube-nocookie.com/embed/wjs4eJPYDzQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
        </section>

        <div className="text-3xl text-orange text-opacity-60">
          Visualization of Data-Acquisition at BNL
        </div>
      </main>

      <footer className={styles.footerContainer} id="About">
        <FooterBackground />
        <div className={styles.footer}>
          <Text size="h1" custom="font-bold pt-16 pb-8"><span className={styles.customUnderline}>Le</span>arn more about:</Text>
          <Text size="h2" custom="font-bold my-8">World of particle physics</Text>
          <ul className={`${styles.list} ${styles.listBullet} text-left`}>
            <li><Text hover><a href="https://home.cern/science/physics">Particle Physics at CERN</a></Text></li>
            <li><Text hover><a href="https://atlas.cern/discover/physics">Particle Physics at ALTAS</a></Text></li>
            <li><Text hover><a href="https://home.cern/science/physics/standard-model">The Standard Model of Particle Physics</a></Text></li>
          </ul>
          <Text size="h2" custom="font-bold my-8">Laboratories that discovered J/ψ</Text>
          <ul className={`${styles.list} ${styles.listBullet} text-left`}>
            <li><Text hover><a href="https://www6.slac.stanford.edu/about/slac-overview">SLAC - Stanford Linear Accelerator Center</a></Text></li>
            <li><Text hover><a href="https://www6.slac.stanford.edu/about/slac-history">History of SLAC</a></Text></li>
            <li><Text hover><a href="https://www.bnl.gov/about/w">BNL - Brookhaven National Laboratory</a></Text></li>
            <li><Text hover><a href="https://www.bnl.gov/about/history/discoveries.php">History of discoveries at BNL</a></Text></li>
          </ul>
          <Text size="h2" custom="font-bold my-8">Stay up to date:</Text>
          <div className={styles.linkContainer}>
            <Text color="orange" size="body-base" hover><a href="https://www.symmetrymagazine.org/">Symmetry Magazine</a></Text>
            <Text color="orange" size="body-base" hover><a href="https://www.quantamagazine.org/tag/particle-physics/">Quanta Maganizne</a></Text>
            <Text color="orange" size="body-base" hover><a href="https://www.nature.com/subjects/particle-physics">Nature Research</a></Text>
            <Text color="orange" size="body-base" hover><a href="https://news.fnal.gov/fermilab-at-work/">Fermilab at Work</a></Text>
            <Text color="orange" size="body-base" hover><a href="https://cms.cern/">CMS</a></Text>
            <Text color="orange" size="body-base" hover><a href="https://particleadventure.org/">Quiz</a></Text>
          </div>
          <Text size="body-base" custom="text-center pt-14 pb-4">2021 &#169; Juno</Text>
        </div>
      </footer>
    </div >
  )
}
