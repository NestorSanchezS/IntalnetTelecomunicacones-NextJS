import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import { BASE_URL } from "../../constans/dominio";
import { QuestionAndAnswer } from "./QuestionAndAnswer";

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

  const getIdQuesAndAns = getQuestions?.filter((num) => num.id <= 6);
  const getIdQuesAndAns2 = getQuestions?.filter((num) => num.id > 6);

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
                    {getIdQuesAndAns.map((e) => (
                      <QuestionAndAnswer
                        key={e.id}
                        questions={e.question}
                        answer={e.answer}
                      />
                    ))}
                  </Accordion>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-wrapper faq-wrapper2">
                  <Accordion className="accodion-style--1" preExpanded={"0"}>
                    {getIdQuesAndAns2.map((e) => (
                      <QuestionAndAnswer
                        key={e.id}
                        questions={e.question}
                        answer={e.answer}
                      />
                    ))}
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
