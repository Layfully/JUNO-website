import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  Keyboard,
} from "swiper";
import Text from "../Text";
import styles from "./Slider.module.css";

SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade, Keyboard]);

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      descriptions: [
        {
          image: "/robert.jpg",
          name: "Robert",
          university: "Pedagogical University of Cracow",
          interests: "game development, music",
          tasks: "3D modelling, social media",
          joined:
            "I got an e-mail from Łukasz about the project, and told to myself Why not? It doesn't matter that I don't know much about physics, right? Right???",
        },
        {
          image: "/kamil.png",
          name: "Kamil",
          university: "Pedagogical University of Cracow",
          interests: "Computer science, games",
          tasks: "programming, 3D modeling",
          joined:
            "Adrian told me that there are big things in physics that need to be told",
        },
        {
          image: "/sarah.jpg",
          name: "Sarah",
          university: "University of Bonn",
          interests: "particle physics and science communication",
          tasks: "project organisation, story board",
          joined: "Stupid idea of Naomi and me",
        },
        {
          image: "/naomi.jpg",
          name: "Naomi",
          university: "University of Bonn",
          interests: "particle physics, public outreach",
          tasks: "project organisation, script",
          joined:
            "Sarah and I thought it would be a great idea to start a VR-Project without any experience in 3D modelling. :)",
        },
      ],
    };
  }

  componentDidMount() {
    document
      .getElementsByClassName("swiper-button-next")[0]
      .classList.add(styles.customSwiperNextButton);
    document
      .getElementsByClassName("swiper-button-prev")[0]
      .classList.add(styles.customSwiperNextButton);
  }

  render() {
    return (
      <>
        <Swiper
          spaceBetween={200}
          slidesPerView={1}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          effect='fade'
          loop={true}
          keyboard={true}
          navigation
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet ${styles.customBullet}`,
            bulletActiveClass: `swiper-pagination-bullet-active ${styles.customActiveBullet}`,
          }}>
          {this.state.descriptions.map((description, index) => (
            <SwiperSlide key={index}>
              <div className=' bg-black relative h-120 sm:h-160'>
                <img src={description.image} className={styles.image}></img>
                <div className={styles.overlay}>
                  <div className={styles.overlayTextWrapper}>
                    <Text size='sm' custom='text-opacity-90 pb-3'>
                      {description.university}
                    </Text>
                    <Text size='h2' custom='text-opacity-90 pb-3'>
                      {description.name}
                    </Text>
                    <Text size='sm' custom='text-opacity-90 font-bold mb-2'>
                      Tasks: {description.tasks}
                    </Text>
                    <Text size='sm' custom='text-opacity-90 font-bold mb-2'>
                      Interests: {description.interests}
                    </Text>
                    <Text size='base' custom='text-opacity-90 font-bold'>
                      How I joined the project:{" "}
                      <q className='italic'>{description.joined}</q>
                    </Text>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
}

export default Slider;
