import React from 'react';
// import Footer from '../components/Layout/Footer/Footer';
// import HomeTwoMain from '../components/HomeTwo/HomeTwoMain';
// import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';

const HomeTwo = () => {
    return (
        <React.Fragment>   
            {/* <HeaderTwo />
            <HomeTwoMain />
            <Footer /> */}
            <div className="remodeling-container">
                <div className="content-wrapper">
                    <div className="logo-section">
                        <img src="/assets/intalito.png" alt="Intalnet Logo" className="logo" />
                    </div>
                    <div className="notice-section">
                        <h1>Página en Remodelación</h1>
                        <p>Estamos trabajando para brindarte una mejor experiencia.</p>
                    </div>
                    
                    <div className="contact-section">
                        <h2>Canales de Atención</h2>
                        <div className="contact-item">
                            <i className="fab fa-whatsapp"></i>
                            <span>Línea Nacional: 322 580 2429</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>Correo: servicioalcliente@intalnet.com</span>
                        </div>
                    </div>

                    <div className="offices-section">
                        <h2>Nuestras Oficinas</h2>
                        <div className="offices-grid">
                            <div className="office-card">
                                <h3>Montería (Sede Principal)</h3>
                                <p>Cr. 25 No. 23-74 Calle la Pradera</p>
                                <p className="schedule">Lun-Vie: 8-12 & 2-6 | Sáb: 8-12</p>
                            </div>
                            <div className="office-card">
                                <h3>Tierralta</h3>
                                <p>Cr. 13 # 5-31 Barrio El Prado</p>
                            </div>
                            <div className="office-card">
                                <h3>Valencia</h3>
                                <p>Carrera 14 # 12-26 Barrio Centro</p>
                            </div>
                            <div className="office-card">
                                <h3>San Pedro</h3>
                                <p>Calle 49 No 45-00 Barrio Alfonso López</p>
                            </div>
                            <div className="office-card">
                                <h3>Puerto Libertador</h3>
                                <p>Carrera 10 # 11-20 Barrio Camilo Jiménez</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HomeTwo;

