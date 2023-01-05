import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

const StreamSlider = () => {
    
    return (
        <React.Fragment>
            
            <section className="streaming-two-area streaming-two-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="streaming-two-title">
                                <span className="sub-title">Ahora, el mejor sitio de películas.</span>
                                <h2 className="title">Intalflix</h2>
                                <p>Obten esta plataforma de películas GRATIS solo siendo parte de la familia Intalnet.</p>
                                <Link href="http://50.0.0.20/wispflix/"><a className="btn transparent-btn" target="_blank">Ir a Plataforma</a></Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="streaming-two-actives swiper-container">
                                <div className='swiper-wrapper'>
                                    <Swiper
                                        // install Swiper modules
                                        modules={[Navigation, Pagination, Scrollbar, A11y,]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        autoplaydisableoninteraction={"false"}
                                        loop={true}
                                        breakpoints={{
                                            576: {
                                                slidesPerView: 1
                                            },
                                            768: {
                                                slidesPerView: 2
                                            },
                                            992: {
                                                slidesPerView: 2
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
                                            <div className="streaming-two-item swiper-slide">
                                                <div className="streaming-two-thumb">
                                                    <img src="assets/img/images/s_streaming_img01.jpg" alt="img not found"/>
                                                    <span className="tag">Acción</span>
                                                </div>
                                                <div className="streaming-two-content">
                                                    <span>Entretenimiento</span>
                                                    <h4 className="title"><Link href="/service-details"><a>Mercenarios de Élite</a></Link></h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="streaming-two-item swiper-slide">
                                                <div className="streaming-two-thumb">
                                                    <img src="assets/img/images/s_streaming_img02.jpg" alt="img not found"/>
                                                    <span className="tag">Acción</span>
                                                </div>
                                                <div className="streaming-two-content">
                                                    <span>Entretenimiento</span>
                                                    <h4 className="title"><Link href="/service-details"><a>Código Banshee</a></Link></h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="streaming-two-item swiper-slide">
                                                <div className="streaming-two-thumb">
                                                    <img src="assets/img/images/s_streaming_img03.jpg" alt="img not found"/>
                                                    <span className="tag">Acción</span>
                                                </div>
                                                <div className="streaming-two-content">
                                                    <span>Entretenimiento</span>
                                                    <h4 className="title"><Link href="/service-details"><a>Forever Rich</a></Link></h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="streaming-two-item swiper-slide">
                                                <div className="streaming-two-thumb">
                                                    <img src="assets/img/images/s_streaming_img04.jpg" alt="img not found"/>
                                                    <span className="tag">Acción</span>
                                                </div>
                                                <div className="streaming-two-content">
                                                    <span>Entretenimiento</span>
                                                    <h4 className="title"><Link href="/service-details"><a>Security</a></Link></h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                      
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="streaming-shape one"><img src="assets/img/images/streaming_shape01.png" alt="img not found"/></div>
                {/* <div className="streaming-shape two"><img src="assets/img/images/streaming_shape02.png" alt="img not found"/></div> */}
                <div className="streaming-shape three"><img src="assets/img/images/streaming_shape03.png" alt="img not found"/></div>
            </section>
        </React.Fragment>
    );
};

export default StreamSlider;