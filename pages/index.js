import styles from "../styles/Home.module.css";
import Menu from "../components/Menu/Menu";
import Text from "../components/Text";
import ParticlesWrapper from "../components/ParticlesWrapper";
import HomeSection from "../components/HomeSection/HomeSection";
import StorySection from "../components/StorySection/StorySection";
import TeaserSection from "../components/TeaserSection/TeaserSection";
import ProgressSection from "../components/ProgressSection/ProgressSection";
import AffiliatesSection from "../components/AffiliatesSection/AffiliatesSection";
import ContactForm from "../components/ContactForm/ContactForm";
import { FooterBackground } from "../components/Svg";
import Slider from "../components/Slider/Slider";
import sectionStyles from "./../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <ParticlesWrapper />

      <div className='bg-transparent overflow-x-hidden'>
        <header>
          <Menu />
        </header>
        <main className={styles.main}>
          <HomeSection />
          <StorySection />
          <TeaserSection />
          <ProgressSection step={1} />
          <ContactForm subject='Hello JUNO Team!' />
          <section id='Ourteam' className={sectionStyles.section}>
            <Slider />
          </section>
          <AffiliatesSection />
        </main>

        <footer className={styles.footerContainer} id='About'>
          <FooterBackground />
          <div className={styles.footer}>
            <Text size='h1' custom='font-bold pt-16 pb-8'>
              <span className={styles.customUnderline}>Le</span>arn more about:
            </Text>
            <Text size='h2' custom='font-bold my-8'>
              World of particle physics
            </Text>
            <ul className={`${styles.list} ${styles.listBullet} text-left`}>
              <li>
                <Text hover>
                  <a href='https://home.cern/science/physics'>
                    Particle Physics at CERN
                  </a>
                </Text>
              </li>
              <li>
                <Text hover>
                  <a href='https://atlas.cern/discover/physics'>
                    Particle Physics at ALTAS
                  </a>
                </Text>
              </li>
              <li>
                <Text hover>
                  <a href='https://home.cern/science/physics/standard-model'>
                    The Standard Model of Particle Physics
                  </a>
                </Text>
              </li>
            </ul>
            <Text size='h2' custom='font-bold my-8'>
              Laboratories that discovered J/ψ
            </Text>
            <ul className={`${styles.list} ${styles.listBullet} text-left`}>
              <li>
                <Text hover>
                  <a href='https://www6.slac.stanford.edu/about/slac-overview'>
                    SLAC - Stanford Linear Accelerator Center
                  </a>
                </Text>
              </li>
              <li>
                <Text hover>
                  <a href='https://www6.slac.stanford.edu/about/slac-history'>
                    History of SLAC
                  </a>
                </Text>
              </li>
              <li>
                <Text hover>
                  <a href='https://www.bnl.gov/about/w'>
                    BNL - Brookhaven National Laboratory
                  </a>
                </Text>
              </li>
              <li>
                <Text hover>
                  <a href='https://www.bnl.gov/about/history/discoveries.php'>
                    History of discoveries at BNL
                  </a>
                </Text>
              </li>
            </ul>
            <Text size='h2' custom='font-bold my-8'>
              Stay up to date:
            </Text>
            <div className={styles.linkContainer}>
              <Text color='orange' size='body-base' hover>
                <a href='https://www.symmetrymagazine.org/'>
                  Symmetry Magazine
                </a>
              </Text>
              <Text color='orange' size='body-base' hover>
                <a href='https://www.quantamagazine.org/tag/particle-physics/'>
                  Quanta Maganizne
                </a>
              </Text>
              <Text color='orange' size='body-base' hover>
                <a href='https://www.nature.com/subjects/particle-physics'>
                  Nature Research
                </a>
              </Text>
              <Text color='orange' size='body-base' hover>
                <a href='https://news.fnal.gov/fermilab-at-work/'>
                  Fermilab at Work
                </a>
              </Text>
              <Text color='orange' size='body-base' hover>
                <a href='https://cms.cern/'>CMS</a>
              </Text>
              <Text color='orange' size='body-base' hover>
                <a href='https://particleadventure.org/'>Quiz</a>
              </Text>
            </div>
            <Text size='body-base' custom='text-center pt-14 pb-4'>
              2021 &#169; Juno
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
}
