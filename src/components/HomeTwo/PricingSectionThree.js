import React from 'react';
import Link from 'next/link';

const PricingThree = () => {

    return (
        <section className="pricing-three-area pt-110 pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-8">
                        <div className="section-title text-center mb-50">
                            <h2 className="title">Descubra Nuestros Planes</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div className="pricing-three-item mb-30">
                            <div className="pricing-three-head">
                                <h4 className="title">Starter Bundle</h4>
                                <span className="devices-support">02 Devices</span>
                                <ul className="devices-icon-wrap">
                                    <li><i className="flaticon-sync"></i></li>
                                    <li><i className="flaticon-satellite-dish"></i></li>
                                </ul>
                            </div>
                            <div className="pricing-three-list">
                                <ul>
                                    <li>Home broadband</li>
                                    <li>Satellite TV</li>
                                    <li>Cell phone connection</li>
                                    <li>Home security</li>
                                    <li>Home broadband</li>
                                </ul>
                            </div>
                            <h2 className="pricing-three-price"><span>From</span> 15.99<span>/mon</span></h2>
                            <Link href="/pricing"><a className="btn transparent-btn">Get Started</a></Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div className="pricing-three-item mb-30">
                            <div className="pricing-three-head">
                                <h4 className="title">Combo Bundle</h4>
                                <span className="devices-support">03 Devices</span>
                                <ul className="devices-icon-wrap">
                                    <li><i className="flaticon-sync"></i></li>
                                    <li><i className="flaticon-satellite-dish"></i></li>
                                    <li><i className="flaticon-device"></i></li>
                                </ul>
                            </div>
                            <div className="pricing-three-list">
                                <ul>
                                    <li>Home broadband</li>
                                    <li>Satellite TV</li>
                                    <li>Cell phone connection</li>
                                    <li>Home security</li>
                                    <li>Home broadband</li>
                                </ul>
                            </div>
                            <h2 className="pricing-three-price"><span>From</span> 25.99<span>/mon</span></h2>
                            <Link href="/pricing"><a className="btn transparent-btn">Get Started</a></Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div className="pricing-three-item mb-30">
                            <div className="pricing-three-head">
                                <h4 className="title">Premium Bundle</h4>
                                <span className="devices-support">04 Devices</span>
                                <ul className="devices-icon-wrap">
                                    <li><i className="flaticon-sync"></i></li>
                                    <li><i className="flaticon-satellite-dish"></i></li>
                                    <li><i className="flaticon-device"></i></li>
                                    <li><i className="flaticon-laptop"></i></li>
                                </ul>
                            </div>
                            <div className="pricing-three-list">
                                <ul>
                                    <li>Home broadband</li>
                                    <li>Satellite TV</li>
                                    <li>Cell phone connection</li>
                                    <li>Home security</li>
                                    <li>Home broadband</li>
                                </ul>
                            </div>
                            <h2 className="pricing-three-price"><span>From</span> 45.99<span>/mon</span></h2>
                            <Link href="/pricing"><a className="btn transparent-btn">Get Started</a></Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div className="pricing-three-item mb-30">
                            <div className="pricing-three-head">
                                <h4 className="title">Full House Pack</h4>
                                <span className="devices-support">Any Devices</span>
                                <ul className="devices-icon-wrap">
                                    <li><i className="flaticon-device"></i></li>
                                </ul>
                            </div>
                            <div className="pricing-three-list">
                                <ul>
                                    <li>Home broadband</li>
                                    <li>Satellite TV</li>
                                    <li>Cell phone connection</li>
                                    <li>Home security</li>
                                    <li>Home broadband</li>
                                </ul>
                            </div>
                            <h2 className="pricing-three-price"><span>From</span> 85.99<span>/mon</span></h2>
                            <Link href="/pricing"><a className="btn transparent-btn">Get Started</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default PricingThree;