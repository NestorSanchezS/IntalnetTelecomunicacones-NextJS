import Link from "next/link";
import React from "react";
import { BASE_URL2 } from "../constans/dominio";

export const CardProduct = ({ product }) => {
  const { id, name, price, previous_price, images, categories } = product;
  console.log(product);
  let imgPath = "/assets/img/images/shop.jpg";
  if (images.length > 1) {
    imgPath = BASE_URL2 + images[0].path;
  }
  return (
    <div className="col-xl-4 col-md-6">
      <div className="shop-item shop-item-height text-center">
        {categories[0] === "promotion" && (
          <span className="fresh-sale">Promoción!</span>
        )}
        <div className="shop-thumb">
          <Link href="/shop-details">
            <a>
              <img src={imgPath} alt="img not found" />
            </a>
          </Link>
        </div>
        <div className="shop-item-content">
          <h6 className="title">
            <Link href="/shop-details">
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
          <Link href="/shop-details">
            <a className="btn">Más Información</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
