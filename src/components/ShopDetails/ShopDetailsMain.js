import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Breadcrumb from "../Common/Breadcumb";
import ProductDescTab from "../Elements/Tab/ProductDescTab";
import Link from "next/link";
import { useRouter } from "next/router";
import { BASE_URL } from "../constans/dominio";
import { BASE_URL2 } from "../constans/dominio";
const Brand = dynamic(() => import("../Home/BrandSection"), {
  ssr: false,
});
const ProductSlider = dynamic(
  () => import("../Elements/Slider/RelatedProductSlider"),
  {
    ssr: false,
  }
);

const ShopDetailsMain = () => {
  const [count, setCount] = useState(0);
  const [getInfoProductApi, setGetInfoProductApi] = useState([]);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  const router = useRouter();

  useEffect(() => {
    if (!router.query.id) {
      return;
    }
    const getInfoProduct = async () => {
      try {
        const url = `${BASE_URL}products/${router.query.id}`;
        const response = await fetch(url);
        const data = await response.json();
        setGetInfoProductApi(data);
      } catch (error) {
        console.log(error);
      }
    };
    getInfoProduct();
  }, [router.query.id]);

  const { name, description, price, images } = getInfoProductApi;

  let imgPath = "/assets/img/images/shop.jpg";

  if (images?.length > 1) {
    imgPath = BASE_URL2 + images[0].path;
  }

  return (
    <main>
      {/* breadcrumb-area-start */}
      <Breadcrumb pageTitle="Detalles del Producto" />
      {/* breadcrumb-area-end */}

      {/* shopdetails-area-start */}
      <section className="shop-details-area pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="shop-details-img">
                <img src={imgPath} alt="img not found" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shop-details-content">
                <div className="product-stock-status">
                  <span>En Stock</span>
                </div>
                <h2 className="title">{name}</h2>
                <div className="shop-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h3 className="price">
                  <sup>$</sup>
                  {price}
                </h3>
                <p>{description}</p>
                <div className="shop-details-quantity">
                  <div className="cart-plus-minus">
                    <div className="quantity-form">
                      <p>{count}</p>
                      <div className="qtybutton-box">
                        <span className="plus" onClick={handleIncrease}>
                          <i className="fas fa-caret-up"></i>
                        </span>
                        <span className="minus dis" onClick={handleDecrease}>
                          <i className="fas fa-caret-down"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link href="#">
                    <a className="btn cart-btn">Agregar al carrito</a>
                  </Link>
                </div>
                <div className="shop-details-bottom">
                  <ul>
                    <li className="sd-category">
                      <span className="title">Categories :</span>
                      <Link href="/shop">
                        <a>Router</a>
                      </Link>
                    </li>
                    <li className="sd-tags">
                      <span className="title">Tags :</span>
                      <Link href="/shop">
                        <a>Router,</a>
                      </Link>
                      <Link href="/shop">
                        <a>Ancho de Banda,</a>
                      </Link>
                      <Link href="/shop">
                        <a>Satellite TV,</a>
                      </Link>
                      <Link href="/shop">
                        <a>WiFi</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ProductDescTab description={description} />
            </div>
          </div>
          <div className="related-products-wrap">
            <h2 className="related-products-title">Productos Relacionados</h2>
            <ProductSlider />
          </div>
        </div>
      </section>
      {/* shopdetails-area-end */}

      {/* brand-area-start */}
      <Brand />
      {/* brand-area-end */}
    </main>
  );
};

export default ShopDetailsMain;
