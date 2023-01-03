import React from 'react';
import Link from 'next/link';

const PricingTwo = () => {

    return (
        <section className="pricing-two-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-9">
                        <div className="pricing-two-item" style={{ backgroundImage:`url(${'assets/img/images/pricing_item_bg01.jpg'})`}}>
                            <div className="pricing-two-content">
                                <h3 className="title">Netbox TV Box</h3>
                                <p>55 Channels with Cristal View</p>
                                <h3 className="price"><sup>$</sup>40<span>From <br/> /Month</span></h3>
                                <div className="pricing-btn">
                                    <Link href="/pricing"><a className="btn btn-link">View Plans</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-9">
                        <div className="pricing-two-item" style={{ backgroundImage:`url(${'assets/img/images/pricing_item_bg02.jpg'})`}}>
                            <div className="pricing-two-content">
                                <h3 className="title">Netbox Mobile Net</h3>
                                <p>Limited Internet with Mobile & TV</p>
                                <h3 className="price"><sup>$</sup>90<span>From <br/> /Month</span></h3>
                                <div className="pricing-btn">
                                    <Link href="/pricing"><a className="btn btn-link">View Plans</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-9">
                        <div className="pricing-two-item" style={{ backgroundImage:`url(${'assets/img/images/pricing_item_bg03.jpg'})`}}>
                            <div className="pricing-two-content">
                                <h3 className="title">Netbox WiFi</h3>
                                <p>Unlimited broadband with any device</p>
                                <h3 className="price"><sup>$</sup>150<span>From <br/> /Month</span></h3>
                                <div className="pricing-btn">
                                    <Link href="/pricing"><a className="btn btn-link">View Plans</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default PricingTwo;