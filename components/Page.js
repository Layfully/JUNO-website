import DynamicComponent from "./DynamicComponent";
import SbEditable from "storyblok-react";
import styles from "../styles/Home.module.css";

const Page = ({ content, language, languageList }) => (
  <SbEditable content={content}>
    <div>
      <DynamicComponent blok={content.menu[0]} key={content.menu[0]._uid} />
      <div className={"background"}></div>
      <main className={styles.main}>
        {content.body.map((blok) => (
          <DynamicComponent
            blok={blok}
            key={blok._uid}
            language={language}
            languageList={languageList}
          />
        ))}
      </main>
    </div>
    <DynamicComponent blok={content.footer[0]} key={content.footer[0]._uid} />
  </SbEditable>
);

export default Page;
