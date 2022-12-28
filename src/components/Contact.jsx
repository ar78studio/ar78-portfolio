import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ContactForm from "./ContactForm";

const Contact = () => {
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  return (
    <section
      id='contact'
      className='flex flex-col max-w-[800px] m-auto justify-center relative w-full my-[7rem] sm:mt-[6rem] md:mt-[6rem] lg:mt-[7rem] '
    >
      <div className='flex justify-center sm:justify-left md:justify-left lg:justify-left flex-row font-roboto text-springGreen font-base text-[1rem]'>
        <h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
        <h3 className='text-3xl font-normal ml-3 text-springGreen'> Contact</h3>
      </div>

      <h5 className='text-springGreen mt-14 place-self-center text-5xl'>
        Get In Touch
      </h5>

      <h5 className='flex flex-col text-springGreen p-10 max-w-[600px] min-w-[140px] font-sm place-self-center text-center'>
        As a Front End Eveloper I am currently seeking new opportunities to
        contribute and grow as a part of remote tech team. If you have a project
        you feel I could contribute to, please don't hesitate to reach out and I
        will promptly respond back!
      </h5>

      <button className='text-blueDianne font-bold place-self-center mt-10  bg-sunsetOrange rounded-md h-10 w-32 hover:bg-springGreen hover:text-sunsetOrange drop-shadow-xl cursor-pointer'>
        <Mailto email='info@ar78.studio' subject='Hello' body='Hello world!'>
          Email
        </Mailto>
      </button>
    </section>
  );
};

export default Contact;
