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
import sectionStyles from "../../styles/Home.module.css";
import SbEditable from "storyblok-react";
import Image from "next/image";

SwiperCore.use([Autoplay, Navigation, EffectCoverflow, Keyboard]);

class Slider extends React.Component {
  constructor(props) {
    super(props);
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
      <SbEditable content={this.props.blok}>
        <section id='Ourteam' className={sectionStyles.section}>
          <Swiper
            slidesPerView={1}
            loopedSlides={3}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            effect='coverflow'
            loop={true}
            loopedSlides={3}
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
            {this.props.blok.slides.map((slide) => (
              <SwiperSlide key={slide._uid}>
                <div className=' bg-black relative flex flex-col justify-center'>
                  {slide.image.filename && (
                    <Image
                      src={slide.image.filename.split("/upload/")[1]}
                      alt={slide.image.alt}
                      width={1300}
                      height={1300}
                      className={styles.image}
                      layout='responsive'
                      sizes='60vw'></Image>
                  )}
                  <div className='p-4 bg-customGray'>
                    <Text size='sm' custom='text-opacity-90 pb-3'>
                      {slide.university}
                    </Text>
                    <Text size='h2' custom='text-opacity-90 pb-3'>
                      {slide.name}
                    </Text>
                    {slide.information.map((information) => (
                      <Text
                        key={information._uid}
                        size={information.text_size}
                        color='white'
                        custom='text-opacity-90 font-bold mb-2'>
                        {information.label} {information.text}
                      </Text>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </SbEditable>
    );
  }
}

export default Slider;
