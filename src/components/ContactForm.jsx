import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  console.log(errors);

  async function submitForm(data) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className='flex flex-col m-auto w-[18rem] sm:w-[25rem]'
    >
      <input
        type='text'
        {...register("fullName", {
          required: "This field is required",
          minLength: 5,
          message: "Min length is 3",
        })}
        className={`text-blueDianne placeholder:text-blueDianne placeholder:opacity-60 placeholder:italic italic focus:outline-none text-sm px-4 mt-2 h-8 bg-sunsetOrange rounded-md border-0 drop-shadow-xl focus:ring-springGreen ${
          errors.fullName ? "ring-2 ring-springGreen" : null
        }`}
        placeholder='Full Name'
      />
      <p className='text-sunsetOrange text-sm'>{errors.fullName?.message}</p>

      <input
        type='text'
        {...register("email", {
          required: "This field is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
            message: "Please enter a Valid email format",
          },
        })}
        className={`text-blueDianne placeholder:text-blueDianne placeholder:opacity-60 placeholder:italic italic focus:outline-none text-sm px-4 mt-2 h-8 bg-sunsetOrange rounded-md border-0 drop-shadow-xl focus:ring-springGreen ${
          errors.email ? "ring-2 ring-springGreen" : null
        }`}
        placeholder='you@your-email.com'
      />
      <p className='text-sunsetOrange text-sm'>{errors.email?.message}</p>

      <textarea
        type='textarea'
        {...register("message", { required: "This field is required" })}
        rows={6}
        cols={10}
        className={`text-blueDianne placeholder:text-blueDianne placeholder:opacity-60 placeholder:italic italic focus:outline-none text-sm p-4 mt-4 bg-sunsetOrange rounded-md border-0 drop-shadow-xl focus:ring-springGreen ${
          errors.message ? "ring-2 ring-springGreen" : null
        }`}
        placeholder='Your message...'
      />
      <p className='text-sunsetOrange text-sm'>{errors.message?.message}</p>

      <input
        type='submit'
        value='SEND'
        className='text-blueDianne font-bold place-self-center mt-10 bg-sunsetOrange rounded-md h-10 w-32 hover:bg-springGreen drop-shadow-xl cursor-pointer'
      />
    </form>
  );
};

export default ContactForm;
