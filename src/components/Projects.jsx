import React from "react";
import "../index.css";
import { ReactComponent as GithubGreenIcon } from "../assets/githubGreen.svg";
import { ReactComponent as OpenTabIcon } from "../assets/arrowOpenWindow.svg";
import { pomodorImg } from "../assets";

const Projects = () => (
  <section
    id='projects'
    className={`flex flex-col relative lg:max-w-6xl sm:mt-[3rem] md:mt-[4rem] lg:mt-[5rem] py-10 m-auto`}
  >
    {/* Start Projects Title */}
    <div className='flex font-roboto text-springGreen font-base text-[1rem]'>
      <div className='flex flex-row'>
        <h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
        <h3 className='text-3xl font-normal ml-3 text-blueDianne'> Projects</h3>
      </div>
    </div>
    {/* End Projects Title */}

    {/* Start Project Section  */}
    <div
      className={`flex flex-col my-40 sm:mt-[3rem] md:mt-[4rem] lg:mt-[5rem]`}
    >
      {/* Start Pomodoro */}
      <div className='flex flex-row'>
        <h4 className='font-roboto text-sunsetOrange font-base text-2xl mr-3'>
          |
        </h4>
        <h4 className='font-roboto text-blueDianne font-base text-2xl'>
          Pomodoro Productivity Timer
        </h4>
      </div>

      <div className={`flex flex-col mt-10`}>
        <img
          src={pomodorImg}
          alt='Pomodoro Productivity Timer'
          className='object-contain h-[667px] w-[659px]'
        />
      </div>

      <div className={`my-8 flex flex-col`}>
        <span className={`font-roboto text-blueDianne text-lg`}>
          HTML, CSS, JavaScript
        </span>
        {/* Start Github and Open-Tab Icons */}
        <div className='flex place-self-start my-8 ss:place-self-end sm:place-self-start sm:flex-row '>
          <a href='https://github.com/ar78studio' alt='GitHub - AR78.studio'>
            <div>
              <GithubGreenIcon
                className={`svgBlue stroke-one-point-five svgToOrange mr-8`}
              />
            </div>
          </a>
          <a
            href='https://twitter.com/GeochiNova'
            alt='Open Project in a New Tab'
          >
            <div>
              <OpenTabIcon className='svgBlue stroke-one-point-five svgToOrange' />
            </div>
          </a>
        </div>
        {/* Stop Github and Open-Tab Icons */}
      </div>
      {/* End Pomodoro */}
    </div>
    {/* End Project Section  */}
  </section>
);

export default Projects;
