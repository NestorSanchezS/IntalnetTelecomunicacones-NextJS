import React from 'react';
import Link from 'next/link';

const SpeacialOfferTwo = () => {

    return (
        <section className="special-offer-area special-offer-two pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="special-offer-img wow fadeInLeft" data-wow-delay=".2s">
                            <img src="assets/img/images/special_offer_img.jpg" alt="img not found"/>
                            <div className="special-offer-text">TEST</div>
                            <div className="special-offer-mbps">
                                <span>Hasta</span>
                                <h3 className="title">40 MB</h3>
                                <p>Por  Segundo</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title mb-40">
                            <h2 className="title">Realiza Test de Velocidad</h2>
                        </div>
                        <div className="special-offer-content">
                            <p>Tenga en cuenta que debe cerrar todas las aplicaciones que se conecten a internet, asegurese de tener solo un computador conectado, cierre todas las venatanas del navegador que utilice.</p>
                            <div className="special-price-wrap">
                                {/* <h2 className="special-price"><sup>$</sup>45<sub>Monthly</sub></h2>
                                <p className="trial-link"><i className="flaticon-satellite-dish"></i><Link href="/contact"><a>Try Free For 1 Month</a></Link></p> */}
                            </div>
                            <a href="https://www.speedtest.net/es" target="_blank" className="btn transparent-btn">Iniciar Test</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default SpeacialOfferTwo;