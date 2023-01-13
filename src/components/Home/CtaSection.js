import React from 'react';
import Link from 'next/link';

const Cta = () => {

    return (
        <section className="cta-area cta-bg jarallax" style={{ backgroundImage:`url(${'/assets/img/bg/cta_bg.jpg'})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10">
                        <div className="cta-content text-center">
                            <div className="section-title white-title mb-35">
                                <h2 className="title">Need Fast & Secure Broadband? Use Netbox & The Real Network</h2>
                            </div>
                            <div className="cta-btn-wrap">
                                <Link href="/pricing"><a className="btn">View our Plans</a></Link>
                                <span className="or">OR</span>
                                <a href="tel:123" className="btn transparent-btn">+1 870 920 987</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default Cta;