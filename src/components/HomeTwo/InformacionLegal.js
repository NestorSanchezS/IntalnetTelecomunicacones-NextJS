import React from 'react';

const InformacionLegal = () => {
    return (
        <section className="legal-info-section pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    
                    {/* --- Columna de Imagen --- */}
                    <div className="col-xl-6 col-lg-7">
                        <div className="legal-img-wrap">
                            <img
                                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80"
                                className="main-img-legal"
                                alt="Protección infantil en internet"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80"
                                className="small-img-legal"
                                alt="Seguridad digital"
                            />
                            {/* Elemento decorativo */}
                            <div className="img-overlay-shape-legal"></div>
                        </div>
                    </div>

                    {/* --- Columna de Texto --- */}
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title-legal mb-40">
                            <span className="badge-legal">Compromiso Social</span>
                            <h2 className="title-legal">
                                LUCHAMOS CONTRA LA EXPLOTACIÓN INFANTIL EN INTERNET
                            </h2>
                        </div>
                        <div className="content-wrap-legal">
                            <p className="description-legal">
                                <strong>INTALNET SAS.</strong> lucha contra el maltrato infantil. Por esto se une a la ley 679 expedida 
                                por el Congreso de la República el 3 de agosto de 2001, para prevenir y contrarrestar 
                                la explotación, la pornografía y el turismo sexual con menores de edad: Por mandato 
                                de la Ley 679 de 2001, todas las personas deben prevenir, bloquear, combatir y 
                                denunciar la explotación, alojamiento, uso, publicitación, difusión de imágenes, 
                                textos, documentos, archivos audiovisuales, uso indebido de redes globales de 
                                información, o el establecimiento de vínculos temáticos de cualquier clase 
                                relacionados con material pornográfico o alusivo a actividades sexuales de menores 
                                de edad, por cuanto podría generar responsabilidad de tipo penal.
                            </p>
                            
                            <div className="highlight-box-legal">
                                <div className="icon-legal">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <p>
                                    Esta ley se expidió con base en el artículo 44 de la Constitución Política y su objetivo primordial 
                                    es proteger a los niños de la explotación y el abuso sexual y velar por que tengan un 
                                    desarrollo sano e integral. Las empresas vinculadas a la <strong>Cámara Colombiana de 
                                    Informática y Telecomunicaciones CCIT</strong> y al <strong>NAP Colombia</strong> nos unimos a la campaña 
                                    organizada por el Gobierno Nacional contra la pornografía infantil.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .legal-info-section {
                    position: relative;
                    overflow: hidden;
                    background-color: #f8f9fa;
                    padding-top: 120px;
                    padding-bottom: 120px;
                }

                .legal-info-section::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(0, 122, 255, 0.05), rgba(0, 82, 212, 0.05));
                    z-index: 0;
                    opacity: 0.7;
                }

                .container {
                    position: relative;
                    z-index: 1;
                }

                .legal-img-wrap {
                    position: relative;
                    padding-right: 50px;
                    padding-bottom: 50px;
                    max-width: 550px;
                    margin: 0 auto;
                }

                .main-img-legal {
                    width: 100%;
                    height: auto;
                    border-radius: 20px;
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                    position: relative;
                    z-index: 2;
                }

                .main-img-legal:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
                }

                .small-img-legal {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 180px;
                    height: auto;
                    border-radius: 15px;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                    border: 4px solid white;
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                    z-index: 3;
                }

                .small-img-legal:hover {
                    transform: scale(1.05) rotate(2deg);
                    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
                }

                .img-overlay-shape-legal {
                    position: absolute;
                    top: 20px;
                    left: -20px;
                    width: 80%;
                    height: 80%;
                    background: linear-gradient(45deg, rgba(0, 122, 255, 0.2), rgba(0, 82, 212, 0.2));
                    border-radius: 25px;
                    z-index: 1;
                    transform: rotate(-5deg);
                    pointer-events: none;
                    opacity: 0.8;
                }

                .section-title-legal {
                    margin-bottom: 30px;
                }

                .badge-legal {
                    display: inline-block;
                    padding: 8px 20px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: white;
                    background: linear-gradient(45deg, #007bff, #0056b3);
                    border-radius: 20px;
                    margin-bottom: 20px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);
                }

                .title-legal {
                    font-size: 2.5rem;
                    font-weight: 700;
                    line-height: 1.3;
                    color: #1a202c;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
                    margin-bottom: 0;
                }

                .content-wrap-legal {
                    position: relative;
                    z-index: 5;
                }

                .description-legal {
                    font-size: 1.05rem;
                    line-height: 1.8;
                    color: #4a5568;
                    margin-bottom: 30px;
                    text-align: justify;
                }

                .highlight-box-legal {
                    background: linear-gradient(135deg, rgba(0, 122, 255, 0.08), rgba(0, 82, 212, 0.08));
                    border-left: 4px solid #007bff;
                    padding: 25px;
                    border-radius: 10px;
                    display: flex;
                    gap: 20px;
                    align-items: flex-start;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .highlight-box-legal:hover {
                    transform: translateX(5px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
                }

                .icon-legal {
                    flex-shrink: 0;
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(45deg, #007bff, #0056b3);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
                }

                .highlight-box-legal p {
                    margin: 0;
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: #2d3748;
                }

                /* Responsive adjustments */
                @media (max-width: 991px) {
                    .legal-img-wrap {
                        padding-right: 0;
                        padding-bottom: 0;
                        margin-bottom: 50px;
                        text-align: center;
                    }
                    .small-img-legal {
                        position: static;
                        margin-top: 20px;
                        width: 150px;
                    }
                    .img-overlay-shape-legal {
                        display: none;
                    }
                    .title-legal {
                        font-size: 2rem;
                    }
                }

                @media (max-width: 767px) {
                    .legal-info-section {
                        padding-top: 80px;
                        padding-bottom: 80px;
                    }
                    .main-img-legal {
                        border-radius: 15px;
                    }
                    .small-img-legal {
                        width: 120px;
                        border-radius: 10px;
                        border: 3px solid white;
                    }
                    .title-legal {
                        font-size: 1.8rem;
                    }
                    .description-legal {
                        font-size: 0.95rem;
                    }
                    .highlight-box-legal {
                        flex-direction: column;
                        padding: 20px;
                    }
                    .icon-legal {
                        width: 45px;
                        height: 45px;
                    }
                }
            `}</style>
        </section>
    );
};

export default InformacionLegal;