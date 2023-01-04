import React from 'react';
import Link from 'next/link';

const SubscribeTwo = () => {

    return (
        <section className="subscribe-two-area subscribe-two-bg" style={{ backgroundImage:`url(${'assets/img/bg/subscribe_bg02.jpg'})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                        <div className="subscribe-img wow fadeInRight" data-wow-delay=".2s">
                            <img src="assets/img/images/subscribe_img02.png" alt="img not found"/>
                            {/* <h2 className="overlay-price" style={{ backgroundImage: `url(${'assets/img/images/fact_img02.jpg'})`}}><span></span> <span></span></h2> */}
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="section-title white-title mb-30">
                            <h2 className="title">Disfruta de Deportes, Películas, Programas de Televión y más</h2>
                        </div>
                        <div className="subscribe-content">
                            <p>La mejor televisiónn digital del departamento de Córdoba llegó para quedarse. Contamos con canales HD y SD. La mejor experiencia que necesitas para tú entretenimiento.</p>
                            <h4 className="title"><span>Suscribete a Intalnet Tv,</span> disfruta de todo y más.</h4>
                            <Link href="/contact"><a className="btn">Contactanos</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default SubscribeTwo;