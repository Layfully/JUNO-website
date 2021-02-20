import Image from "next/image";
import Text from "../Text";
import React from "react";
import styles from "./AffiliatesSection.module.css";
import sectionStyles from "../../styles/Home.module.css";
import Fade from "react-reveal/Fade";

class AffiliatesSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        {
          src: "/barcelona.png",
          alt: "University of Barcelona",
          width: 665 / 1.5,
          height: 200 / 1.5,
        },
        {
          src: "/bonn.png",
          alt: "University of Bonn",
          width: 649 / 1.5,
          height: 251 / 1.5,
        },
        {
          src: "/indiana.png",
          alt: "Indiana University",
          width: 840 / 1.5,
          height: 201 / 1.5,
        },
        {
          src: "/cracow.png",
          alt: "Pedagogical University of Cracow",
          width: 200,
          height: 200,
        },
        {
          src: "/madrid.png",
          alt: "Complutense University of Madrid",
          width: 328 / 1.5,
          height: 328 / 1.5,
        },
      ],
    };
  }

  render() {
    return (
      <section
        id='Affiliates'
        className={`${sectionStyles.section} flex-col mb-80`}>
        <div>
          <Text size='h1' custom='font-bold text-center mb-20'>
            Universities involved
          </Text>
        </div>
        <div className='space-y-10'>
          {this.state.images.map((image, index) => (
            <Fade left key={index}>
              <div className={styles.affiliateBox}>
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  height={image.height}
                  width={image.width}
                  layout='intrinsic'
                />
              </div>
            </Fade>
          ))}
        </div>
      </section>
    );
  }
}

export default AffiliatesSection;
