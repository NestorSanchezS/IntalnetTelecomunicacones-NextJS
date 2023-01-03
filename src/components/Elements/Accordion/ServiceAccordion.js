import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const ServiceAccordion = () => {

    return(
        <div className="services-faq-wrap">
            <div className="faq-wrapper">
                <div className="accordion" id="accordionExample1">
                    <div className="faq-wrapper faq-wrapper2">
                        <Accordion className="accodion-style--2" preExpanded={'3'}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <h2 className="accordion-header" id="headingOnec">
                                            <button className="accordion-button" type="button">
                                                Do I have to be an existing T-Mobile customer?
                                            </button>
                                        </h2>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="accordion-body">
                                        Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous
                                        other devices in your home simultaneously. People over time-we appreciate your patience! As soon as
                                        we're ready for you, we'll let you know
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <h2 className="accordion-header" id="headingTwoc">
                                            <button className="accordion-button collapsed" type="button">
                                                What is a commercial on-line service?
                                            </button>
                                        </h2>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="accordion-body">
                                        Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous
                                        other devices in your home simultaneously. People over time-we appreciate your patience! As soon as
                                        we're ready for you, we'll let you know
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <h2 className="accordion-header" id="headingThreec">
                                            <button className="accordion-button collapsed" type="button">
                                                How much does the T-Mobile Home Internet plan cost?
                                            </button>
                                        </h2>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="accordion-body">
                                        Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous
                                        other devices in your home simultaneously. People over time-we appreciate your patience! As soon as
                                        we're ready for you, we'll let you know
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <h2 className="accordion-header" id="headingFourc">
                                            <button className="accordion-button collapsed" type="button">
                                                How can I get Internet for my business?
                                            </button>
                                        </h2>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="accordion-body">
                                        Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous
                                        other devices in your home simultaneously. People over time-we appreciate your patience! As soon as
                                        we're ready for you, we'll let you know
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <h2 className="accordion-header" id="headingFivec">
                                            <button className="accordion-button collapsed" type="button">
                                                When do you expect to roll out more markets?
                                            </button>
                                        </h2>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="accordion-body">
                                        Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous
                                        other devices in your home simultaneously. People over time-we appreciate your patience! As soon as
                                        we're ready for you, we'll let you know
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceAccordion;





