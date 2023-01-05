import React from 'react';
import Link from 'next/link';
import FooterBottom from './FooterBottom';

const Footer = () => {

    return (
        <footer>
            <div className="footer-wrap">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-3">
                            <div className="footer-widget">
                                <div className="footer-contact">
                                    <div className="footer-call">
                                        <div className="icon">
                                            <i className="flaticon-support"></i>
                                        </div>
                                        <div className="content">
                                            <span>Montería - Córdoba</span>
                                            <h6 className="title"><a href="tel:123">(+51) 301 5168800</a></h6>
                                        </div>
                                    </div>
                                    <div className="footer-call">
                                        <div className="icon">
                                            <i className="flaticon-support"></i>
                                        </div>
                                        <div className="content">
                                            <span>Tierralta - Córdoba</span>
                                            <h6 className="title"><a href="tel:123">(+51) 320 4013011</a></h6>
                                        </div>
                                    </div>
                                    <div className="footer-call">
                                        <div className="icon">
                                            <i className="flaticon-support"></i>
                                        </div>
                                        <div className="content">
                                            <span>Valencia - Córdoba</span>
                                            <h6 className="title"><a href="tel:123">(+51) 315 2522215</a></h6>
                                        </div>
                                    </div>
                                    <div className="footer-call">
                                        <div className="icon">
                                            <i className="flaticon-support"></i>
                                        </div>
                                        <div className="content">
                                            <span>Los Córdoba - córdoba</span>
                                            <h6 className="title"><a href="tel:123">(+51) 314 8030478</a></h6>
                                        </div>
                                    </div>
                                    {/* <h6 className="title">Contact info</h6>
                                    <p>Street House, Greater London NW1 8JR, UK</p> */}
                                    <div className="footer-social">
                                        <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                        <a href="https://www.facebook.com/profile.php?id=100064053851230" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://www.instagram.com/intalnet_telecomunicaciones/" target="_blank"><i className="fab fa-instagram"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="footer-widget">
                                <div className="fw-title">
                                    <h4 className="title">Categories</h4>
                                </div>
                                <ul className="fw-list">
                                    <li><Link href="/service-details"><a>Laptops & Computers</a></Link></li>
                                    <li><Link href="/service-details"><a>Home & Life Style</a></Link></li>
                                    <li><Link href="/service-details"><a>Men's Fashion</a></Link></li>
                                    <li><Link href="/service-details"><a>Women's Fashion</a></Link></li>
                                    <li><Link href="/service-details"><a>Sport & Gyms</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="footer-widget">
                                <div className="fw-title">
                                    <h4 className="title">About Company</h4>
                                </div>
                                <ul className="fw-list">
                                    <li><Link href="/about"><a>About Company</a></Link></li>
                                    <li><Link href="/contact"><a>Contact Us</a></Link></li>
                                    <li><Link href="/contact"><a>Privacy policy</a></Link></li>
                                    <li><Link href="/contact"><a>Terms & Conditions</a></Link></li>
                                    <li><Link href="/contact"><a>Mission & Vision</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="footer-widget">
                                <div className="fw-title">
                                    <h4 className="title">Service Schedule</h4>
                                </div>
                                <ul className="fw-schedule-list">
                                    <li>Saturday - Sunday - Mon <span>8:30 AM - 10 PM</span></li>
                                    <li>Tuesday - Wed - Thurs <span>9:30 AM - 12 PM</span></li>
                                    <li>Friday : <span className="close">Closed</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
}

export default Footer;