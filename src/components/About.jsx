import React from "react";
import "../index.css";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";

import { aboutSection } from "../constants";

const About = () => (
  <section
    id='about'
    className={`flex relative justify-around lg:max-w-4xl sm:mt-[6rem] md:mt-[6rem] lg:mt-[7rem] my-20 px-12 m-auto`}
  >
    {/* <div className=''>
      {aboutSection.map((about) => (
        <ul
          key={aboutSection.id}
          className={`font-roboto font-base text-[1rem]`}
        >
          <li key='{sectionTitle}' className={`text-springGreen text-xl pb-3`}>
            {about.title}
          </li>
          <li className={`text-springGreen text-sm flex flex-row pb-2`}>
            {about.content}
          </li>
        </ul>
      ))}
    </div> */}

    <div className='font-roboto text-springGreen font-base text-[1rem]'>
      <div className='flex flex-row'>
        <h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
        <h3 className='text-3xl font-normal ml-3 mb-6'> About Me</h3>
      </div>

      <p>
        Hi there! I am Artem: of the family Repin-Muhin, and building functional
        and beautiful things for the web is what I have been focusing on since
        the year 2020.
      </p>
      <p>
        For most of my professional career I have crafted functional art out of
        wood and metal, while also guiding, managing and overseeing creative
        talent working with me. While learning and playing with HTML, CSS, and
        JavaScript throughout my life in my spare time, I realised that{" "}
        <mark className='markOrange'>web development </mark> has grown into a{" "}
        <mark className='markOrange'>passion</mark> to pursue, as the digital
        playground provides an enormous pool of inspiration and possibilities to
        create useful and world-changing applications.
      </p>

      <p>
        Last few years have proven to be pivotal in wanting to dedicate myself
        fully to growing my skills with a{" "}
        <mark className='markOrange'>
          goal of joining a remote team as a Front End Engineer.
        </mark>
      </p>

      <p>
        Meanwhile, I have had an experience of holding a short internship at a
        <a href='https://www.ultrait.net/'>
          {" "}
          <span className='hoverOrange underline'>
            CRM Software Development Agency
          </span>
        </a>{" "}
        , and have also built{" "}
        <mark className='markOrange'>a few projects of my own.</mark>
      </p>

      <p>I have worked with the following technologies and software:</p>
      <div className='text-sunsetOrange flex flex-col sm:flex-row md:flex-row lg:flex-row mt-8 mb-20 justify-around'>
        <ul className='flex flex-col '>
          <li>+ HTML 5, CSS 3</li>
          <li>+ Tailwind CSS</li>
          <li>+ JavaScript (ES6+)</li>
          <li>+ API</li>
          <li>+ React.js</li>
          <li>+ Wordpress</li>
        </ul>

        <ul className='flex flex-col'>
          <li>+ Figma, Adobe XD</li>
          <li>+ Photoshop, Illustrator</li>
          <li>+ 3D Studio MAX, Blender</li>
          <li>+ Sketchup</li>
          <li>+ Final Cut Pro</li>
        </ul>
      </div>
    </div>

    {/* Start Line Separator Right*/}
    <div className='place-self-center h-64 border-0 border-r-[1px] md:border-r-[1px]  lg:border-r-[1px] xl:border-r-[1px] border-springGreen sm:pl-20'></div>
    {/* Start Line Separator Bottom for smaller devices */}
    <div className='justify-self-center border-0 border-b-[1px] sm:border-b-[1px]  border-springGreen'></div>

    {/* Start Github and Twitter Icons */}
    <div className='flex flex-row place-self-end xs:place-self-end ss:place-self-end sm:place-self-end sm:self-center sm:flex-col ml-7'>
      <a href='https://github.com/ar78studio' alt='GitHub - AR78.studio'>
        <div>
          <GithubIcon className='svgGreen svgToOrange mb-6' />
        </div>
      </a>
      <a
        href='https://twitter.com/GeochiNova'
        alt='Twiter - Artem: of the family Repin'
      >
        <div>
          <TwitterIcon className='svgGreen svgToOrange' />
        </div>
      </a>
    </div>
    {/* Stop Github and Twitter Icons */}

    {/* To absolutely position the #1 I set the section class above to relative */}
    <div>
      <h1
        className={`text-blueDianne absolute tracking-wider text-4xl top-[107%] left-[45%] sm:top-[107%] sm:left-[45%] sm:text-5xl lg:top-[107%] lg:left-[45.5%] lg:text-7xl`}
      >
        {"#2"}
      </h1>

      <h1
        className={`text-springGreen absolute tracking-wider text-4xl top-[106.7%] left-[44.5%] sm:top-[106.7%] sm:left-[44.7%] sm:text-5xl lg:top-[106.5%] lg:left-[45.3%] lg:text-7xl`}
      >
        {"#2"}
      </h1>
    </div>
  </section>
);

export default About;
