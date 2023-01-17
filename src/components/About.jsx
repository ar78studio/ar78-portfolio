import React from "react";
import "../index.css";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";

const About = () => (
  <section
    id='about'
    className={`flex m-auto xl:max-w-[1280px] relative w-full lg:w-10/12 px-[10%] sm:mt-[6rem] md:mt-[6rem] lg:mt-[7rem] my-20`}
  >
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
          Hi there! I'm Artem,
          <p />
          <p>
            <mark className='markOrange italic'>
              a self-taught Front End Developer on a mission to become a tech
              superstar and contribute to some seriously cool projects in a
              remote team setting.{" "}
            </mark>
          </p>
          In the past few years, and with the world moving into the age of AI, I
          realised that{" "}
          <mark className='markOrange'>web development IS my passion</mark> to
          pursue professionally, as the digital playground provides an enormous
          pool of inspiration and creative possibilities to craft impactful and
          world-changing applications.
        </p>
        <p>
          Recently, I have gained experience through an{" "}
          <a href='https://www.ultrait.net/'>
            {" "}
            <span className='hoverGreen markOrange underline'>
              internship at a small CRM software development agency,
            </span>
          </a>{" "}
          where I worked with HTML, CSS, and JavaScript. Additionally, I have
          built{" "}
          <a href='#projects'>
            <span className='hoverGreen markOrange underline'>
              several projects on my own.
            </span>
          </a>{" "}
        </p>
        <p>
          I grew up in Ukraine to a creative family of an artist father and an
          engineer mother, who instilled in me a keen eye for detail and ability
          to bring ideas to fruition, as well as hunger for knowledge.
        </p>
        <p>
          When we moved to the USA in 1995 and my parents bought the first
          computer I began learning and "playing" with HTML and CSS from the age
          of 18. At the same time, I was exploring my creative nature which led
          me to a professional career crafting functional art and furniture and
          experience in managing and overseeing creative talent which also
          prepared me to be a{" "}
          <mark className='markOrange'>valuable asset to any team.</mark>
        </p>

        <p>I've worked with the following technologies and software:</p>
      </div>

      <div className='text-sunsetOrange flex flex-col sm:flex-row md:flex-row lg:flex-row mt-10 mb-10 justify-around'>
        <ul className='flex flex-col '>
          <li>+ JavaScript (ES6+)</li>
          <li>+ React.js</li>
          <li>+ Tailwind CSS</li>
          <li>+ Styled Components</li>
          <li>+ Git, NPM</li>
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
      <div className='m-auto lg:mt-[3rem] border-b-[1px] w-[18rem] sm:w-[25rem] md:w-[35rem] lg:w-[45rem] lg:border-b-[1px] md:border-b-[1px] sm:border-b-[1px]  border-springGreen mb-8'></div>

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
        className={`text-blueDianne absolute tracking-wider text-4xl top-[105%] left-[76%] sm:top-[105.5%] sm:left-[75%] sm:text-7xl`}
      >
        {"#2"}
      </h1>

      <h1
        className={`text-springGreen absolute tracking-wider text-4xl top-[104.8%] left-[75.5%] sm:top-[105%] sm:left-[74.7%] sm:text-7xl`}
      >
        {"#2"}
      </h1>
    </div>
  </section>
);

export default About;
