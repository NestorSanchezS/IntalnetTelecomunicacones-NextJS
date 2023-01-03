import React from 'react';
import Link from 'next/link';


const PricingFour = () => {

    return (
        <section className="pricing-area position-relative pt-110 pb-20">
            <div className="pricing-bg" style={{ backgroundImage:`url(${'assets/img/bg/pricing_bg.jpg'})`}}></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="section-title text-center white-title mb-50">
                                <h2 className="title">Discover Our Best Value Plans</h2>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-plan-wrap">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="pricing-item mb-30">
                                    <div className="pricing-thumb">
                                        <img src="assets/img/images/pricing_thumb01.jpg" alt="img not found"/>
                                        <h3 className="title">Internet For Personal</h3>
                                        <div className="net-speed">
                                            <h5>5-10 <span>MBPS</span></h5>
                                        </div>
                                    </div>
                                    <div className="pricing-content">
                                        <ul className="pricing-list">
                                            <li><img src="assets/img/icons/check.png" alt="img not found"/> Single Device Uses</li>
                                            <li><img src="assets/img/icons/check.png" alt="img not found"/> Phone & Computer</li>
                                            <li><img src="assets/img/icons/check.png" alt="img not found"/> Random IP</li>
                                        </ul>
                                        <div className="price-wrap">
                                            <span>Start From</span>
                                            <h3 className="price">$25.00<sub>/Month</sub></h3>
                                        </div>
                                        <div className="pricing-btn">
                                            <Link href="/pricing"><a className="btn btn-link">View Plans <i className="fal fa-arrow-right"></i></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="pricing-item mb-30">
                                    <div className="pricing-thumb">
                                        <img src="assets/img/images/pricing_thumb02.jpg" alt="img not found"/>
                                        <h3 className="title">Internet For Family</h3>
                                        <div className="net-speed">
                                            <h5>10-50 <span>MBPS</span></h5>
                                        </div>
                                    </div>
                                    <div className="pricing-content">
                                        <ul className="pricing-list">
                                            <li><img src="assets/img/icons/check.png" alt="img not found"/> 20 Devices Allowed</li>
                                            <li><img src="assets/img/icons/check.png" alt="img not found"/> Phone, Computer & TV</li>
                                            <li><img src="assets/img/icons/check.png" alt="img not found"/> Random IP</li>
                                        </ul>
                                        <div className="price-wrap">
                                            <span>Start From</span>
                                            <h3 className="price">$55.00<sub>/Month</sub></h3>
                                        </div>
                                        <div className="pricing-btn">
                                            <Link href="/pricing"><a className="btn btn-link">View Plans <i className="fal fa-arrow-right"></i></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="pricing-item mb-30">
                                    <div className="pricing-thumb">
                                        <img src="assets/img/images/pricing_thumb03.jpg" alt="img not found"/>
                                        <h3 className="title">Internet For Corporate</h3>
                                        <div className="net-speed">
                                            <h5>Unlimited <span>MBPS</span></h5>
                                        </div>
                                    </div>
                                    <div className="pricing-content">
                                        <ul className="pricing-list">
                                            <li><img src="assets/img/icons/check.png" alt="img not found"/> Unlimited Devices Allowed</li>
                                            <li><img src="assets/img/icons/check.png" alt="img not found"/> Any Devices</li>
                                            <li><img src="assets/img/icons/check.png" alt="img not found"/> Fixed IP</li>
                                        </ul>
                                        <div className="price-wrap">
                                            <span>Start From</span>
                                            <h3 className="price">$95.00<sub>/Month</sub></h3>
                                        </div>
                                        <div className="pricing-btn">
                                            <Link href="/pricing"><a className="btn btn-link">View Plans <i className="fal fa-arrow-right"></i></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
    
}

export default PricingFour;