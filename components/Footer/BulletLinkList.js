import Text from "../Text";
import SbEditable from "storyblok-react";
import styles from "../../styles/Home.module.css";

const BulletLinkList = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div>
        <Text size='h2' custom='font-bold my-8'>
          {blok.header}
        </Text>

        <ul className={`${styles.list} ${styles.listBullet} text-left`}>
          {blok.links.map((link) => (
            <li key={link._uid}>
              <Text hover>
                <a rel='nofollow noreferrer noopener' href={link.href}>
                  {link.title}
                </a>
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </SbEditable>
  );
};

export default BulletLinkList;
