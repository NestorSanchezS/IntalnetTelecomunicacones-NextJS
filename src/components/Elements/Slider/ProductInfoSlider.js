import React from "react";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BASE_URL2 } from "../../constans/dominio";

export const ProductInfoSlider = ({ productCard }) => {
  const { id, name, price, previous_price, images, categories } = productCard;

  let imgPath = "/assets/img/images/shop.jpg";

  if (images?.length > 1) {
    imgPath = BASE_URL2 + images[0].path;
  }
  return (
    <SwiperSlide>
      <div className="shop-item text-center">
        {categories[0] === "promotion" && (
          <span className="fresh-sale">Promoción!</span>
        )}
        <div className="shop-thumb">
          <Link href={`/infoproduct/${id}`}>
            <a>
              <img src={imgPath} alt="img not found" />
            </a>
          </Link>
        </div>
        <div className="shop-item-content">
          <h6 className="title">
            <Link href={`/infoproduct/${id}`}>
              <a>{name}</a>
            </Link>
          </h6>
          <h3 className="price">
            <sup>$</sup>
            {price}
          </h3>
          <div className="shop-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <Link href={`/infoproduct/${id}`}>
            <a className="btn">Más Información</a>
          </Link>
        </div>
      </div>
    </SwiperSlide>
  );
};
