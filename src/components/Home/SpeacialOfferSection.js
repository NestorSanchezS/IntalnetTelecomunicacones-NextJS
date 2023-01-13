import React from 'react';
import Link from 'next/link';

const SpeacialOffer = () => {

    return (
        <section className="special-offer-area pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-0 order-lg-2">
                        <div className="special-offer-img wow fadeInRight" data-wow-delay=".2s">
                            <img src="/assets/img/images/special_offer_img.jpg" alt="img not found"/>
                            <div className="special-offer-text">Special offer</div>
                            <div className="special-offer-mbps">
                                <span>UP TO</span>
                                <h3 className="title">40 MB</h3>
                                <p>PER Second</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title mb-40">
                            <h2 className="title">Get Broadband Network At Very Cheap Price</h2>
                        </div>
                        <div className="special-offer-content">
                            <p>Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous other devices. Gauge your students’ skill level with the initial test and follow their progress.</p>
                            <div className="special-price-wrap">
                                <h2 className="special-price"><sup>$</sup>25<sub>Monthly</sub></h2>
                                <p className="trial-link"><i className="flaticon-satellite-dish"></i><Link href="/contact"><a>Try Free For 1 Month</a></Link></p>
                            </div>
                            <Link href="/pricing"><a className="btn transparent-btn">Get started</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default SpeacialOffer;