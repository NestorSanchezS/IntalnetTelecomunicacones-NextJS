import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
import Link from 'next/link';

const Faq = () => {

    return (
        <section className="faq-area pt-110 pb-120">
            <div className="container">
                <div className="row align-items-center align-items-xl-end">
                    <div className="col-lg-6">
                        <div className="section-title mb-40">
                            <h2 className="title">Frequently Asked Questions</h2>
                        </div>
                        <div className="faq-wrapper">
                            <Accordion className="accodion-style--1" preExpanded={['0']}>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Do I have to be an existing T-Mobile customer?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous other devices in your home simultaneously. People over time-we appreciate your patience! As soon as we're ready for you, we'll let you know</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is a commercial on-line service?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium   mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artecto beatae dicta sunt explicabo. Nemo enim ipsam voluptatem quia  voluptas  aspernatur aut odit aut fugit</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            How much does the T-Mobile Home Internet plan cost?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p>Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous other devices in your home simultaneously. People over time-we appreciate your patience! As soon as we're ready for you, we'll let you know</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            When do you expect to roll out more markets?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p>Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous other devices in your home simultaneously. People over time-we appreciate your patience! As soon as we're ready for you, we'll let you know</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-map-area">
                            <div className="faq-map-title">
                                <h4 className="title">We are everywhere</h4>
                                <p>Home Internet customers that did not provide an email address for service notifications</p>
                            </div>
                            <div className="faq-map text-center">
                                <img src="/assets/img/images/map_img.png" alt="img not found"/>
                                <Link href="/contact"><a className="btn map-btn">Check Your Network Coverage</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default Faq;