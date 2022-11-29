import React from "react";
import { useState } from "react";
import "../index.css";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as OpenTabIcon } from "../assets/arrowOpenWindow.svg";
import { ReactComponent as ClickHere } from "../assets/clickHere.svg";
import { invoiceImg, luxAcresImg, passwordImg, pomodorImg } from "../assets";
import { closeIcon } from "../assets/index.js";

const Projects = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section
      id='projects'
      className={`flex m-auto xl:max-w-[1280px] flex-col relative my-[6rem]`}
    >
      {/* Start Projects Header H3 */}
      <div className='flex flex-row ml-[2.5rem] sm:ml-[7.4rem] font-roboto text-springGreen font-base text-[1rem]'>
        <h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
        <h3 className='text-3xl font-normal ml-3 text-blueDianne'> Projects</h3>
      </div>
      {/* End Projects Header H3 */}

      <section className={`flex lg:flex-row flex-col m-auto`}>
        <div
          id='projectsWrap_01'
          className={`flex flex-col mt-8 sm:flex-col sm:m-auto px-10`}
        >
          {/* Start Project #1 Wrap  */}
          <div
            className={`flex flex-col sm:mt-[2rem] md:mt-[2rem] lg:mt-[3rem]`}
          >
            {/* Start Pomodoro */}
            <div className='flex flex-row'>
              <h4 className='font-roboto text-sunsetOrange font-medium text-lg mr-3'>
                |
              </h4>
              <h4 className='font-roboto text-blueDianne font-medium text-lg'>
                Pomodoro Productivity Timer
              </h4>
            </div>
            {/* Start Pomodoro Description on:hover window */}
            <div className='relative'>
              {/* <img
                src={clickHere}
                className={`absolute top-20 right-10 w-[2rem] h-[2rem] svgGreen animate-pulse`}
                alt='Click the Image for more details'
              /> */}
              <div>
                <ClickHere
                  className={` absolute top-20 right-10 svgGreen h-[3rem] w-[3rem] animate-pulse `}
                />
              </div>
              <div
                className={`
              ${toggle ? "border-box" : "hidden"}
              absolute h-fit w-fit border-box projectBgWhite m-[2rem] mt-[2rem] sm:mt-[4rem] p-2 rounded-md rotate`}
              >
                <div className='flex flex-1 justify-between items-center right-6 z-[200] '>
                  <h4 className=' ml-5 text-[0.7rem] sm:text-md font-medium font-roboto text-blueDianne'>
                    Pomodoro Timer
                  </h4>
                  <img
                    className={`w-[20px] h-[20px] mx-2 mt-0 sm:w-[30px] sm:h-[30px] object-contain cursor-pointer stroke-one-point-five`}
                    src={closeIcon}
                    alt='Close Description'
                    onClick={() => setToggle((prev) => !prev)}
                  />
                </div>
                <p className='px-5 pt-0 text-[0.6rem] sm:text-sm font-base font-roboto text-blueDianne'>
                  I have built this app as a Front End Mentor challenge and to
                  also help me stay productive and not burn out, as it is easy
                  to get in the creative zone and forget about the needs of the
                  body while coding.
                </p>
                <p className='px-5 text-[0.6rem] sm:text-sm font-base font-roboto text-blueDianne'>
                  I felt that taking on a challenging project would help me
                  advance faster with the JavaScript and CSS concepts. One of
                  the challenges that I had to overcome is to create an accurate
                  timer that relies on the date.getTime versus using the
                  setInterval or setTimeout methods, as the later methods can go
                  out of sync and create an inacurate timer.
                </p>
              </div>
              <img
                src={toggle ? pomodorImg : pomodorImg}
                onClick={() => setToggle((prev) => !prev)}
                // src={pomodorImg}
                alt='Pomodoro Productivity Timer'
                className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md cursor-pointer'
              />
            </div>
            {/* Stop Pomodoro Description on:hover window */}

            <div className={`my-8 flex flex-col`}>
              <span className={`font-roboto text-blueDianne font-base text-sm`}>
                HTML, CSS, JavaScript
              </span>
              {/* Start Github and Open-Tab Icons */}
              <div className='flex place-self-start my-4 ss:place-self-end sm:place-self-start sm:flex-row '>
                <a
                  href='https://github.com/ar78studio/Pomodoro-Productivity-App'
                  alt='GitHub - AR78.studio'
                >
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
          {/* End Project #1 Wrap  */}

          {/* Start Project #2 Wrap  */}
          <div
            className={`flex flex-col sm:mt-[2rem] md:mt-[2rem] lg:mt-[3rem]`}
          >
            {/* Start Invoice */}
            <div className='flex flex-row'>
              <h4 className='font-roboto text-sunsetOrange font-medium text-2xl mr-3'>
                |
              </h4>
              <h4 className='font-roboto text-blueDianne font-medium text-lg'>
                Custom Invoice Generator
              </h4>
            </div>

            {/* Start Invoice Description on:hover window */}
            <img
              src={invoiceImg}
              alt='Custom Invoice Generator'
              className=' mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md hover:-translate-y-2 transition duration-500 cursor-pointer'
            />
            {/* Stop Invoice Description on:hover window */}

            <div className={`my-8 flex flex-col`}>
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
          {/* End Project #2 Wrap  */}

          {/* Start Project #3 Wrap  */}
          <div
            className={`flex flex-col sm:mt-[2rem] md:mt-[2rem] lg:mt-[3rem]`}
          >
            {/* Start Password Generator */}
            <div className='flex flex-row'>
              <h4 className='font-roboto text-sunsetOrange font-medium text-2xl mr-3'>
                |
              </h4>
              <h4 className='font-roboto text-blueDianne font-medium text-lg'>
                Password Generator
              </h4>
            </div>

            <img
              src={passwordImg}
              alt='Custom Invoice Generator'
              className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md hover:scale-125 transition duration-500 cursor-pointer'
            />

            <div className={`my-8 flex flex-col`}>
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
          {/* End Project #3 Wrap  */}
        </div>

        <section
          id='flexSection02-Wrap'
          className={`flex flex-col sm:flex-col px-10`}
        >
          {/* Start Project #4 Wrap */}
          <div
            className={`flex flex-col sm:mt-[2rem] md:mt-[2rem] lg:mt-[3rem]`}
          >
            {/* Start Lux Acres */}
            <div className='flex flex-row'>
              <h4 className='font-roboto text-sunsetOrange font-medium text-2xl mr-3'>
                |
              </h4>
              <h4 className='font-roboto text-blueDianne font-medium text-lg'>
                Real Estate Site Prototype
              </h4>
            </div>

            <img
              src={luxAcresImg}
              alt='Real Estate Site Prototype'
              className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md hover:-translate-y-2 transition duration-500 cursor-pointer'
            />

            <div className={`my-8 flex flex-col`}>
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
          {/* End Project #4 Wrap */}
        </section>
      </section>
      {/* To absolutely position the #1 I set the section class above to relative */}
      <div>
        <h1
          className={`text-springGreen absolute tracking-wider text-4xl top-[103.3%] left-[45%] sm:top-[101.9%] sm:left-[45%] sm:text-5xl lg:top-[102.6%] lg:left-[45.5%] lg:text-7xl`}
        >
          {"#3"}
        </h1>

        <h1
          className={`text-lightBeige absolute tracking-wider text-4xl top-[103.2%] left-[44.5%] sm:top-[101.8%] sm:left-[44.7%] sm:text-5xl lg:top-[102.4%] lg:left-[45.3%] lg:text-7xl`}
        >
          {"#3"}
        </h1>
      </div>
    </section>
  );
};

export default Projects;
