import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation } from 'swiper';
import { SLIDER_GAP, SLIDER_WIDTH } from '../../utils/constants';

const Slider = ({ photos }) => (
  <Swiper
    slidesPerView={1}
    spaceBetween={SLIDER_GAP}
    width={SLIDER_WIDTH}
    navigation={true}
    modules={[Navigation]}
    className={`${styles.container} grid g-0`}
  >
    {photos.map((photo, index) => (
      <SwiperSlide key={photo._id}>
        <Image
          className={styles.image}
          src={photo.url}
          alt="Фото не загружено"
          placeholder="blur"
          blurDataURL="../../images/stock-default.webp"
          priority={index < 2 ? true : false}
          fill
          sizes="(max-width: 466px) 100vw, 33vw"
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Slider;
