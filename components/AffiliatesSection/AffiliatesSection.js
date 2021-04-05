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
      <section id='Affiliates' className={`mb-80`}>
        <div>
          <Text size='h1' custom='font-bold text-center mb-20 overflow-hidden'>
            {blok.title}
          </Text>
        </div>

        <div className='space-y-10 w-full sm:w-2/3 m-auto'>
          {blok.universities.map((image, index) => (
            <Fade left key={index}>
              <div className={styles.affiliateBox}>
                <Image
                  key={image.id}
                  src={image.image_file.filename.split("/upload/")[1]}
                  alt={image.image_file.alt}
                  width={image.width / 1.5}
                  height={image.height / 1.5}
                  layout='responsive'
                  sizes='80vw'
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
