import React from "react";
import styles from "../../styles/Home.module.css";
import SbEditable from "storyblok-react";

const TeaserSection = ({ blok }) => (
  <SbEditable content={blok}>
    <section id='Teaser' className={styles.section}>
      <div className={styles.teaserContainer}>
        <iframe
          className={styles.teaser}
          src={blok.video_link.url}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
      </div>
    </section>
  </SbEditable>
);

export default TeaserSection;
