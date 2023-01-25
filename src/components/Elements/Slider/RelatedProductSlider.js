import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import { useIntalnetContext } from "../../../hooks/useIntalnetContext";
import { ProductInfoSlider } from "./ProductInfoSlider";

const ProductSlider = () => {
  const { getProductCardApi } = useIntalnetContext();
  return (
    <div className="rel-products-active swiper-container">
      <div className="swiper-wrapper">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          autoplaydisableoninteraction={"false"}
          loop={true}
          breakpoints={{
            575: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {getProductCardApi.map((productCard) => (
            <SwiperSlide>
              <ProductInfoSlider productCard={productCard} />
            </SwiperSlide>
          ))}
          ;
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
