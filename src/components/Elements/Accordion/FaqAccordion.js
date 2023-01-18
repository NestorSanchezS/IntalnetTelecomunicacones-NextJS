import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import { BASE_URL } from "../../constans/dominio";

const FaqAccordion = () => {
  const [getQuestions, setGetQuestions] = useState([]);
  //Consumimos Api question intalnet json-server
  useEffect(() => {
    const callApiQuestions = async () => {
      try {
        const url = BASE_URL + "questions";
        const response = await fetch(url);
        const data = await response.json();
        setGetQuestions(data);
      } catch (error) {
        console.log(error);
      }
    };
    callApiQuestions();
  }, []);
  console.log(getQuestions);
  return (
    <section className="faq-area pt-110 pb-120">
      <div className="container">
        <div className="faq-title-wrap mb-50">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h2 className="title">Preguntas Frecuentes</h2>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="section-desc">
                <p>
                  Home Internet to connect your computer, phone, and numerous
                  other devices. Gauge your students’ skill level with the
                  initial test.
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="faq-wrappers">
          <div className="accordion" id="accordionExample">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-wrapper faq-wrapper2">
                  <Accordion className="accodion-style--1" preExpanded={"0"}>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button">
                              Do I have to be an existing T-Mobile customer?
                            </button>
                          </h2>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="accordion-body">
                          Yes! You'll be able to use your T-Mobile Home Internet
                          to connect your computer, phone, and numerous other
                          devices in your home simultaneously. People over
                          time-we appreciate your patience! As soon as we're
                          ready for you, we'll let you know
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                            >
                              What is a commercial on-line service?
                            </button>
                          </h2>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="accordion-body">
                          Yes! You'll be able to use your T-Mobile Home Internet
                          to connect your computer, phone, and numerous other
                          devices in your home simultaneously. People over
                          time-we appreciate your patience! As soon as we're
                          ready for you, we'll let you know
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                            >
                              How much does the T-Mobile Home Internet plan
                              cost?
                            </button>
                          </h2>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="accordion-body">
                          Yes! You'll be able to use your T-Mobile Home Internet
                          to connect your computer, phone, and numerous other
                          devices in your home simultaneously. People over
                          time-we appreciate your patience! As soon as we're
                          ready for you, we'll let you know
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                            >
                              How can I get Internet for my business?
                            </button>
                          </h2>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="accordion-body">
                          Yes! You'll be able to use your T-Mobile Home Internet
                          to connect your computer, phone, and numerous other
                          devices in your home simultaneously. People over
                          time-we appreciate your patience! As soon as we're
                          ready for you, we'll let you know
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h2 className="accordion-header" id="headingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                            >
                              When do you expect to roll out more markets?
                            </button>
                          </h2>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="accordion-body">
                          Yes! You'll be able to use your T-Mobile Home Internet
                          to connect your computer, phone, and numerous other
                          devices in your home simultaneously. People over
                          time-we appreciate your patience! As soon as we're
                          ready for you, we'll let you know
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-wrapper faq-wrapper2">
                  <Accordion className="accodion-style--1" preExpanded={"0"}>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button">
                              Do I have to be an existing T-Mobile customer?
                            </button>
                          </h2>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="accordion-body">
                          Yes! You'll be able to use your T-Mobile Home Internet
                          to connect your computer, phone, and numerous other
                          devices in your home simultaneously. People over
                          time-we appreciate your patience! As soon as we're
                          ready for you, we'll let you know
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                            >
                              What is a commercial on-line service?
                            </button>
                          </h2>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="accordion-body">
                          Yes! You'll be able to use your T-Mobile Home Internet
                          to connect your computer, phone, and numerous other
                          devices in your home simultaneously. People over
                          time-we appreciate your patience! As soon as we're
                          ready for you, we'll let you know
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                            >
                              How much does the T-Mobile Home Internet plan
                              cost?
                            </button>
                          </h2>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="accordion-body">
                          Yes! You'll be able to use your T-Mobile Home Internet
                          to connect your computer, phone, and numerous other
                          devices in your home simultaneously. People over
                          time-we appreciate your patience! As soon as we're
                          ready for you, we'll let you know
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                            >
                              How can I get Internet for my business?
                            </button>
                          </h2>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="accordion-body">
                          Yes! You'll be able to use your T-Mobile Home Internet
                          to connect your computer, phone, and numerous other
                          devices in your home simultaneously. People over
                          time-we appreciate your patience! As soon as we're
                          ready for you, we'll let you know
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h2 className="accordion-header" id="headingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                            >
                              When do you expect to roll out more markets?
                            </button>
                          </h2>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="accordion-body">
                          Yes! You'll be able to use your T-Mobile Home Internet
                          to connect your computer, phone, and numerous other
                          devices in your home simultaneously. People over
                          time-we appreciate your patience! As soon as we're
                          ready for you, we'll let you know
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
