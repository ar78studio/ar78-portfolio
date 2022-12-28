import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ContactForm from "./ContactForm";

const Contact = () => {
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
    <section
      id='contact'
      className='flex flex-col max-w-[800px] m-auto justify-center relative w-full my-[5rem] sm:mt-[6rem] md:mt-[6rem] lg:mt-[7rem] '
    >
      <div className='flex justify-center sm:justify-left md:justify-left lg:justify-left flex-row font-roboto text-springGreen font-base text-[1rem]'>
        <h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
        <h3 className='text-3xl font-normal ml-3 text-springGreen'> Contact</h3>
      </div>

      <h5 className='text-springGreen mt-14 place-self-center text-5xl'>
        Get In Touch
      </h5>

      <h5 className='flex flex-col text-springGreen p-10 max-w-[600px] min-w-[140px] font-sm place-self-center '>
        I am currently seeking new opportunities to contribute and grow as a
        part of a remote tech team as a Front End Developer. If you have a
        project you feel I could contribute to, please don't hesitate to reach
        out and I will promptly respond back!
      </h5>
      <ContactForm />
    </section>
  );
};

export default Contact;
