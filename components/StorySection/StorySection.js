import Text from "../Text";
import React from "react";
import styles from "../../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import SbEditable from "storyblok-react";

const StorySection = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <section id='Story' className={styles.section}>
        <ul className={`${styles.list} ${styles.listStar} space-y-8`}>
          {blok.stories.map((story) => (
            <Fade bottom key={story._uid}>
              <li>
                <Text>{story.content}</Text>
              </li>
            </Fade>
          ))}
        </ul>
      </section>
    </SbEditable>
  );
};

export default StorySection;
