import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default (props) => {
  const {slides, slidesPerView} = props

  return (
    <Swiper
      className="h-full w-full"
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}    >
      {slides.map((slide) => <SwiperSlide key={slide.id}>{slide.name}</SwiperSlide>)}
    </Swiper>
  );
};
