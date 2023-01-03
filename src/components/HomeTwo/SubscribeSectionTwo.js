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
                            <h2 className="overlay-price"><span>Only</span> $89 <span>Per Month</span></h2>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="section-title white-title mb-30">
                            <h2 className="title">Enjoy Sports Movies, TV Shows & More</h2>
                        </div>
                        <div className="subscribe-content">
                            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything hidden in the middle of text</p>
                            <h4 className="title"><span>Subscribe Netbox TV Box & Get</span> FREE Wi-Fi For 1 Month</h4>
                            <Link href="/pricing"><a className="btn">Try Us Free</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default SubscribeTwo;