import React from "react";
import "../index.css";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";

import { aboutSection } from "../constants";

const About = () => (
  <section
    id='about'
    className={`flex m-auto xl:max-w-[1280px] relative w-full lg:w-10/12 px-[10%] sm:mt-[6rem] md:mt-[6rem] lg:mt-[7rem] my-20`}
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

    <div
      className='font-roboto text-springGreen font-base text-[1rem] justify-center
     '
    >
      <div className='flex flex-row'>
        <h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
        <h3 className='text-3xl font-normal ml-3 mb-6'> About Me</h3>
      </div>

      <div>
        <p>
          Hi there! I am Artem: of the family Repin-Muhin, and building
          functional and beautiful things for the web is what I have been
          focusing on since the year 2020.
        </p>
        <p>
          For most of my professional career I have crafted functional art out
          of wood and metal, while also guiding, managing and overseeing
          creative talent working with me. While learning and "playing" with
          HTML, CSS, and JavaScript throughout my life in my spare time, I
          realised that <mark className='markOrange'>web development </mark> has
          grown into a <mark className='markOrange'>passion</mark> to pursue, as
          the digital playground provides an enormous pool of inspiration and
          possibilities to create useful and world-changing applications.
        </p>

        <p>
          Last few years have proven to be pivotal in wanting to dedicate myself
          fully to growing my skills with a{" "}
          <mark className='markOrange'>
            goal of joining a remote team as a Front End Developer.
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
      </div>

      <div className='text-sunsetOrange flex flex-col sm:flex-row md:flex-row lg:flex-row mt-14 mb-10 justify-around'>
        <ul className='flex flex-col '>
          <li>+ JavaScript (ES6+)</li>
          <li>+ React.js</li>
          <li>+ Tailwind CSS</li>
          <li>+ Styled Components</li>
          <li>+ API</li>
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

      {/* Start Line Separator Bottom for smaller devices */}
      <div className='m-auto lg:mt-[5rem] border-b-[1px] w-[18rem] sm:w-[25rem] md:w-[35rem] lg:w-[45rem] lg:border-b-[1px] md:border-b-[1px] sm:border-b-[1px]  border-springGreen mb-8'></div>

      {/* Start Github and Twitter Icons */}
      <div className={`flex flex-wrap justify-center mb-10`}>
        <div className='flex flex-row sm:place-self-center '>
          <a href='https://github.com/ar78studio' alt='GitHub - AR78.studio'>
            <div>
              <GithubIcon className='svgGreen svgToOrange mr-10 hover:-translate-y-1  transition duration-300' />
            </div>
          </a>

          <a
            href='https://twitter.com/GeochiNova'
            alt='Twiter - Artem: of the family Repin-Muhin'
          >
            <div>
              <TwitterIcon className='svgGreen svgToOrange hover:-translate-y-1  transition duration-300' />
            </div>
          </a>
        </div>
      </div>

      {/* Stop Github and Twitter Icons */}
    </div>

    {/* To absolutely position the #1 I set the section class above to relative */}
    <div>
      <h1
        className={`text-blueDianne absolute tracking-wider text-4xl top-[105%] left-[45%] sm:top-[107%] sm:left-[45%] sm:text-5xl lg:top-[107%] lg:left-[45.5%] lg:text-7xl`}
      >
        {"#2"}
      </h1>

      <h1
        className={`text-springGreen absolute tracking-wider text-4xl top-[104.8%] left-[44.5%] sm:top-[106.7%] sm:left-[44.7%] sm:text-5xl lg:top-[106.5%] lg:left-[45.3%] lg:text-7xl`}
      >
        {"#2"}
      </h1>
    </div>
  </section>
);

export default About;
