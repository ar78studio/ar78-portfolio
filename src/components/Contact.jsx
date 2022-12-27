import React from "react";
import "../index.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <section
      id='contact'
      className='flex flex-col justify-center relative w-full p-[10%] sm:mt-[6rem] md:mt-[6rem] lg:mt-[7rem] my-[10%]'
    >
      <div className='flex justify-center flex-row font-roboto text-springGreen font-base text-[1rem]'>
        <h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
        <h3 className='text-3xl font-normal ml-3 text-springGreen'> Contact</h3>
      </div>

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className='flex mt-10 flex-col m-auto w-[18rem] sm:w-[25rem]'
      >
        <input
          type='text'
          {...register("fullName", { required: true, minLength: 5 })}
          maxLength={20}
          className='placeholder:text-blueDianne text-blueDianne placeholder:italic outline-none text-sm px-4 h-8 bg-sunsetOrange rounded-md form-input border-0 drop-shadow-xl'
          placeholder='Full Name'
        />
        <br />
        <input
          type='email'
          {...register("email", { required: true })}
          maxLength={20}
          className='placeholder:text-blueDianne text-blueDianne placeholder:italic outline-none text-sm px-4 mt-4 h-8 bg-sunsetOrange rounded-md border-0 drop-shadow-xl'
          placeholder='E-Mail'
        />
        <br />
        <textarea
          type='textarea'
          {...register("message")}
          rows={6}
          cols={10}
          className='placeholder:text-blueDianne text-blueDianne placeholder:italic outline-none text-sm p-4 mt-8 bg-sunsetOrange rounded-md form-textarea border-0 drop-shadow-xl'
          placeholder='Your message...'
        />
        <br />
        <input
          type='submit'
          className='text-blueDianne font-bold place-self-center mt-10 bg-sunsetOrange rounded-md h-10 w-32 hover:bg-springGreen drop-shadow-xl'
        >
          SEND
        </input>
      </form>
    </section>
  );
};

export default Contact;
