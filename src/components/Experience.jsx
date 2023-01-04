import React from "react";
import { useState } from "react";
import "../index.css";
import AccordionFolder from "./AccordionFolder";

const Experience = () => {
  return (
    <section
      id='experience'
      className='flex m-auto xl:max-w-[1280px] relative w-full lg:w-10/12 px-[10%] sm:mt-[6rem] md:mt-[6rem] lg:mt-[7rem] my-20'
    >
      <div className='flex flex-col w-[700px]'>
        <AccordionFolder title='UltraIT.net'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
            rem quam dicta maiores maxime suscipit ex minus magnam distinctio
            consequatur. Saepe, corrupti. Ipsam placeat culpa in dicta commodi
            rerum quam, laboriosam animi unde nam a soluta nesciunt numquam.
            Tenetur, sapiente debitis? Accusamus dolorum sequi perspiciatis
            optio ex asperiores id harum?
          </p>
        </AccordionFolder>
        <AccordionFolder title='Milne at Home'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
            rem quam dicta maiores maxime suscipit ex minus magnam distinctio
            consequatur. Saepe, corrupti. Ipsam placeat culpa in dicta commodi
            rerum quam, laboriosam animi unde nam a soluta nesciunt numquam.
            Tenetur, sapiente debitis? Accusamus dolorum sequi perspiciatis
            optio ex asperiores id harum?
          </p>
        </AccordionFolder>
        <AccordionFolder title='Folder 3'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
            rem quam dicta maiores maxime suscipit ex minus magnam distinctio
            consequatur. Saepe, corrupti. Ipsam placeat culpa in dicta commodi
            rerum quam, laboriosam animi unde nam a soluta nesciunt numquam.
            Tenetur, sapiente debitis? Accusamus dolorum sequi perspiciatis
            optio ex asperiores id harum?
          </p>
        </AccordionFolder>
        <AccordionFolder title='Folder 4'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
            rem quam dicta maiores maxime suscipit ex minus magnam distinctio
            consequatur. Saepe, corrupti. Ipsam placeat culpa in dicta commodi
            rerum quam, laboriosam animi unde nam a soluta nesciunt numquam.
            Tenetur, sapiente debitis? Accusamus dolorum sequi perspiciatis
            optio ex asperiores id harum?
          </p>
        </AccordionFolder>
      </div>

      {/* To absolutely position the #1 I set the section class above to relative */}
      <div>
        <h1
          className={`text-lightBeige absolute tracking-wider text-4xl top-[148%] left-[80.1%] sm:top-[134%] sm:left-[80.3%] lg:top-[133.9%] sm:text-7xl`}
        >
          {"#4"}
        </h1>

        <h1
          className={`text-blueDianne absolute tracking-wider text-4xl top-[147%] left-[79.5%] sm:top-[132.2%] sm:left-[80%] lg:top-[133%] sm:text-7xl`}
        >
          {"#4"}
        </h1>
      </div>
    </section>
  );
};

export default Experience;
