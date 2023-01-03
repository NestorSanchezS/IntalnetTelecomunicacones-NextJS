import React from 'react';
import Link from 'next/link';

const ContactForm = () => {

    return (
        <section className="contact-area pt-115 pb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="contact-title">
                        <h3 className="title">Get in Touch</h3>
                    </div>
                    <form action="#" className="contact-form">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-grp">
                                    <input type="text" id="name" autoComplete="off" required/>
                                    <label htmlFor="name">First Name*</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-grp">
                                    <input type="text" id="phone" autoComplete="off" required/>
                                    <label htmlFor="phone">Phone</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-grp">
                                    <input type="email" id="email" autoComplete="off" required/>
                                    <label htmlFor="email">Email*</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-grp">
                                    <select className="form-select" aria-label="Default select example">
                                        <option>Subject</option>
                                        <option>Broadband Connection</option>
                                        <option>Wi-Fi Internet</option>
                                        <option>Satellite TV Box</option>
                                        <option>Netbox TV Box</option>
                                        <option>Mobile Connection</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-grp">
                            <textarea name="message" id="message" required></textarea>
                            <label htmlFor="message">Messages</label>
                        </div>
                        <p className="contact-form-check">
                            <input type="checkbox" className="form-check-input" id="cookies-consent"/>
                            <label htmlFor='cookies-consent' className="form-check-label">I agree with that, my data is being saved for further contact, see our <Link href="/contact"><a>Privacy Policy</a></Link></label>
                        </p>
                        <button type="submit" className="btn">Submit Message</button>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="contact-info-wrap">
                        <h3 className="contact-info-title">Direct Contact</h3>
                        <p>We are the broadband internet service provider at New</p>
                        <ul className="contact-info-list">
                            <li><i className="fas fa-phone-alt"></i><a href="tel:123">+1 872 670 780</a></li>
                            <li><i className="flaticon-email"></i><a href="mailto:info@example.com">info@example.com</a></li>
                            <li><i className="flaticon-location"></i><span>3741 Hamilton Drive Huntingtown, <br/> MD 20639</span></li>
                        </ul>
                    </div>
                    <div className="contact-info-wrap">
                        <h3 className="contact-info-title">Live Chat</h3>
                        <p>We are the broadband internet service provider at New</p>
                        <div className="live-chat">
                            <div className="icon"><i className="fas fa-comment"></i></div>
                            <a href="#" className="live-chat-link">Live Chat to Executive</a>
                        </div>
                    </div>
                    <div className="contact-info-wrap">
                        <h3 className="contact-info-title">Not interested to talk?</h3>
                        <p>Please check out or best suggested <Link href="/"><a>Help Center & FAQ</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
    
}

export default ContactForm;