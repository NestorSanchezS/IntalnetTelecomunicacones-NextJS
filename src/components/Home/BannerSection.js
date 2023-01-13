import React from 'react';
import Link from 'next/link';

const Banner = () => {

    return (
        <section className="banner-area banner-bg" style={{ backgroundImage:`url(${'/assets/img/slider/banner_bg.jpg'})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-9">
                        <div className="banner-content">
                            <h2 className="title wow fadeInUp" data-wow-delay=".2s">Journey With Fast Internet</h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">Fast Speed + No Service Charge + No Contracts + Powerful Coverage</p>
                            <div className="banner-price wow fadeInUp" data-wow-delay=".6s">
                                <h3 className="price">$25.00<sub>/Month</sub></h3>
                            </div>
                            <Link href="/pricing"><a className="btn wow fadeInUp">Get Started</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-phone">
                <div className="icon">
                    <i className="fal fa-mobile-android"></i>
                </div>
                <div className="content">
                    <span>Customer Service:</span>
                    <h5 className="number"><a href="tel:123">+1 872 923 025</a></h5>
                </div>
            </div>
        </section>
    );
    
}

export default Banner;