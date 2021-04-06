import React, { createRef, useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import SbEditable from "storyblok-react";

const TeaserSection = ({ blok }) => {
  const [showTeaser, setShowTeaser] = useState(false);
  const teaserContainer = createRef();

  useEffect(() => {
    const teaserObserver = new IntersectionObserver(onTeaserIntersection, {
      rootMargin: "100px 0px",
      threshold: 0.25,
    });

    if (window && "IntersectionObserver" in window) {
      if (teaserContainer && teaserContainer.current) {
        teaserObserver.observe(teaserContainer.current);
      }
    } else {
      loadTeaser();
    }
  }, [teaserContainer]);

  function onTeaserIntersection(entries, observer) {
    if (!entries || entries.length <= 0) {
      return;
    }

    if (entries[0].isIntersecting) {
      setShowTeaser(true);
      observer.disconnect();
    }
  }

  return (
    <SbEditable content={blok}>
      <section id='Teaser' className={styles.section}>
        <div className={styles.teaserContainer} ref={teaserContainer}>
          {showTeaser ? (
            <iframe
              title={blok.title}
              className={styles.teaser}
              src={blok.video_link.url}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
          ) : undefined}
        </div>
      </section>
    </SbEditable>
  );
};

export default TeaserSection;
