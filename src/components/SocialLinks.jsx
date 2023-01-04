import React from "react";
import "../index.css";
import { Fade } from "react-awesome-reveal";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";

const SocialLinks = () => {
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
      <a href='https://twitter.com'>
        <TwitterIcon
          size={32}
          className={`ml-1 svgBlue svgToOrange hover:-translate-y-1  transition duration-300 lg:w-8 lg:h-8 w-6 h-6  `}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
