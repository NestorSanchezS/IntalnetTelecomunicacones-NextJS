import React from 'react';
import Link from 'next/link';

const ServiceTwo = () => {

    return (
        <section className="services-area services-bg" style={{ backgroundImage:`url(${'assets/img/bg/services_bg.jpg'})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-7">
                        <div className="section-title white-title text-center mb-50">
                            <h2 className="title">Explora Nuestros Servicios Intalnet</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                        <div className="services-item service-item-two">
                            <div className="services-icon">
                                <i className="flaticon-internet-banking"></i>
                            </div>
                            <div className="services-content">
                                <h3 className="title"><Link href="/service-details"><a>Banda Ancha</a></Link></h3>
                                <p>Ofrecemos internet banda ancha. Navegación ilimitada a bajo costo.</p>
                                {/* <Link href="/service-details"><a className="btn btn-link">Read more</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                        <div className="services-item service-item-two">
                            <div className="services-icon">
                                <i className="flaticon-wifi-router"></i>
                            </div>
                            <div className="services-content">
                                <h3 className="title"><Link href="/service-details"><a>WIFI Internet</a></Link></h3>
                                <p>Todos los planes viene con Wi-Fi integrado, para que puedas conectar fácilmente tus dispositivos inalámbricos en tu casa.</p>
                                {/* <Link href="/service-details"><a className="btn btn-link">Read more</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                        <div className="services-item service-item-two">
                            <div className="services-icon">
                                <i className="flaticon-satellite-dish"></i>
                            </div>
                            <div className="services-content">
                                <h3 className="title"><Link href="/service-details"><a>Canales HD y SD</a></Link></h3>
                                <p>Disfruta de canales HD, la mejor experiencia para nuestros clientes y empleados.</p>
                                {/* <Link href="/service-details"><a className="btn btn-link">Read more</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                        <div className="services-item service-item-two">
                            <div className="services-icon">
                                <i className="flaticon-sync"></i>
                            </div>
                            <div className="services-content">
                                <h3 className="title"><Link href="/service-details"><a>Televisión Digital</a></Link></h3>
                                <p>Podrás disfrutar de canales de deportes, películas, infantiles, religiosos y mucho más.</p>
                                {/* <Link href="/service-details"><a className="btn btn-link">Read more</a></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default ServiceTwo;