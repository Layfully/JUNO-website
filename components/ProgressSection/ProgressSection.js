import React from "react";
import Fade from "react-reveal/Fade";
import PropTypes from "prop-types";
import styles from "./ProgressSection.module.css";
import sectionStyles from "../../styles/Home.module.css";
import Text from "../Text";
import SbEditable from "storyblok-react";

const ProgressSection = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <section id='Progress' className={sectionStyles.section}>
        <ol className={styles.progressBar}>
          {blok.milestones.map((milestone, index) => (
            <li
              key={milestone._uid}
              className={`${styles.elementWrapper} ${
                index <= blok.finished ? styles.elementWrapperActive : ""
              }`}>
              <div className={styles.element}>
                <Fade bottom>
                  <div className={styles.elementBox}>
                    <Text color='true-orange' custom='text-center'>
                      {milestone.content}
                    </Text>
                  </div>
                </Fade>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </SbEditable>
  );
};

export default ProgressSection;
