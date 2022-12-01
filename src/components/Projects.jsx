import React from "react";
import { useState } from "react";
import "../index.css";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as OpenTabIcon } from "../assets/arrowOpenWindow.svg";
import { ReactComponent as ClickHere } from "../assets/clickHere.svg";
import { GiClick } from "react-icons/Gi";
import { invoiceImg, luxAcresImg, passwordImg, pomodorImg } from "../assets";
import { closeIcon } from "../assets/index.js";

const Projects = () => {
  const [togglePomodoro, setTogglePomodoro] = useState(false);
  const [toggleInvoice, setToggleInvoice] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleLuxAcres, setToggleLuxAcres] = useState(false);

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
            {/* Start Pomodoro Description on:click window */}
            <div className='relative'>
              <div>
                <GiClick
                  color='#A3CCAB'
                  className={`absolute top-10 sm:top-14 right-5 svgGreen h-[1.4rem] w-[1.4rem] sm:h-[2.5rem] sm:w-[2.5rem] animate-pulse `}
                />
              </div>
              {/* Toggles the Close button for the hidden description window   */}
              <div
                className={`${
                  togglePomodoro ? "border-box fadeIn" : "fadeOut"
                } }
              absolute h-fit w-fit border-box projectBgWhite m-[2rem] mt-[2rem] sm:mt-[4rem] p-2 sm:p-4 rounded-md z-[99]`}
              >
                <div className='flex flex-1 justify-between items-center right-6 z-[200] '>
                  <h4 className=' ml-5 text-[0.7rem] sm:text-md font-medium font-roboto text-blueDianne'>
                    Pomodoro Timer
                  </h4>
                  <img
                    className={`w-[20px] h-[20px] ml-3 mt-0 sm:w-[30px] sm:h-[30px] object-contain cursor-pointer stroke-one-point-five`}
                    src={closeIcon}
                    alt='Close Description'
                    onClick={() => setTogglePomodoro((prev) => !prev)}
                  />
                </div>
                <p className='px-5 pt-0 text-[0.6rem] sm:text-sm font-base font-roboto text-blueDianne'>
                  This app was coded as a Front End Mentor challenge and also to
                  help me stay productive and not burn out, as it is easy to get
                  in the creative zone and forget about the needs of the body
                  while coding.
                </p>
                <p className='px-5 text-[0.6rem] sm:text-sm font-base font-roboto text-blueDianne'>
                  I also felt that taking on a challenging project would help me
                  advance faster with the JavaScript and CSS concepts. One of
                  the challenges that I had to overcome was to create an
                  accurate timer that relies on the date.getTime versus using
                  the setInterval or setTimeout methods, as the later methods
                  can go out of sync and create an inacurate timer.
                </p>
              </div>
              <img
                src={togglePomodoro ? pomodorImg : pomodorImg}
                onClick={() => setTogglePomodoro((prev) => !prev)}
                // src={pomodorImg}
                alt='Pomodoro Productivity Timer'
                className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md cursor-pointer'
              />
            </div>
            {/* Stop Pomodoro Description on:click window */}

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
                Custom Invoice Creator
              </h4>
            </div>

            {/* Start Invoice Description on:hover window */}
            {/* <img
              src={invoiceImg}
              alt='Custom Invoice Generator'
              className=' mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md cursor-pointer'
            /> */}

            {/* Start Invoice Description on:click window */}
            <div className='relative'>
              <div>
                <GiClick
                  color='#f4f1de'
                  className={`absolute top-10 sm:top-14 right-5 svgGreen h-[1.4rem] w-[1.4rem] sm:h-[2.5rem] sm:w-[2.5rem] animate-pulse `}
                />
              </div>
              {/* Toggles the Close button for the hidden description window   */}
              <div
                className={`${toggleInvoice ? "border-box fadeIn" : "fadeOut"} 
              absolute h-fit w-fit border-box projectBgWhite m-[2rem] mt-[2rem] sm:mt-[4rem] p-2 sm:p-4 rounded-md z-[99]`}
              >
                <div className='flex flex-1 justify-between items-center right-6 z-[200] '>
                  <h4 className=' ml-5 text-[0.7rem] sm:text-md font-medium font-roboto text-blueDianne'>
                    Invoice Creator
                  </h4>
                  <img
                    className={`w-[20px] h-[20px] ml-3 mt-0 sm:w-[30px] sm:h-[30px] object-contain cursor-pointer stroke-one-point-five`}
                    src={closeIcon}
                    alt='Close Description'
                    onClick={() => setToggleInvoice((prev) => !prev)}
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
                src={toggleInvoice ? invoiceImg : invoiceImg}
                onClick={() => setToggleInvoice((prev) => !prev)}
                // src={invoiceImg}
                alt='Invoice Creator'
                className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md cursor-pointer'
              />
            </div>
            {/* Stop Invoice Description on:click window */}

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

            {/* <img
              src={passwordImg}
              alt='Custom Invoice Generator'
              className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md hover:scale-125 transition duration-500 cursor-pointer'
            /> */}

            {/* Start Password Description on:click window */}
            <div className='relative'>
              <div>
                <GiClick
                  color='#f4f1de'
                  className={`absolute top-10 sm:top-14 right-5 svgGreen h-[1.4rem] w-[1.4rem] sm:h-[2.5rem] sm:w-[2.5rem] animate-pulse `}
                />
              </div>
              {/* Toggles the Close button for the hidden description window   */}
              <div
                className={`${togglePassword ? "border-box fadeIn" : "fadeOut"} 
              absolute h-fit w-fit border-box projectBgWhite m-[2rem] mt-[2rem] sm:mt-[4rem] p-2 sm:p-4 rounded-md z-[99]`}
              >
                <div className='flex flex-1 justify-between items-center right-6 z-[200] '>
                  <h4 className=' ml-5 text-[0.7rem] sm:text-md font-medium font-roboto text-blueDianne'>
                    Password Generator
                  </h4>
                  <img
                    className={`w-[20px] h-[20px] ml-3 mt-0 sm:w-[30px] sm:h-[30px] object-contain cursor-pointer stroke-one-point-five`}
                    src={closeIcon}
                    alt='Close Description'
                    onClick={() => setTogglePassword((prev) => !prev)}
                  />
                </div>
                <p className='px-5 pt-0 text-[0.6rem] sm:text-sm font-base font-roboto text-blueDianne'>
                  This one is a simple project to generate a number of random
                  passwords and being able to have it saved as a text file to
                  your downloads folder after clicking on the chosen password
                  button.
                </p>
              </div>
              <img
                src={togglePassword ? passwordImg : passwordImg}
                onClick={() => setTogglePassword((prev) => !prev)}
                // src={invoiceImg}
                alt='Pomodoro Productivity Timer'
                className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md cursor-pointer'
              />
            </div>
            {/* Stop Password Description on:click window */}

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

            {/* <img
              src={luxAcresImg}
              alt='Real Estate Site Prototype'
              className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md hover:-translate-y-2 transition duration-500 cursor-pointer'
            /> */}

            {/* Start LuxAcres Description on:click window */}
            <div className='relative'>
              <div>
                <GiClick
                  color='#f4f1de'
                  className={`absolute top-[4rem] sm:top-24 right-5 svgGreen h-[1.4rem] w-[1.4rem] sm:h-[2.5rem] sm:w-[2.5rem] animate-pulse `}
                />
              </div>
              {/* Toggles the Close button for the hidden description window   */}
              <div
                className={`${toggleLuxAcres ? "border-box fadeIn" : "fadeOut"} 
              absolute h-fit w-fit border-box projectBgWhite m-[2rem] mt-[2rem] sm:mt-[4rem] p-2 sm:p-4 rounded-md z-[99]`}
              >
                <div className='flex flex-1 justify-between items-center right-6 z-[200] '>
                  <h4 className=' ml-5 text-[0.7rem] sm:text-md font-medium font-roboto text-blueDianne'>
                    LuxAcres Real Estate Site Prototype
                  </h4>
                  <img
                    className={`w-[20px] h-[20px] ml-3 mt-0 sm:w-[30px] sm:h-[30px] object-contain cursor-pointer stroke-one-point-five`}
                    src={closeIcon}
                    alt='Close Description'
                    onClick={() => setToggleLuxAcres((prev) => !prev)}
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
                src={toggleLuxAcres ? luxAcresImg : luxAcresImg}
                onClick={() => setToggleLuxAcres((prev) => !prev)}
                alt='LuxAcres Real Estate Site Prototype'
                className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md cursor-pointer'
              />
            </div>
            {/* Stop LuxAcres Description on:click window */}

            <div className={`my-8 flex flex-col`}>
              <span className={`font-roboto text-blueDianne text-sm`}>
                HTML, CSS, JavaScript
              </span>
              {/* Start Github and Open-Tab Icons */}
              <div className='flex place-self-start my-4 ss:place-self-end sm:place-self-start sm:flex-row '>
                <a
                  href='https://github.com/ar78studio/LuxAcres'
                  alt='LuxAcres Real Estate Site Prototype - GitHub - AR78.studio'
                >
                  <div>
                    <GithubIcon
                      className={`svgBlue stroke-one-point-five svgToOrange mr-6`}
                    />
                  </div>
                </a>
                <a href='https://twitter.com/GeochiNova' alt='My Twitter Page'>
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
