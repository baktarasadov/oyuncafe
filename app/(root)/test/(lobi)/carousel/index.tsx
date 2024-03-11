"use client";
import React, { memo } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { carouselData } from "./data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./assets/style/styles.module.css";

import CarouselItem from "../carouselItem";

const TestCarousel: React.FunctionComponent = () => {
  return (
    <div>
      <Swiper
        className={`${styles.mainContainer}`}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          // Ekran 1024 pikselden genişse, 5 slider göster
          1024: {
            slidesPerView: 5,
          },
          // Ekran 768 pikselden genişse, 3 slider göster
          768: {
            slidesPerView: 4,
          },
          // Diğer durumlarda, 1 slider göster
          0: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        scrollbar={{ draggable: true }}
      >
        <div className={`${styles.mt20}`}>
          {carouselData.map((data) => (
            <SwiperSlide className={`${styles.slider}`} key={data.id}>
              <CarouselItem data={data} />
            </SwiperSlide>
          ))}
        </div>

        {/* Navigasyon düğmeleri */}
        <div className={`${styles.swiperbuttonprev} swiper-button-prev`}></div>
        <div className={`${styles.swiperbuttonnext} swiper-button-next`}></div>
      </Swiper>
    </div>
  );
};

export default memo(TestCarousel);
