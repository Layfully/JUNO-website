import Image from "next/image";
import Text from "../Text";
import React from "react";
import styles from "./HomeSection.module.css";
import sectionStyles from "../../styles/Home.module.css";
import TypeIt from "typeit-react";
import SbEditable from "storyblok-react";
import LanguageSelector from "../LanguageSelector";

const HomeSection = ({ blok, language, languageList }) => {
  return (
    <SbEditable content={blok}>
      <section
        id='Home'
        className={`${sectionStyles.section} flex-col`}
        style={{ marginTop: 0 }}>
        <header className={styles.titleContainer}>
          <Text size='h1' custom='font-title'>
            <span className=' tracking-wider'>
              J/<span style={{ fontSize: "4.875rem" }}>ψ</span>
            </span>{" "}
            <span className={styles.customUnderline}>U</span>nder Observation
            ...
          </Text>
          <TypeIt
            className='text-orange text-2xl leading-none'
            getBeforeInit={(instance) => {
              instance.type(blok.project_subtitle);
              return instance;
            }}
            options={{
              speed: 100,
              startDelay: 0,
              cursorSpeed: 600,
              lifeLike: true,
              waitUntilVisible: true,
              element: "h2",
              cursorChar:
                "<div class='bg-white absolute opacity-80' style='width:8px; height:20px; top:calc(50% - 10px); right:-10px;'></div>",
            }}
          />
        </header>
        <div className={styles.particleContainer}>
          {blok.hero_images.map((image) => (
            <Image
              priority={true}
              key={image.id}
              src={image.image_file.filename.split("/upload/")[1]}
              alt={image.image_file.alt}
              width={image.width}
              height={image.height}
              layout='intrinsic'
            />
          ))}
        </div>
        <LanguageSelector language={language} languageList={languageList} />
      </section>
    </SbEditable>
  );
};

export default HomeSection;
