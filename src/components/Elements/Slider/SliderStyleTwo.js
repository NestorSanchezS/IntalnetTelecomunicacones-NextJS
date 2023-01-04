import React from 'react';
import Slider from "react-slick";
import Link from 'next/link'

const SliderTwo = () =>  {

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}><i className="far fa-chevron-right"></i></button>
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}> <i className="far fa-chevron-left"></i></button>
        );
    }

    const settings = {
        autoplay: true,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="slider-area">
            <div className="slider-active">
                <Slider {...settings}>
                    <div className="single-slider">
                        <div className='slider-bg' style={{ backgroundImage:`url(${'assets/img/slider/slider_bg01.jpg'})`}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-md-9">
                                        <div className="banner-content">
                                            <h2 className="title" data-animation="fadeInUp" data-delay=".2s" data-duration="1.2s">Disfruta de Banda Ancha a Alta Velocidad</h2>
                                            <ul className="slider-services-list">
                                                <li data-animation="fadeInUp" data-delay=".4s" data-duration="1.2s"><img src="assets/img/icons/w_check.png" alt="img not found"/> Conexiones de ancho de banda de alta velocidad.</li>
                                                <li data-animation="fadeInUp" data-delay=".6s" data-duration="1.2s"><img src="assets/img/icons/w_check.png" alt="img not found"/> Conectividad del cualquier dispositivo.</li>
                                                <li data-animation="fadeInUp" data-delay=".8s" data-duration="1.2s"><img src="assets/img/icons/w_check.png" alt="img not found"/> Navegación ilimitada a bajo costo.</li>
                                            </ul>
                                            <Link href="/contact"><a className="btn">Contactanos</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-slider">
                        <div className='slider-bg' style={{ backgroundImage:`url(${'assets/img/slider/slider_bg02.jpg'})`}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-md-9">
                                        <div className="banner-content">
                                            <h2 className="title" data-animation="fadeInUp" data-delay=".2s" data-duration="1.2s">Televisión Digital  y una Gran Variedad de Contenido</h2>
                                            <ul className="slider-services-list">
                                                <li data-animation="fadeInUp" data-delay=".4s" data-duration="1.2s"><img src="assets/img/icons/w_check.png" alt="img not found"/> Canales de Television HD y SD.</li>
                                                <li data-animation="fadeInUp" data-delay=".6s" data-duration="1.2s"><img src="assets/img/icons/w_check.png" alt="img not found"/> Televisión Digital.</li>
                                                <li data-animation="fadeInUp" data-delay=".8s" data-duration="1.2s"><img src="assets/img/icons/w_check.png" alt="img not found"/> Canales de Peliculas, Deportes, Infantiles, Religiosos y mucho más.</li>
                                            </ul>
                                            <Link href="/contact"><a className="btn">Contactanos</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-slider">
                        <div className='slider-bg' style={{ backgroundImage:`url(${'assets/img/slider/slider_bg03.jpg'})`}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-md-9">
                                        <div className="banner-content">
                                            <h2 className="title" data-animation="fadeInUp" data-delay=".2s" data-duration="1.2s">Conexón por Fibra Optica</h2>
                                            <ul className="slider-services-list">
                                                <li data-animation="fadeInUp" data-delay=".4s" data-duration="1.2s"><img src="assets/img/icons/w_check.png" alt="img not found"/> Te ofrecemos conexión a internet a alta velocidad.</li>
                                                <li data-animation="fadeInUp" data-delay=".6s" data-duration="1.2s"><img src="assets/img/icons/w_check.png" alt="img not found"/> Velocidad Simétrica.</li>
                                                <li data-animation="fadeInUp" data-delay=".8s" data-duration="1.2s"><img src="assets/img/icons/w_check.png" alt="img not found"/> Servicio Tecnico Oportuno.</li>
                                            </ul>
                                            <Link href="/contact"><a className="btn">Contactanos</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default SliderTwo;