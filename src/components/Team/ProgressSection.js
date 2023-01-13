import React from 'react';

const PricingSection = () => {

    return (
        <section className="best-team-area pt-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="best-team-images">
                                <img src="/assets/img/images/best_team01.png" className="main-img" alt="img not found"/>
                                <img src="/assets/img/images/best_team02.png" className="second-img" alt="img not found"/>
                                <h4 className="overlay-content">We Are <br/> The Best Team Ever</h4>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title mb-30">
                                <h2 className="title">We're Always Ready To Give Best Service</h2>
                            </div>
                            <div className="experience-content">
                                <p>We are the broadband internet service provider situated at New York City and on the other big reason pay more than they should is that they're too loyal.</p>
                                <div className="progress-item">
                                    <div className='progress-item-header'>
                                        <span className="title">Technical</span>
                                        <span className="title">95%</span>
                                    </div>
                                    <div className="progress--bar" data-percentage="95%">
                                        <div className="progress-number">
                                            <span className="percent"></span>
                                        </div>
                                        <div className="progress-bg">
                                            <div className="progress-fill progress-fill1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <div className='progress-item-header'>
                                        <span className="title">Support</span>
                                        <span className="title">80%</span>
                                    </div>
                                    <div className="progress--bar" data-percentage="80%">
                                        <div className="progress-number">
                                            <span className="percent"></span>
                                        </div>
                                        <div className="progress-bg">
                                            <div className="progress-fill progress-fill2">80%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <div className='progress-item-header'>
                                        <span className="title">Networking</span>
                                        <span className="title">65%</span>
                                    </div>
                                    <div className="progress--bar" data-percentage="65%">
                                        <div className="progress-number">
                                            <span className="percent"></span>
                                        </div>
                                        <div className="progress-bg">
                                            <div className="progress-fill progress-fill3"></div>
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

export default PricingSection;