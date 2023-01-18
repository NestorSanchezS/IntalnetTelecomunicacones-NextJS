import React from "react";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

export const QuestionAndAnswer = ({ questions, answer }) => {
  console.log(answer);
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button">
              {questions}
            </button>
          </h2>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div className="accordion-body">{answer}</div>
      </AccordionItemPanel>
    </AccordionItem>
  );
};
