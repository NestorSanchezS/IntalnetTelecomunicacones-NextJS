import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const ServiceThree = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);
    return (
        <React.Fragment>
            <section className="inner-services-area pt-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                            <div className="services-inner-img wow fadeInRight" data-wow-delay=".2s">
                                <img src="/assets/img/images/in_services_img.jpg" alt="img not found"/>
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='mSEYTJZ4N_c' onClose={() => { openVideoModal(); }} />
                                <div className="video-paly">
                                    <a href="#!" className="popup-video" onClick={() => { openVideoModal(); }}> <i className="fas fa-play"></i> </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title mb-30">
                                <h2 className="title">Encuentra Las Mejores Soluciones de Red con Nosotros</h2>
                            </div>
                            <div className="services-inner-content">
                                <p>Internet residencial para conectar su computadora, celular y otros dispositivos en su hogar simultáneamente</p>
                                <ul className="services-inner-list">
                                    <li><img src="/assets/img/icons/check.png" alt="img not found"/> Garantizamos un servicio de calidad.</li>
                                    <li><img src="/assets/img/icons/check.png" alt="img not found"/> Equipo Técnico Expecializado.</li>
                                    <li><img src="/assets/img/icons/check.png" alt="img not found"/> Tecnologia Avanzada</li>
                                    <li><img src="/assets/img/icons/check.png" alt="img not found"/> Internet Por Fibra Optica.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ServiceThree;