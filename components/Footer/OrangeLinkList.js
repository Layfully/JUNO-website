import Text from "../Text";
import SbEditable from "storyblok-react";
import styles from "../../styles/Home.module.css";

const OrangeLinkList = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div>
        <Text size='h2' custom='font-bold my-8'>
          {blok.header}
        </Text>

        <div className={styles.linkContainer}>
          {blok.links.map((link) => (
            <Text color='orange' size='body-base' hover key={link._uid}>
              <a href={link.href} rel='nofollow noreferrer noopener'>
                {link.title}
              </a>
            </Text>
          ))}
        </div>
      </div>
    </SbEditable>
  );
};

export default OrangeLinkList;
