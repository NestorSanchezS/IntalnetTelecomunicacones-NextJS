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
            <section className="streaming-two-area-modern">
                <div className="container">
                    <div className="row">
                        {/* Columna izquierda para el título y descripción */}
                        <div className="col-lg-3 d-flex align-items-center">
                            <div className="streaming-two-title-modern">
                                <span className="sub-title-modern">Ahora, el mejor sitio de películas.</span>
                                <h2 className="title-modern">Intalflix</h2>
                                <p className="description-modern">Obten esta plataforma de películas GRATIS solo siendo parte de la familia Intalnet.</p>
                                <Link href="http://50.0.0.20/wispflix/">
                                    <a className="btn-modern-dark" target="_blank">Ir a Plataforma</a>
                                </Link>
                            </div>
                        </div>

                        {/* Columna derecha para el slider de películas */}
                        <div className="col-lg-9">
                            <div className="streaming-two-actives swiper-container-modern">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y,]}
                                    spaceBetween={20} /* Reducido para más tarjetas */
                                    slidesPerView={1}
                                    autoplaydisableoninteraction={"false"}
                                    loop={true}
                                    breakpoints={{
                                        576: {
                                            slidesPerView: 2
                                        },
                                        768: {
                                            slidesPerView: 3
                                        },
                                        992: {
                                            slidesPerView: 3
                                        },
                                        1200: {
                                            slidesPerView: 4 /* 4 tarjetas para desktop */
                                        },
                                        1400: {
                                            slidesPerView: 4
                                        }
                                    }}
                                >
                                    {/* Slider de películas */}
                                    <SwiperSlide>
                                        <div className="streaming-item-modern">
                                            <div className="streaming-thumb-modern">
                                                <img src="/assets/img/images/s_streaming_img01.jpg" alt="Mercenarios de Élite"/>
                                                <span className="tag-modern">Acción</span>
                                            </div>
                                            <div className="streaming-content-modern">
                                                <span className="category-modern">Entretenimiento</span>
                                                <h4 className="title-film-modern"><Link href="/service-details"><a>Mercenarios de Élite</a></Link></h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="streaming-item-modern">
                                            <div className="streaming-thumb-modern">
                                                <img src="/assets/img/images/s_streaming_img02.jpg" alt="Código Banshee"/>
                                                <span className="tag-modern">Acción</span>
                                            </div>
                                            <div className="streaming-content-modern">
                                                <span className="category-modern">Entretenimiento</span>
                                                <h4 className="title-film-modern"><Link href="/service-details"><a>Código Banshee</a></Link></h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="streaming-item-modern">
                                            <div className="streaming-thumb-modern">
                                                <img src="/assets/img/images/s_streaming_img03.jpg" alt="Forever Rich"/>
                                                <span className="tag-modern">Acción</span>
                                            </div>
                                            <div className="streaming-content-modern">
                                                <span className="category-modern">Entretenimiento</span>
                                                <h4 className="title-film-modern"><Link href="/service-details"><a>Forever Rich</a></Link></h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="streaming-item-modern">
                                            <div className="streaming-thumb-modern">
                                                <img src="/assets/img/images/s_streaming_img04.jpg" alt="Security"/>
                                                <span className="tag-modern">Acción</span>
                                            </div>
                                            <div className="streaming-content-modern">
                                                <span className="category-modern">Entretenimiento</span>
                                                <h4 className="title-film-modern"><Link href="/service-details"><a>Security</a></Link></h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="streaming-item-modern">
                                            <div className="streaming-thumb-modern">
                                                <img src="/assets/img/images/s_streaming_img01.jpg" alt="Mercenarios de Élite"/>
                                                <span className="tag-modern">Acción</span>
                                            </div>
                                            <div className="streaming-content-modern">
                                                <span className="category-modern">Entretenimiento</span>
                                                <h4 className="title-film-modern"><Link href="/service-details"><a>Mercenarios de Élite</a></Link></h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

                {/* IMÁGENES DECORATIVAS: Mono (intalito3) y Guitarra (intalito4) */}
                <div className="deco-shape mono-shape">
                    <img src="/assets/img/images/intalito3.png" alt="Mono Intalito"/>
                </div>
                <div className="deco-shape guitar-shape">
                    <img src="/assets/img/images/intalito4.png" alt="Guitarra Intalito"/>
                </div>
            </section>

            <style jsx>{`
                /* Estilos Generales de la Sección */
                .streaming-two-area-modern {
                    position: relative;
                    overflow: hidden;
                    padding: 100px 0;
                    background-color: #1A202C; /* Azul oscuro similar al de tu imagen */
                    color: #e0e0e0; /* Color de texto general */
                }

                /* Título y Descripción de Intalflix */
                .streaming-two-title-modern {
                    text-align: left;
                    padding-right: 30px; /* Espacio entre el texto y el slider */
                    z-index: 10; /* Asegurarse de que esté sobre las decoraciones */
                    position: relative;
                }
                .sub-title-modern {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #007bff; /* Azul Intalnet */
                    margin-bottom: 5px;
                    display: block;
                    letter-spacing: 0.5px;
                }
                .title-modern {
                    font-size: 3.5rem; /* Tamaño grande para "Intalflix" */
                    font-weight: 900;
                    color: #ffffff;
                    margin-bottom: 15px;
                    text-shadow: 0 0 20px rgba(0, 123, 255, 0.4);
                }
                .description-modern {
                    font-size: 1.05rem;
                    color: #a0aec0; /* Gris azulado */
                    line-height: 1.7;
                    margin-bottom: 35px;
                }

                /* Botón "Ir a Plataforma" */
                .btn-modern-dark {
                    display: inline-block;
                    padding: 14px 35px;
                    font-size: 1rem;
                    font-weight: 700;
                    text-align: center;
                    color: white;
                    background-color: #0056b3; /* Azul más oscuro que el degradado */
                    border: 2px solid #007bff; /* Borde sutil */
                    border-radius: 8px; /* Ligeramente menos redondeado */
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 6px 15px rgba(0, 86, 179, 0.4);
                }
                .btn-modern-dark:hover {
                    transform: translateY(-2px);
                    background-color: #007bff; /* Un poco más claro en hover */
                    box-shadow: 0 10px 20px rgba(0, 123, 255, 0.5);
                }

                /* Contenedor del Slider */
                .swiper-container-modern {
                    padding-top: 20px; /* Espacio para que las sombras no se corten */
                    padding-bottom: 20px;
                }

                /* Item (Tarjeta de Película) */
                .streaming-item-modern {
                    background: rgba(255, 255, 255, 0.03); /* Fondo muy sutil */
                    border-radius: 12px;
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid rgba(255, 255, 255, 0.08); /* Borde apenas visible */
                    height: 100%; /* Asegura que todas las tarjetas tengan la misma altura */
                    display: flex;
                    flex-direction: column;
                }
                .streaming-item-modern:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
                }

                /* Miniatura de la Película (Imagen) */
                .streaming-thumb-modern {
                    position: relative;
                    width: 100%;
                    padding-bottom: 150%; /* Proporción 2:3 (altura 150% del ancho) */
                    overflow: hidden;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                .streaming-thumb-modern img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover; /* Asegura que la imagen cubra el espacio sin distorsionarse */
                    display: block;
                }
                .tag-modern {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background-color: #007bff;
                    color: white;
                    padding: 4px 10px;
                    border-radius: 5px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    box-shadow: 0 3px 8px rgba(0, 123, 255, 0.3);
                }

                /* Contenido de la tarjeta (Título y Categoría) */
                .streaming-content-modern {
                    padding: 15px;
                    flex-grow: 1; /* Para que el contenido ocupe el espacio restante */
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end; /* Alinea el contenido hacia abajo si hay espacio */
                }
                .category-modern {
                    font-size: 0.85rem;
                    color: #718096; /* Gris más claro */
                    display: block;
                    margin-bottom: 5px;
                }
                .title-film-modern {
                    font-size: 1.15rem;
                    font-weight: 700;
                    margin-bottom: 0;
                }
                .title-film-modern a {
                    color: #ffffff;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                .title-film-modern a:hover {
                    color: #007bff;
                }

                /* IMÁGENES DECORATIVAS (Mono y Guitarra) */
                .deco-shape {
                    position: absolute;
                    pointer-events: none; /* Ignora eventos de ratón */
                    z-index: 5; /* Asegura que estén sobre el fondo pero bajo el contenido principal */
                }
                .deco-shape img {
                    max-width: 100%;
                    height: auto;
                    opacity: 1; /* Que se vean bien definidos */
                }

                .mono-shape {
                    top: 0px; /* Posición arriba */
                    left: 0px; /* Posición izquierda */
                    width: 180px; /* Ajusta el tamaño del mono */
                    transform: rotate(-10deg); /* Pequeña rotación */
                    filter: drop-shadow(0 10px 15px rgba(0,0,0,0.4)); /* Sombra para destacarlo */
                }
                .guitar-shape {
                    bottom: -30px; /* Parte de la guitarra fuera del área */
                    left: 180px; /* Posición izquierda */
                    width: 200px; /* Ajusta el tamaño de la guitarra */
                    transform: rotate(15deg); /* Rotación */
                    filter: drop-shadow(0 -8px 12px rgba(0,0,0,0.3));
                }
                
                /* Responsive */
                @media (max-width: 1200px) {
                    .title-modern {
                        font-size: 3rem;
                    }
                    .streaming-two-title-modern {
                        padding-right: 20px;
                    }
                }

                @media (max-width: 991px) {
                    .streaming-two-title-modern {
                        text-align: center;
                        padding-right: 0;
                        margin-bottom: 60px; /* Espacio debajo del título en móvil */
                    }
                    .title-modern {
                        font-size: 2.8rem;
                    }
                    .description-modern {
                        font-size: 1rem;
                    }
                    .deco-shape {
                        display: none; /* Oculta las decoraciones en móviles si estorban */
                    }
                }

                @media (max-width: 767px) {
                    .streaming-two-area-modern {
                        padding: 80px 0;
                    }
                    .title-modern {
                        font-size: 2.2rem;
                    }
                    .btn-modern-dark {
                        padding: 12px 30px;
                    }
                    .streaming-item-modern {
                        border-radius: 10px;
                    }
                    .streaming-thumb-modern {
                        padding-bottom: 140%; /* Ajuste de proporción en pantallas pequeñas */
                    }
                    .streaming-content-modern {
                        padding: 12px;
                    }
                    .title-film-modern {
                        font-size: 1rem;
                    }
                    .category-modern {
                        font-size: 0.8rem;
                    }
                }
            `}</style>
        </React.Fragment>
    );
};

export default StreamSlider;


