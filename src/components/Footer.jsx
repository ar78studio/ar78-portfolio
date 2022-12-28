import React from "react";
import "../index.css";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";

const Footer = () => (
  <section className={`py-4`}>
    <div className='flex justify-center m-auto'>
      <h4 className={`text-[0.5rem] sm:text-sm font-bold text-blueDianne`}>
        Designed & Built with React.js and Tailwind CSS by Artem: -{" "}
        <mark className='markOrange'> ar78.studio</mark>
      </h4>
    </div>

    {/* Start Github and Twitter Icons */}
    <div className='flex justify-center flex-row mt-2'>
      <a href='https://github.com/ar78studio' alt='GitHub - AR78.studio'>
        <div>
          <GithubIcon className='svgBlue svgToOrange mr-2 h-5 sm:h-8' />
        </div>
      </a>
      <a
        href='https://twitter.com/GeochiNova'
        alt='Twitter - Artem: of the family Repin'
      >
        <div>
          <TwitterIcon className='svgBlue svgToOrange ml-2 h-5 sm:h-8' />
        </div>
      </a>
    </div>
  </section>
);

export default Footer;
