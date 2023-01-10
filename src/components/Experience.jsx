import React from "react";
import { useState } from "react";
import "../index.css";
import AccordionFolder from "./AccordionFolder";
import Test from "./Test";

const Experience = () => {
  return (
    <section
      id='experience'
      className='flex flex-col m-auto place-items-center xl:max-w-[1280px] relative w-full lg:w-10/12 sm:mt-[6rem] md:mt-[6rem] lg:mt-[7rem] my-20'
    >
      <div className='flex justify-center sm:justify-left md:justify-left lg:justify-left flex-row font-roboto text-springGreen font-base text-[1rem]'>
        <h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
        <h3 className='text-3xl font-normal ml-3 text-blueDianne'>
          {" "}
          Experience
        </h3>
      </div>
      <div className='flex flex-col mx-4 sm:mx-20 min-w-[400px] lg:min-w-[625px] max-w-[625px] mt-10 drop-shadow-xl'>
        <AccordionFolder title='UltraIT.net // March 2020 - April 2020 // Javea, Spain'>
          <div className='italic font-light text-sm'>
            <p>
              ▹ Communicated with the Lead Developer in editing and modifying
              existing web pages
            </p>
            <p>
              ▹ Studied the company’s internal C# code base and .NET environment
              to transition into development
            </p>
            <p>
              ▹ Designed and prototyped Real Estate website mock-up from the
              ground up in Adobe XD and Photoshop using best aesthetics for
              Layout and Colour Principles
            </p>
            <p>
              ▹ Translated the design into HTML, CSS and JavaScript to add
              responsiveness and functionality
            </p>
          </div>
        </AccordionFolder>
        <AccordionFolder title='Milne at Home - March 2014 - July 2017 // Kingston, NY USA'>
          <div className='italic font-light text-sm'>
            <p>
              ▹ Met with high-end clients, discussed concepts and ideas and
              offered creative input and solutions
            </p>
            <p>
              ▹ Managed the workshop, and supported a well-functioning team
              environment while delegating tasks and ideas to team members in
              production of Custom Furniture using various materials
            </p>
            <p>
              ▹ Designed and built from concept to a finished product Custom
              Furniture. Restored antique pieces of furniture
            </p>
          </div>
        </AccordionFolder>
        <AccordionFolder title='Owner @ ChantingTree.com // 2008 - 2017 // Pennsylvania, USA '>
          <div className='italic font-light text-sm'>
            <p>▹ Designed, built and distributed Native American Flutes</p>
            <p>▹ Managed product sales via the WordPress website</p>
            <p>
              ▹ Self-produced and recorded CD’s and lead group sound meditations
            </p>
          </div>
        </AccordionFolder>
      </div>
    </section>
  );
};

export default Experience;
