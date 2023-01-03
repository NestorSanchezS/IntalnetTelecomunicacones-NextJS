import React from 'react';
import Link from 'next/link';
import CounterStyleTwo from '../Elements/Counter/CounterStyleTwo';

const Fact = () => {

    return (
        <section className="fact-area pt-85 pb-110">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="fact-img-wrap">
                            <img src="assets/img/images/fact_img.jpg" className="main-img" alt="img not found"/>
                            <img src="assets/img/images/fact_img02.jpg" className="small-img" alt="img not found"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title mb-40">
                            <h2 className="title">Experience The Features Magic of Netbox</h2>
                        </div>
                        <div className="video-content-wrap">
                            <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.</p>
                            <CounterStyleTwo />
                            <Link href="/pricing"><a className="btn transparent-btn">Try Us Free</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default Fact;