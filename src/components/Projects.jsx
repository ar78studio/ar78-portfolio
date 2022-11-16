import React from "react";
import "../index.css";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as OpenTabIcon } from "../assets/arrowOpenWindow.svg";
import { invoiceImg, passwordImg, pomodorImg } from "../assets";

const Projects = () => (
  <section
    id='projects'
    className={`flex flex-col relative max-w-full sm:mt-[3rem] md:mt-[4rem] lg:mt-[5rem] py-10 px-12 m-auto`}
  >
    {/* Start Projects Header H3 */}
    <div className='flex font-roboto text-springGreen font-base text-[1rem]'>
      <div className='flex flex-row'>
        <h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
        <h3 className='text-3xl font-normal ml-3 text-blueDianne'> Projects</h3>
      </div>
    </div>
    {/* End Projects Header H3 */}

    <div
      id='projectsWrap'
      className={`flex flex-col mt-8 sm:flex-col sm:m-auto`}
    >
      {/* Start Project Section  */}
      <div className={`flex flex-col sm:mt-[2rem] md:mt-[2rem] lg:mt-[3rem]`}>
        {/* Start Pomodoro */}
        <div className='flex flex-row'>
          <h4 className='font-roboto text-sunsetOrange font-base text-lg mr-3'>
            |
          </h4>
          <h4 className='font-roboto text-blueDianne font-base text-lg'>
            Pomodoro Productivity Timer
          </h4>
        </div>

        <img
          src={pomodorImg}
          alt='Pomodoro Productivity Timer'
          className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md hover:-translate-y-2 transition duration-500 cursor-pointer'
        />

        <div className={`my-4 flex flex-col`}>
          <span className={`font-roboto text-blueDianne font-base text-sm`}>
            HTML, CSS, JavaScript
          </span>
          {/* Start Github and Open-Tab Icons */}
          <div className='flex place-self-start my-4 ss:place-self-end sm:place-self-start sm:flex-row '>
            <a href='https://github.com/ar78studio' alt='GitHub - AR78.studio'>
              <div>
                <GithubIcon className={`svgBlue svgToOrange mr-6`} />
              </div>
            </a>
            <a
              href='https://twitter.com/GeochiNova'
              alt='Open Project in a New Tab'
            >
              <div>
                <OpenTabIcon className='svgBlue svgToOrange' />
              </div>
            </a>
          </div>
          {/* Stop Github and Open-Tab Icons */}
        </div>
        {/* End Pomodoro */}
      </div>
      {/* End Pomodoro Project  */}

      {/* Start Next Project Section  */}
      <div className={`flex flex-col sm:mt-[2rem] md:mt-[2rem] lg:mt-[3rem]`}>
        {/* Start Invoice */}
        <div className='flex flex-row'>
          <h4 className='font-roboto text-sunsetOrange font-base text-2xl mr-3'>
            |
          </h4>
          <h4 className='font-roboto text-blueDianne font-base text-lg'>
            Custom Invoice Generator
          </h4>
        </div>

        <img
          src={invoiceImg}
          alt='Custom Invoice Generator'
          className=' mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md hover:-translate-y-2 transition duration-500 cursor-pointer'
        />

        <div className={`my-4 flex flex-col`}>
          <span className={`font-roboto text-blueDianne text-sm`}>
            HTML, CSS, JavaScript
          </span>
          {/* Start Github and Open-Tab Icons */}
          <div className='flex place-self-start my-4 ss:place-self-end sm:place-self-start sm:flex-row '>
            <a
              href='https://github.com/ar78studio/invoice-creator'
              alt='GitHub - AR78.studio'
            >
              <div>
                <GithubIcon
                  className={`svgBlue stroke-one-point-five svgToOrange mr-6`}
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
        {/* End Invoice */}
      </div>
      {/* End Next Project Section  */}

      {/* Start Next Project Section  */}
      <div className={`flex flex-col sm:mt-[2rem] md:mt-[2rem] lg:mt-[3rem]`}>
        {/* Start Password Generator */}
        <div className='flex flex-row'>
          <h4 className='font-roboto text-sunsetOrange font-base text-2xl mr-3'>
            |
          </h4>
          <h4 className='font-roboto text-blueDianne font-base text-lg'>
            Custom Invoice Generator
          </h4>
        </div>

        <img
          src={passwordImg}
          alt='Custom Invoice Generator'
          className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md hover:-translate-y-2 transition duration-500 cursor-pointer'
        />

        <div className={`my-4 flex flex-col`}>
          <span className={`font-roboto text-blueDianne text-sm`}>
            HTML, CSS, JavaScript
          </span>
          {/* Start Github and Open-Tab Icons */}
          <div className='flex place-self-start my-4 ss:place-self-end sm:place-self-start sm:flex-row '>
            <a
              href='https://github.com/ar78studio/PasswordGen'
              alt='Password Generator - GitHub - AR78.studio'
            >
              <div>
                <GithubIcon
                  className={`svgBlue stroke-one-point-five svgToOrange mr-6`}
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
        {/* End Password Generator */}
      </div>
      {/* End Next Project Section  */}
    </div>
  </section>
);

export default Projects;
