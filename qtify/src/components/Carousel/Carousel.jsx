import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

function Carousel({ data = [], renderComponent }) {
  return (
    <div className={styles.carouselWrapper}>
      <button className={`swiper-button-prev ${styles.customNav}`}>
        <ArrowBack />
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1440: { slidesPerView: 7 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id || item.slug}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      <button className={`swiper-button-next ${styles.customNav}`}>
        <ArrowForward />
      </button>
    </div>
  );
}

export default Carousel;