import React from "react";
import "../index.css";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";

const Footer = () => (
  <section className={`pt-4`}>
    <div className='flex justify-center m-auto'>
      <h4 className={`text-[0.6rem] sm:text-sm font-bold text-blueDianne`}>
        Designed in Adobe Xd & Built with React.js and Tailwind CSS
      </h4>
    </div>

    {/* Start Github and Twitter Icons */}
    <div className={`flex flex-wrap justify-center mt-4`}>
      <div className='flex flex-row sm:place-self-center '>
        <a
          target={"_blank"}
          href='https://github.com/ar78studio'
          alt='GitHub - AR78.studio'
        >
          <div>
            <GithubIcon
              size={32}
              className={`svgBlue svgToOrange mr-10 hover:-translate-y-1  transition duration-300 lg:w-8 lg:h-8 w-6 h-6`}
            />
          </div>
        </a>

        <a
          target={"_blank"}
          href='https://twitter.com/GeochiNova'
          alt='Twiter - Artem: of the family Repin-Muhin'
        >
          <div>
            <TwitterIcon
              size={32}
              className={`svgBlue svgToOrange mr-10 hover:-translate-y-1  transition duration-300 lg:w-8 lg:h-8 w-6 h-6`}
            />
          </div>
        </a>

        <a
          target={"_blank"}
          href='https://www.linkedin.com/in/artem-r-803310262/'
        >
          <LinkedInIcon
            size={32}
            className={`svgBlue svgToOrange hover:-translate-y-1  transition duration-300 lg:w-8 lg:h-8 w-6 h-6`}
          />
        </a>
      </div>
    </div>

    {/* Stop Github and Twitter Icons */}

    <div className='flex justify-center mt-3 mb-0'>
      <p className='text-[0.6rem] text-blueDianne'>
        Copyright 2023. All rights reserved without prejudice by: Artem: of the
        family Repin
      </p>
    </div>
  </section>
);

export default Footer;
