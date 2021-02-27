import SbEditable from "storyblok-react";
import { FooterBackground } from "../Svg";
import Text from "../Text";
import styles from "../../styles/Home.module.css";
import DynamicComponent from "../DynamicComponent";

const Footer = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <footer className={styles.footerContainer} id='About'>
        <FooterBackground />
        <div className={styles.footer}>
          <Text size='h1' custom='font-bold pt-16 pb-8'>
            <span className={styles.customUnderline}>
              {blok.header.slice(0, 2)}
            </span>
            {blok.header.slice(2)}
          </Text>
          {blok.link_lists.map((linkList) => (
            <DynamicComponent blok={linkList} key={linkList._uid} />
          ))}
          <Text size='body-base' custom='text-center pt-14 pb-4'>
            {blok.credits}
          </Text>
        </div>
      </footer>
    </SbEditable>
  );
};

export default Footer;
