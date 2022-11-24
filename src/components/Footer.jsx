import React from "react";
import "../index.css";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";

const Footer = () => (
  <section className={`my-2`}>
    <div className='flex justify-center'>
      <h4 className={`text-base font-bold text-blueDianne`}>
        <mark className='markOrange'>AR78 //</mark> Designed & Built by Artem:
        of the family Repin-Muhin
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
        alt='Twiter - Artem: of the family Repin'
      >
        <div>
          <TwitterIcon className='svgBlue svgToOrange h-5' />
        </div>
      </a>
    </div>
  </section>
);

export default Footer;
