import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  EffectCoverflow,
  Keyboard,
} from "swiper";
import Text from "../Text";
import styles from "./Slider.module.css";

SwiperCore.use([Autoplay, Navigation, EffectCoverflow, Keyboard]);

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
        {
          image: "/adrian.jpg",
          name: "Adrian",
          university: "Pedagogical University of Cracow",
          interests: "software development, math, guitar",
          tasks: "animation, programming",
          joined:
            "Got a message from student representative and figured out it will be a good way of learning something new.",
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
          slidesPerView={1}
          loopedSlides={3}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          effect='coverflow'
          loop={true}
          keyboard={true}
          navigation={true}
          autoHeight={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.38,
            },
            1280: {
              slidesPerView: 3,
            },
          }}>
          {this.state.descriptions.map((description, index) => (
            <SwiperSlide key={index}>
              <div className=' bg-black relative flex flex-col justify-center'>
                <img src={description.image} className={styles.image}></img>
                <div className='p-4 bg-customGray'>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
}

export default Slider;
