import React from "react";
import "../index.css";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";

const Footer = () => (
  <section className={`pt-4`}>
    <div className='flex justify-center m-auto'>
      <h4 className={`text-[0.6rem] sm:text-sm font-bold text-blueDianne`}>
        Designed & Built with React.js and Tailwind CSS
      </h4>
    </div>

    <div className='flex justify-center flex-row mt-2'>
      <a href='https://github.com/ar78studio' alt='GitHub - AR78.studio'>
        <div>
          <GithubIcon className='svgBlue svgToOrange mr-0 h-4 sm:mr-4 sm:h-8' />
        </div>
      </a>
      <a
        href='https://twitter.com/GeochiNova'
        alt='Twitter - Artem: of the family Repin'
      >
        <div>
          <TwitterIcon className='svgBlue svgToOrange ml-1 h-4 sm:h-8' />
        </div>
      </a>
    </div>
    <div className='flex justify-center mt-3 mb-0'>
      <p className='text-[0.6rem] text-blueDianne'>
        Copyright 2023. All rights reserved without prejudice by: Artem: Repin
      </p>
    </div>
  </section>
);

export default Footer;
