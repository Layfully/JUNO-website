import Image from "next/image";
import Text from "../Text";
import React from "react";
import styles from "./HomeSection.module.css";
import sectionStyles from "../../styles/Home.module.css";
import TypeIt from "typeit-react";

class HomeSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        {
          src: "/d-meson.png",
          alt: "d-meson",
          width: 1130,
          height: 1200,
        },
        {
          src: "/j-psi.png",
          alt: "j/psi",
          width: 537,
          height: 1824,
        },
        {
          src: "/keon.png",
          alt: "keon",
          width: 1354,
          height: 1042,
        },
      ],
    };
  }

  render() {
    return (
      <section id='Home' className={`${sectionStyles.section} flex-col`}>
        <header className={styles.titleContainer}>
          <Text size='h1' custom='font-title'>
            <span className=' tracking-wider'>
              J/<span style={{ fontSize: "4.875rem" }}>ψ</span>
            </span>{" "}
            <span className={styles.customUnderline}>U</span>nder Observation
            ...
          </Text>
          <Text size='body' color='orange'>
            <TypeIt
              options={{
                speed: 100,
                cursorSpeed: 600,
                lifeLike: true,
                waitUntilVisible: true,
                cursorChar:
                  "<div class='bg-white absolute opacity-80' style='width:8px; top:10px; bottom:10px; right:-10px;'></div>",
              }}
              getBeforeInit={(instance) => {
                instance
                  .type("The ultimate Particle Pyhs")
                  .pause(45)
                  .delete(3)
                  .type("hysics experience.")
                  .move(12);

                return instance;
              }}></TypeIt>
          </Text>
        </header>
        <div className={styles.particleContainer}>
          {this.state.images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              layout='intrinsic'
            />
          ))}
        </div>
      </section>
    );
  }
}

export default HomeSection;
