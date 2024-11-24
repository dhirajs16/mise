import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Slider = (props) => {

  const { slidesPerView, data, component: Component } = props;

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={false}
        pagination={false}
        slidesPerView={slidesPerView}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Component item={item} />
          </SwiperSlide>
        ))}
        </Swiper>
    </>
  );
};

export default Slider;
