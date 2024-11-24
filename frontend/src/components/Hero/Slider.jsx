import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { categories } from "/src/mock.json";
import Category from "./Category";

const Slider = (props) => {

  const { slidesPerView } = props;

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={false}
        pagination={false}
        slidesPerView={slidesPerView}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <Category name={category.name} />
          </SwiperSlide>
        ))}
        </Swiper>
    </>
  );
};

export default Slider;
