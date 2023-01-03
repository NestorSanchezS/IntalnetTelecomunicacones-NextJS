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
                                <img src="assets/img/images/in_services_img.jpg" alt="img not found"/>
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='mSEYTJZ4N_c' onClose={() => { openVideoModal(); }} />
                                <div className="video-paly">
                                    <a href="#!" className="popup-video" onClick={() => { openVideoModal(); }}> <i className="fas fa-play"></i> </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title mb-30">
                                <h2 className="title">Find Perfect Network Solutions From Us</h2>
                            </div>
                            <div className="services-inner-content">
                                <p>Home Internet to connect your computer, phone, and other devices in your home simultaneously.</p>
                                <ul className="services-inner-list">
                                    <li><img src="assets/img/icons/check.png" alt="img not found"/> We ensure quality service</li>
                                    <li><img src="assets/img/icons/check.png" alt="img not found"/> 24/7 VIP support</li>
                                    <li><img src="assets/img/icons/check.png" alt="img not found"/> Skilled technical team</li>
                                    <li><img src="assets/img/icons/check.png" alt="img not found"/> Free internet in new connection</li>
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