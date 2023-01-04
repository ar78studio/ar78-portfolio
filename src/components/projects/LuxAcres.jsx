import React from "react";
import { useState } from "react";
import "../../index.css";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as OpenTabIcon } from "../../assets/arrowOpenWindow.svg";
import { GiClick } from "react-icons/Gi";
import { luxAcresImg } from "../../assets";
import { closeIcon } from "../../assets/index.js";
import { Fade } from "react-awesome-reveal";

const LuxAcres = () => {
  const [toggleLuxAcres, setToggleLuxAcres] = useState(false);

  return (
    <>
      <Fade>
        <div className='flex flex-row'>
          <h4 className='font-roboto text-sunsetOrange font-medium text-2xl mr-3'>
            |
          </h4>
          <h4 className='font-roboto text-blueDianne font-medium text-lg'>
            Real Estate Site Prototype
          </h4>
        </div>

        <div className='flex justify-end '>
          <a
            href='https://github.com/ar78studio/LuxAcres'
            target='_blank'
            alt='LuxAcres Real Estate Site Prototype - GitHub - AR78.studio'
          >
            <div>
              <GithubIcon
                className={`svgBlue stroke-one-point-five svgToOrange mr-6 hover:-translate-y-1  transition duration-300`}
              />
            </div>
          </a>

          <div>
            <a href='https://luxacres.ar78.studio/' target='_blank'>
              <OpenTabIcon className='svgBlue svgToOrange hover:-translate-y-1  transition duration-300' />
            </a>
          </div>
        </div>

        <div className='relative'>
          <div>
            <GiClick
              color='#f4f1de'
              className={`absolute top-[4rem] sm:top-24 right-5 svgGreen h-[1.4rem] w-[1.4rem] sm:h-[2.5rem] sm:w-[2.5rem] animate-pulse z-[80]`}
            />
          </div>

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
              LuxAcres is a fictional website which I designed and created a
              mock up of, for the
              <a
                className='hoverOrange underline'
                href='https://www.ultrait.net/'
              >
                {" "}
                UltraIT.net,{" "}
              </a>{" "}
              a small company whom I held an internship with. The goal was to
              demonstrate my knowledge of layout and CSS as well as ability to
              use JavaScript for Dynamic Components.
            </p>
            <p className='px-5 text-[0.6rem] sm:text-sm font-base font-roboto text-blueDianne'>
              The company was looking to hire a developer right before the
              Pandemic, to work with Front-End and some Back-End in C# and
              Asp.net environment. Thus the internship that I held was going to
              transition into this position, but due to the lockdowns this has
              not played out.
            </p>
            <p className='px-5 text-[0.6rem] sm:text-sm font-base font-roboto text-blueDianne'>
              I enjoyed very much working on this project, as it provided an
              opportunity to direct myself from the initial concept to design
              and production.
            </p>
          </div>
          <img
            src={luxAcresImg}
            onClick={() => setToggleLuxAcres((prev) => !prev)}
            alt='LuxAcres Real Estate Site Prototype'
            className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md cursor-pointer hover:scale-[1.01] transition duration-500'
          />
        </div>

        <div className={`my-8 flex flex-col`}>
          <span className={`font-roboto text-blueDianne text-sm`}>
            HTML, CSS, JavaScript, Adobe XD, Photoshop
          </span>
        </div>
      </Fade>
    </>
  );
};

export default LuxAcres;
