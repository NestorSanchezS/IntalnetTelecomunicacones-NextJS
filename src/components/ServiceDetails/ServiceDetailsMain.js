import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcumb';
import Link from 'next/link';
const Brand = dynamic(() => import('../Home/BrandSection'), {
    ssr: false
})
const ServiceAccordion = dynamic(() => import('../Elements/Accordion/ServiceAccordion'), {
    ssr: false
})
import ModalVideo from 'react-modal-video';

const ServiceDetailsMain = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);
    return (
        <main>

	            {/* breadcrumb-area-start */}
	            <Breadcrumb pageTitle="Broadband"/>
	            {/* breadcrumb-area-end */}

                <React.Fragment>
				<div className="services-details-area pt-120 pb-60">
                    <div className="container">
                        <div className="row services-details-wrap">
                            <div className="col-4">
                                <aside className="services-sidebar">
                                    <div className="widget services-widget">
                                        <ul className="services-sidebar-list">
                                            <li className="active"><Link href="/service-details"><a><span className="count">01.</span> Broadband Connection</a></Link></li>
                                            <li><Link href="/service-details"><a><span className="count">02.</span> Wi-Fi Internet</a></Link></li>
                                            <li><Link href="/service-details"><a><span className="count">03.</span> Satellite TV Box</a></Link></li>
                                            <li><Link href="/service-details"><a><span className="count">04.</span> Netbox TV Box</a></Link></li>
                                            <li><Link href="/service-details"><a><span className="count">05.</span> Mobile Connection</a></Link></li>
                                            <li><Link href="/service-details"><a><span className="count">06.</span> Home Service</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="widget sidebar-doc-download">
                                        <h5 className="title"><span>Download</span></h5>
                                        <ul className="services-doc-list">
                                            <li>
                                                <div className="icon"><img src="/assets/img/icons/pdf.png" alt="img not found"/></div>
                                                <div className="content">
                                                    <h6 className="title"><a href="#">Service Brochure</a></h6>
                                                    <span>PDF <small>|</small> 13 MB</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon"><img src="/assets/img/icons/doc.png" alt="img not found"/></div>
                                                <div className="content">
                                                    <h6 className="title"><a href="#">Company Profile</a></h6>
                                                    <span>Word <small>|</small> 25 MB</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-8">
                                <div className="services-details-img">
                                    <img src="/assets/img/images/services_details01.jpg" alt="img not found"/>
                                </div>
                                <div className="services-details-content">
                                    <h2 className="title">Broadband Connection Setup</h2>
                                    <p>All kinds of laptop, desktop computer servicing center forIt is a long established fact that a reader will be distracted by the readable computer disk. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec. Predefined chunks as necessary, making this the first true generator on the Internet. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.</p>
                                    <figure>
                                        <div className="row">
                                            <div className="col-xl-6 col-md-7">
                                                <p>From oil changes, filter replacements, and fluid flushes to brakes and brake repair, shocks and struts, muffler repair, tires, and wheel alignment.</p>
                                                <div className="services-chart">
                                                    <img src="/assets/img/images/services_chart.svg" alt="img not found"/>
                                                </div>
                                                <ul className="services-growth-list">
                                                    <li><img src="/assets/img/icons/check.png" alt="img not found"/> Single Device Uses</li>
                                                    <li><img src="/assets/img/icons/check.png" alt="img not found"/> Internet Connection</li>
                                                    <li><img src="/assets/img/icons/check.png" alt="img not found"/> Phone & Computer</li>
                                                    <li><img src="/assets/img/icons/check.png" alt="img not found"/> Broadband Success</li>
                                                </ul>
                                            </div>
                                            <div className="col-xl-6 col-md-5">
                                                <div className="services-details-video">
                                                    <img src="/assets/img/images/services_details02.jpg" alt="img not found"/>
                                                    <ModalVideo channel='youtube' isOpen={isOpen} videoId='Cft-FZ3HiGI' onClose={() => { openVideoModal(); }} />
                                                    <div className="video-paly">
                                                        <a href="#!" className="popup-video" onClick={() => { openVideoModal(); }}> <i className="fas fa-play"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                    <p>From oil changes, filter replacements, and fluid flushes to brakes and brake repair, shocks and struts, muffler repair, tires, and wheel alignment, we’ve got you covered. Use the quick links in the gold bar to book an appointment at your Car Repair Service store today. Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                                    <ServiceAccordion />
                                    <div className="services-details-bottom">
                                        <Link href="/contact"><a className="btn">Contact Us</a></Link>
                                        <div className="footer-call">
                                            <div className="icon">
                                                <i className="flaticon-support"></i>
                                            </div>
                                            <div className="content">
                                                <span>Call For Help</span>
                                                <h6 className="title"><a href="tel:123">(987) 547587587</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </React.Fragment>

                {/* brand-area-start */}
	            <Brand />
	            {/* brand-area-end */}
        	</main>
    );
};

export default ServiceDetailsMain;