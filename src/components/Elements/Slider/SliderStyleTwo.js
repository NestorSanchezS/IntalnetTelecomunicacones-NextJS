import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

const SliderTwo = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button type="button" onClick={onClick} className={`${className} custom-arrow custom-next-arrow`}>
        <i className="far fa-chevron-right"></i>
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button type="button" onClick={onClick} className={`${className} custom-arrow custom-prev-arrow`}>
        <i className="far fa-chevron-left"></i>
      </button>
    );
  }

  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true, // Activado para mostrar indicadores
    fade: false, // Cambiado a false para animación de deslizamiento
    arrows: true, // Activado para mostrar flechas
    speed: 800, // Velocidad de transición en ms
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false, // En móvil solo dots
        },
      },
    ],
  };

  const textPanelStyle = {
    background: "rgba(0, 0, 0, 0.45)",
    padding: "30px",
    borderRadius: "12px",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    transition: "transform 0.3s ease, color 0.3s ease",
  };

  const iconStyle = {
    color: "#007aff",
    fontSize: "1.3rem",
    minWidth: "22px",
    filter: "drop-shadow(0 0 8px rgba(0, 122, 255, 0.5))",
    animation: "pulse 2s ease-in-out infinite",
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
  };

  const styles = `
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-100px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes fadeInScale {
      0% {
        transform: scale(0.8);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    @keyframes glowPulse {
      0%, 100% {
        box-shadow: 0 0 20px rgba(0, 122, 255, 0.3);
      }
      50% {
        box-shadow: 0 0 40px rgba(0, 122, 255, 0.6);
      }
    }

    @keyframes textGlow {
      0%, 100% {
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      }
      50% {
        text-shadow: 0 2px 20px rgba(0, 122, 255, 0.4), 0 0 30px rgba(0, 122, 255, 0.2);
      }
    }

    @keyframes bounceIn {
      0% {
        transform: scale(0) rotate(-180deg);
        opacity: 0;
      }
      60% {
        transform: scale(1.2) rotate(20deg);
        opacity: 1;
      }
      100% {
        transform: scale(1) rotate(0deg);
      }
    }

    @keyframes slideUpFade {
      0% {
        transform: translateY(30px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes ripple {
      0% {
        transform: scale(0.8);
        opacity: 1;
      }
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes rotate3d {
      0% {
        transform: perspective(1000px) rotateY(0deg);
      }
      100% {
        transform: perspective(1000px) rotateY(360deg);
      }
    }

    /* Estilos para las flechas de navegación */
    .custom-arrow {
      width: 50px;
      height: 50px;
      background: rgba(255, 255, 255, 0.15) !important;
      border-radius: 50%;
      display: flex !important;
      align-items: center;
      justify-content: center;
      z-index: 10;
      transition: all 0.3s ease;
      border: 2px solid rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(10px);
    }

    .custom-arrow::before {
      display: none;
    }

    .custom-arrow i {
      color: white;
      font-size: 1.2rem;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }

    .custom-arrow:hover {
      background: rgba(0, 122, 255, 0.3) !important;
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(0, 122, 255, 0.6);
      border-color: rgba(0, 122, 255, 0.8);
    }

    .custom-prev-arrow {
      left: 30px !important;
    }

    .custom-next-arrow {
      right: 30px !important;
    }

    /* Estilos para los dots (indicadores) */
    .slick-dots {
      bottom: 30px;
      z-index: 10;
    }

    .slick-dots li {
      margin: 0 8px;
    }

    .slick-dots li button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      border: 2px solid rgba(255, 255, 255, 0.8);
      transition: all 0.3s ease;
    }

    .slick-dots li button::before {
      display: none;
    }

    .slick-dots li:hover button {
      background: rgba(0, 122, 255, 0.8);
      transform: scale(1.2);
    }

    .slick-dots li.slick-active button {
      background: #007aff;
      width: 40px;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(0, 122, 255, 0.8);
    }

    /* Indicador de progreso de autoplay */
    @keyframes progressBar {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }

    .slick-dots li.slick-active button::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.9);
      animation: progressBar 10s linear;
      border-radius: 10px;
    }

    .slider-services-list li {
      animation: slideUpFade 0.6s ease-out forwards;
      opacity: 0;
    }

    .slider-services-list li:nth-child(1) {
      animation-delay: 0.4s;
    }

    .slider-services-list li:nth-child(2) {
      animation-delay: 0.6s;
    }

    .slider-services-list li:nth-child(3) {
      animation-delay: 0.8s;
    }

    .slider-services-list li:hover {
      transform: translateX(10px) scale(1.05);
      color: #007aff;
    }

    .slider-services-list li:hover .icon-wrapper {
      transform: rotate(360deg) scale(1.3);
    }

    .icon-wrapper {
      display: inline-block;
      transition: transform 0.6s ease;
    }

    .title {
      animation: textGlow 3s ease-in-out infinite;
      background: linear-gradient(90deg, #ffffff 0%, #007aff 50%, #ffffff 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s linear infinite, slideInFromLeft 0.8s ease-out;
    }

    .banner-content {
      animation: fadeInScale 0.8s ease-out;
    }

    .intalito-image {
      animation: float 3s ease-in-out infinite;
      filter: drop-shadow(0 10px 30px rgba(0, 122, 255, 0.4));
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      position: relative;
    }

    .intalito-image::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(0, 122, 255, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: ripple 2s ease-out infinite;
    }

    .intalito-image:hover {
      transform: scale(1.1) rotate(5deg);
      filter: drop-shadow(0 15px 40px rgba(0, 122, 255, 0.6));
      animation: float 3s ease-in-out infinite, rotate3d 2s ease-in-out;
    }

    .slider-bg {
      position: relative;
      overflow: hidden;
    }

    .slider-bg::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(0, 122, 255, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%);
      pointer-events: none;
    }

    .btn {
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }

    .btn:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 10px 30px rgba(0, 122, 255, 0.4);
    }

    .btn .arrow-icon {
      transition: transform 0.3s ease;
    }

    .btn:hover .arrow-icon {
      transform: translateX(8px);
      animation: pulse 0.6s ease-in-out;
    }

    @keyframes particleFloat {
      0%, 100% {
        transform: translateY(0) translateX(0);
        opacity: 0.5;
      }
      50% {
        transform: translateY(-100px) translateX(50px);
        opacity: 1;
      }
    }

    @media (max-width: 767px) {
      .banner-content {
        padding: 25px !important;
      }

      .title {
        font-size: 1.5rem;
      }

      .intalito-image:hover {
        transform: scale(1.05);
      }

      .custom-arrow {
        width: 40px;
        height: 40px;
      }

      .custom-prev-arrow {
        left: 10px !important;
      }

      .custom-next-arrow {
        right: 10px !important;
      }

      .slick-dots {
        bottom: 15px;
      }
    }

    @keyframes checkMark {
      0% {
        transform: scale(0) rotate(0deg);
      }
      50% {
        transform: scale(1.2) rotate(180deg);
      }
      100% {
        transform: scale(1) rotate(360deg);
      }
    }

    .slider-services-list li:hover svg {
      animation: checkMark 0.6s ease;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="slider-area">
        <div className="slider-active">
          <Slider {...settings}>
            {/* === PRIMER SLIDE === */}
            <div className="single-slider">
              <div
                className="slider-bg"
                style={{
                  backgroundImage: `url(${"/assets/img/slider/slider_bg01.jpg"})`,
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-9">
                      <div className="banner-content" style={textPanelStyle}>
                        <h2
                          className="title"
                          data-animation="fadeInUp"
                          data-delay=".2s"
                          data-duration="1.2s"
                        >
                          Disfruta de Banda Ancha a Alta Velocidad
                        </h2>
                        <ul className="slider-services-list">
                          <li
                            data-animation="fadeInUp"
                            data-delay=".4s"
                            data-duration="1.2s"
                            style={listItemStyle}
                          >
                            <span className="icon-wrapper">
                              <FiCheckCircle style={iconStyle} />
                            </span>
                            <span>Conexiones de ancho de banda de alta velocidad.</span>
                          </li>
                          <li
                            data-animation="fadeInUp"
                            data-delay=".6s"
                            data-duration="1.2s"
                            style={listItemStyle}
                          >
                            <span className="icon-wrapper">
                              <FiCheckCircle style={iconStyle} />
                            </span>
                            <span>Conectividad de cualquier dispositivo.</span>
                          </li>
                          <li
                            data-animation="fadeInUp"
                            data-delay=".8s"
                            data-duration="1.2s"
                            style={listItemStyle}
                          >
                            <span className="icon-wrapper">
                              <FiCheckCircle style={iconStyle} />
                            </span>
                            <span>Navegación ilimitada a bajo costo.</span>
                          </li>
                        </ul>

                        <Link href="/contact">
                          <a className="btn" style={buttonStyle} data-animation="fadeInUp" data-delay="1s" data-duration="1.2s">
                            Contáctanos
                            <FiArrowRight className="arrow-icon" />
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div
                      className="col-lg-5 col-md-3 d-none d-md-block"
                      data-animation="fadeInRight"
                      data-delay=".8s"
                      data-duration="1.2s"
                    >
                      <div className="intalito-image">
                        <Image
                          src="/assets/intalito.png"
                          alt="Intalito, mascota de Intalnet"
                          width={400}
                          height={400}
                          layout="responsive"
                          objectFit="contain"
                          priority={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* === SEGUNDO SLIDE === */}
            <div className="single-slider">
              <div
                className="slider-bg"
                style={{
                  backgroundImage: `url(${"/assets/img/slider/slider_bg02.jpg"})`,
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-9">
                      <div className="banner-content" style={textPanelStyle}>
                        <h2
                          className="title"
                          data-animation="fadeInUp"
                          data-delay=".2s"
                          data-duration="1.2s"
                        >
                          Televisión Digital y Gran Variedad de Contenido
                        </h2>
                        <ul className="slider-services-list">
                          <li
                            data-animation="fadeInUp"
                            data-delay=".4s"
                            data-duration="1.2s"
                            style={listItemStyle}
                          >
                            <span className="icon-wrapper">
                              <FiCheckCircle style={iconStyle} />
                            </span>
                            <span>Canales de Televisión HD y SD.</span>
                          </li>
                          <li
                            data-animation="fadeInUp"
                            data-delay=".6s"
                            data-duration="1.2s"
                            style={listItemStyle}
                          >
                            <span className="icon-wrapper">
                              <FiCheckCircle style={iconStyle} />
                            </span>
                            <span>Televisión Digital.</span>
                          </li>
                          <li
                            data-animation="fadeInUp"
                            data-delay=".8s"
                            data-duration="1.2s"
                            style={listItemStyle}
                          >
                            <span className="icon-wrapper">
                              <FiCheckCircle style={iconStyle} />
                            </span>
                            <span>Canales de Películas, Deportes y mucho más.</span>
                          </li>
                        </ul>
                        <Link href="/contact">
                          <a className="btn" style={buttonStyle} data-animation="fadeInUp" data-delay="1s" data-duration="1.2s">
                            Contáctanos
                            <FiArrowRight className="arrow-icon" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-lg-5 col-md-3 d-none d-md-block"
                      data-animation="fadeInRight"
                      data-delay=".8s"
                      data-duration="1.2s"
                    >
                      <div className="intalito-image">
                        <Image
                          src="/assets/intalito2.png"
                          alt="Intalito, mascota de Intalnet"
                          width={400}
                          height={400}
                          layout="responsive"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* === TERCER SLIDE === */}
            <div className="single-slider">
              <div
                className="slider-bg"
                style={{
                  backgroundImage: `url(${"/assets/img/slider/slider_bg03.jpg"})`,
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-9">
                      <div className="banner-content" style={textPanelStyle}>
                        <h2
                          className="title"
                          data-animation="fadeInUp"
                          data-delay=".2s"
                          data-duration="1.2s"
                        >
                          Conexión por Fibra Óptica
                        </h2>
                        <ul className="slider-services-list">
                          <li
                            data-animation="fadeInUp"
                            data-delay=".4s"
                            data-duration="1.2s"
                            style={listItemStyle}
                          >
                            <span className="icon-wrapper">
                              <FiCheckCircle style={iconStyle} />
                            </span>
                            <span>Conexión a internet de alta velocidad.</span>
                          </li>
                          <li
                            data-animation="fadeInUp"
                            data-delay=".6s"
                            data-duration="1.2s"
                            style={listItemStyle}
                          >
                            <span className="icon-wrapper">
                              <FiCheckCircle style={iconStyle} />
                            </span>
                            <span>Velocidad Simétrica (misma subida y bajada).</span>
                          </li>
                          <li
                            data-animation="fadeInUp"
                            data-delay=".8s"
                            data-duration="1.2s"
                            style={listItemStyle}
                          >
                            <span className="icon-wrapper">
                              <FiCheckCircle style={iconStyle} />
                            </span>
                            <span>Servicio Técnico Oportuno.</span>
                          </li>
                        </ul>
                        <Link href="/contact">
                          <a className="btn" style={buttonStyle} data-animation="fadeInUp" data-delay="1s" data-duration="1.2s">
                            Contáctanos
                            <FiArrowRight className="arrow-icon" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-lg-5 col-md-3 d-none d-md-block"
                      data-animation="fadeInRight"
                      data-delay=".8s"
                      data-duration="1.2s"
                    >
                      <div className="intalito-image">
                        <Image
                          src="/assets/intalito2.png"
                          alt="Intalito, mascota de Intalnet"
                          width={400}
                          height={400}
                          layout="responsive"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderTwo;