import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Carousel({ data = [], renderComponent }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      rewind={true}
      spaceBetween={20}
      slidesPerView={7}
      slidesPerGroup={1}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 5,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id || item.slug}>
          {renderComponent(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;