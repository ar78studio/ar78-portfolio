import React from "react";
import "../index.css";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";

const Footer = () => (
  <section className={`py-2`}>
    <div className='flex justify-center m-auto'>
      <h4 className={`text-[0.6rem] sm:text-base font-bold text-blueDianne`}>
        Designed & Built by Artem: of the family Repin-Muhin -{" "}
        <mark className='markOrange'> AR78.STUDIO</mark>
      </h4>
    </div>

    {/* Start Github and Twitter Icons */}
    <div className='flex justify-center flex-row mt-2'>
      <a href='https://github.com/ar78studio' alt='GitHub - AR78.studio'>
        <div>
          <GithubIcon className='svgBlue svgToOrange h-5' />
        </div>
      </a>
      <a
        href='https://twitter.com/GeochiNova'
        alt='Twitter - Artem: of the family Repin'
      >
        <div>
          <TwitterIcon className='svgBlue svgToOrange h-5' />
        </div>
      </a>
    </div>
  </section>
);

export default Footer;
