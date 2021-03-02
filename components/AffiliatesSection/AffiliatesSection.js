import Image from "next/image";
import Text from "../Text";
import React from "react";
import styles from "./AffiliatesSection.module.css";
import sectionStyles from "../../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import SbEditable from "storyblok-react";

const AffiliatesSection = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <section id='Affiliates' className={`${sectionStyles.section}mb-80`}>
        <div>
          <Text size='h1' custom='font-bold text-center mb-20 overflow-hidden'>
            {blok.title}
          </Text>
        </div>

        <div className='space-y-10 '>
          {blok.universities.map((image, index) => (
            <Fade left key={index}>
              <div className={styles.affiliateBox}>
                <Image
                  priority={true}
                  key={image.id}
                  src={image.filename}
                  alt={image.alt}
                  width={image.filename.split("/")[5].split("x")[0] / 1.5}
                  height={image.filename.split("/")[5].split("x")[1] / 1.5}
                  layout='intrinsic'
                />
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </SbEditable>
  );
};

export default AffiliatesSection;
