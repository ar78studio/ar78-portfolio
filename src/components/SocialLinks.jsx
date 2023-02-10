import React from "react";
import "../index.css";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";
import { ReactComponent as EmailIcon } from "../assets/email.svg";
import { CiLinkedin } from "react-icons/ci";

const SocialLinks = () => {
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  return (
    <div className='invisible sm:visible lg:visible fixed bottom-[40%] bg-white opacity-80 right-0 lg:h-48 lg:w-12 w-8 h-48 flex flex-col items-center justify-evenly rounded-tl-md rounded-bl-md'>
      <a href='https://github.com/ar78studio'>
        <GithubIcon
          size={32}
          className={`ml-1 svgBlue svgToOrange hover:-translate-y-1  transition duration-300 lg:w-8 lg:h-8 w-6 h-6  `}
        />
      </a>
      <a href='https://twitter.com/GeochiNova'>
        <TwitterIcon
          size={32}
          className={`ml-1 svgBlue svgToOrange hover:-translate-y-1  transition duration-300 lg:w-8 lg:h-8 w-6 h-6  `}
        />
      </a>
      <a href='https://www.linkedin.com/in/artem-r-803310262/'>
        <CiLinkedin
          size={32}
          className={`ml-1 svgBlue svgToOrange hover:-translate-y-1  transition duration-300 lg:w-8 lg:h-8 w-6 h-6  `}
        />
      </a>

      <Mailto email='info@ar78.studio' subject='Hello' body='Hi Artem!'>
        <EmailIcon
          size={32}
          className={`ml-1 svgBlue svgToOrange hover:-translate-y-1  transition duration-300 lg:w-8 lg:h-8 w-6 h-6  `}
        />
      </Mailto>
    </div>
  );
};

export default SocialLinks;
