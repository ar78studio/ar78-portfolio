import React from "react";
import "../index.css";

const Contact = () => (
  <section
    id='contact'
    className='flex flex-col justify-center relative w-full px-[10%] sm:mt-[6rem] md:mt-[6rem] lg:mt-[7rem] my-20'
  >
    <div className='flex justify-center flex-row font-roboto text-springGreen font-base text-[1rem]'>
      <h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
      <h3 className='text-3xl font-normal ml-3 text-springGreen'> Contact</h3>
    </div>

    {/* <div className='bg-sky-900 p-5 m-10 rounded-md '> */}
    <form
      action='/contact'
      method='post'
      className='flex mt-10 flex-col m-auto w-[18rem] sm:w-[25rem]'
    >
      <input
        type='text'
        name='name'
        className='h-8 bg-sunsetOrange rounded-md form-input border-0'
        placeholder='Full Name'
      />
      <br />
      <input
        type='email'
        name='email'
        className='text-blueDianne px-4 mt-4 h-8 bg-sunsetOrange rounded-md border-0'
        placeholder='E-Mail'
      />
      <br />
      <textarea
        type='textarea'
        name='textarea'
        rows={6}
        cols={10}
        className='mt-8 bg-sunsetOrange rounded-md form-textarea border-0'
        placeholder='Your message...'
      />
      <br />
      <button
        id='sendEmail'
        className='text-blueDianne font-bold place-self-center mt-10 bg-sunsetOrange rounded-md h-10 w-32 hover:bg-springGreen'
      >
        SEND
      </button>
    </form>
    {/* </div> */}
  </section>
);

export default Contact;
