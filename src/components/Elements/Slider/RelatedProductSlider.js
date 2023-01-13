import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

const ProductSlider = () => {
    return (
        <div className="rel-products-active swiper-container">
            <div className="swiper-wrapper">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y,]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplaydisableoninteraction={"false"}
                    loop={true}
                    breakpoints={{
                        575: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 3
                        },
                        1400: {
                            slidesPerView: 4
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className="shop-item text-center">
                            <span className="fresh-sale">SALE</span>
                            <div className="shop-thumb">
                                <Link href="/shop-details"><a><img src="/assets/img/products/product_img01.png" alt="img not found"/></a></Link>
                            </div>
                            <div className="shop-item-content">
                                <h6 className="title"><Link href="/shop-details"><a>Gigabit Dual Band Whole Home Mesh Wi-Fi Router</a></Link></h6>
                                <h3 className="price"><sup>$</sup>55.00</h3>
                                <div className="shop-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <Link href="/shop-details"><a className="btn">Add to Cart</a></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shop-item text-center">
                            <div className="shop-thumb">
                                <Link href="/shop-details"><a><img src="/assets/img/products/product_img02.png" alt="img not found"/></a></Link>
                            </div>
                            <div className="shop-item-content">
                                <h6 className="title"><Link href="/shop-details"><a>Netbox Band Whole Home Mesh Wi-Fi System Router</a></Link></h6>
                                <h3 className="price"><sup>$</sup>49.00</h3>
                                <div className="shop-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <Link href="/shop-details"><a className="btn">Add to Cart</a></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shop-item text-center">
                            <div className="shop-thumb">
                                <Link href="/shop-details"><a><img src="/assets/img/products/product_img03.png" alt="img not found"/></a></Link>
                            </div>
                            <div className="shop-item-content">
                                <h6 className="title"><Link href="/shop-details"><a>Netbox Dual Whole Home Mesh TV Box System</a></Link></h6>
                                <h3 className="price"><sup>$</sup>39.00</h3>
                                <div className="shop-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <Link href="/shop-details"><a className="btn">Add to Cart</a></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shop-item text-center">
                            <div className="shop-thumb">
                                <Link href="/shop-details"><a><img src="/assets/img/products/product_img04.png" alt="img not found"/></a></Link>
                            </div>
                            <div className="shop-item-content">
                                <h6 className="title"><Link href="/shop-details"><a>Netbox Jabra PanaCast Virtual Video Conference</a></Link></h6>
                                <h3 className="price"><sup>$</sup>85.00</h3>
                                <div className="shop-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <Link href="/shop-details"><a className="btn">Add to Cart</a></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shop-item text-center">
                            <span className="fresh-sale">SALE</span>
                            <div className="shop-thumb">
                                <Link href="/shop-details"><a><img src="/assets/img/products/product_img05.png" alt="img not found"/></a></Link>
                            </div>
                            <div className="shop-item-content">
                                <h6 className="title"><Link href="/shop-details"><a>DigitalX DX-T2020 Hi-Fi 120W RMS Tower Speaker</a></Link></h6>
                                <h3 className="price"><sup>$</sup>99.00</h3>
                                <div className="shop-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <Link href="/shop-details"><a className="btn">Add to Cart</a></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shop-item text-center">
                            <div className="shop-thumb">
                                <Link href="/shop-details"><a><img src="/assets/img/products/product_img06.png" alt="img not found"/></a></Link>
                            </div>
                            <div className="shop-item-content">
                                <h6 className="title"><Link href="/shop-details"><a>Netbox Portable Wi-Fi White Clearance Router</a></Link></h6>
                                <h3 className="price"><sup>$</sup>29.00</h3>
                                <div className="shop-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <Link href="/shop-details"><a className="btn">Add to Cart</a></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ProductSlider;