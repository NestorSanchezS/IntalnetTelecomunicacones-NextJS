import React from 'react';
import Link from 'next/link';

const About = () => {

    return (
        <section className="about-area pt-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img-wrap">
                            <img src="assets/img/images/about_img01.jpg" alt="img not found"/>
                            <img src="assets/img/images/about_img02.jpg" className="main-img" alt="img not found"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title mb-30">
                            <h2 className="title">We Provide Best Internet Connection World Wide</h2>
                        </div>
                        <div className="about-content">
                            <p>Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous other devices. Gauge your students’ skill level with the initial test and follow their progress.</p>
                            <ul className="about-list">
                                <li>Expert technical team</li>
                                <li>Best network</li>
                                <li>50+ coverage areas</li>
                                <li>24/7 quick support</li>
                                <li>Reasonable price packages</li>
                                <li>Trusted & recommended</li>
                            </ul>
                            <Link href="/contact"><a className="btn transparent-btn">Get Started</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default About;