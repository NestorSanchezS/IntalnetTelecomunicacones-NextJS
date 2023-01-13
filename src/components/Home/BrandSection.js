import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle'

import React from 'react';

const Brand = ({paddingClass}) => {
    return (
        <div className={`brand-area ${paddingClass ? paddingClass : 'pt-70'} pb-120`}>
                <div className="container">
                    <div className="brand-active swiper-container">
                        <div className="swiper-wrapper align-items-center">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                                spaceBetween={30}
                                slidesPerView={2}
                                autoplaydisableoninteraction={"false"}
                                loop={true}
                                breakpoints={{
                                    550: {
                                        slidesPerView: 2,
                                      },
                                      768: {
                                        slidesPerView: 3,
                                      },
                                      1200: {
                                        slidesPerView: 4,
                                      }
                                }}
                                autoplay= {{
                                    delay: 2000,
                                    disableOnInteraction: true
                                }}
                            >
                            <SwiperSlide>
                                <div>
                                    <a href="#"><img src="/assets/img/brand/brand_item01.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <a href="#"><img src="/assets/img/brand/brand_item02.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <a href="#"><img src="/assets/img/brand/brand_item03.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <a href="#"><img src="/assets/img/brand/brand_item04.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <a href="#"><img src="/assets/img/brand/brand_item05.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div >
                                    <a href="#"><img src="/assets/img/brand/brand_item06.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div >
                                    <a href="#"><img src="/assets/img/brand/brand_item07.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div >
                                    <a href="#"><img src="/assets/img/brand/brand_item08.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div >
                                    <a href="#"><img src="/assets/img/brand/brand_item09.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div >
                                    <a href="#"><img src="/assets/img/brand/brand_item10.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div >
                                    <a href="#"><img src="/assets/img/brand/brand_item11.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div >
                                    <a href="#"><img src="/assets/img/brand/brand_item12.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div >
                                    <a href="#"><img src="/assets/img/brand/brand_item13.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div >
                                    <a href="#"><img src="/assets/img/brand/brand_item14.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div >
                                    <a href="#"><img src="/assets/img/brand/brand_item15.png" alt="img not found"/></a>
                                </div>
                            </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Brand;