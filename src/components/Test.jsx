import React, { useState } from "react";
import styled from "styled-components";

const AccordionWrapper = styled.div`
  .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
  }

  .active,
  .accordion:hover {
    background-color: #ccc;
  }

  .panel {
    padding: 0 18px;
    display: none;
    background-color: white;
    overflow: hidden;
  }
`;

function AccordionTab({ label, content, index, activeIndex, setActiveIndex }) {
  return (
    <>
      <button className='accordion' onClick={() => setActiveIndex(index)}>
        {label}
      </button>
      <div className={`panel ${activeIndex === index ? "active" : ""}`}>
        {content}
      </div>
    </>
  );
}

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AccordionWrapper>
      <AccordionTab
        label='Accordion Button 1'
        content={<p>Text for Accordion Button 1</p>}
        index={0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <AccordionTab
        label='Accordion Button 2'
        content={<p>Text for Accordion Button 2</p>}
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <AccordionTab
        label='Accordion Button 3'
        content={<p>Text for Accordion Button 3</p>}
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <AccordionTab
        label='Accordion Button 4'
        content={<p>Text for Accordion Button 4</p>}
        index={3}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </AccordionWrapper>
  );
}

export default Accordion;
