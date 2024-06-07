import { useState } from "react";
import "../index.css";
import { navLinks } from "../constants/index";
import { closeIcon, menuIcon } from "../assets/index.js";

const Navbar = () => {
  // toggle between burger menu and close button hidden menu
  const [toggle, setToggle] = useState(false);

  // float nav menu on scroll up and down with shadow
  const [navbar, setNavbar] = useState(false);

  // Floating Navbar
  const currentScroll = window.scrollY;

  const floatNavbar = () => {
    if (currentScroll < window.scrollY) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", floatNavbar);

  return (
    <nav
      className={` ${
        navbar ? "navbar down" : "navbar up"
      } w-full px-[2rem] md:px-[6rem] flex py-4 justify-between items-center z-[300]`}
    >
      <div>
        <span className='text-xl lg:text-4xl font-bold text-blueDianne'>
          <a href='https://ar78.studio'>AR78</a>
        </span>
        <span className='text-2xl lg:text-5xl text-sunsetOrange'> //</span>
      </div>
      {/* START NAV LINKS */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-roboto font-medium cursor-pointer mr-6 text-[0.9rem] md:text-[1rem] 
            // Margin right to all but the last nav link. From constants/index.js
            ${index === navLinks.length - 1 ? "mr-0" : "mr-6"}
            `}
          >
            <a href={`#${nav.id}`} className={`text-sunsetOrange`}>
              {nav.title}
            </a>
            <a href={`#${nav.id}`} className={`text-blueDianne relative group`}>
              {nav.content}
              {/* MENU LINKS HOVER UNDERLINE */}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-sunsetOrange transition-all group-hover:w-full'></span>
            </a>
          </li>
        ))}
      </ul>

      {/* START SMALL DEVICE NAV */}
      {/* Burger Menu and the Close Button */}
      <div className='sm:hidden flex flex-1 justify-end items-center right-6 z-[200] animate-pulse'>
        <img
          className={`w-[40px] h-[40px] object-contain cursor-pointer stroke-one-point-five`}
          src={toggle ? closeIcon : menuIcon}
          alt='Menu'
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      {/* START BLUE HIDDEN MENU BACKGROUND */}
      <div
        className={`${toggle ? "menuSlideOut" : "menuSlideIn"} z-[100] 
        bg-blueDianne
        opacity-90
        fixed
        top-[4.5rem]
        md:top-[4rem]
        lg:top-[5.05rem]
        bottom-0
        right-0  
        h-screen
        w-4/5
        `}
      >
        {/* START BURGER MENU NAV LINKS */}
        <ul className=' list-none flex flex-col cursor-pointer justify-start mt-[5rem] items-center leading-10 flex-1'>
          {navLinks.map((nav, index) => (
            <li
              onClick={() => setToggle((prev) => !prev)}
              key={nav.id}
              className={`font-roboto font-normal text-[16px] 
            // Margin right to all but the last nav link. From constants/index.js
            ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}
            text-sunsetOrange font-bold hover:text-springGreen`}
            >
              <a href={`#${nav.id}`}>{nav.content}</a>
            </li>
          ))}
        </ul>
        {/* STOP BURGER MENU NAV LINKS */}
      </div>
      {/* STOP SMALL DEVICE NAV */}
      {/* STOP NAV LINKS */}
    </nav>
  );
};

export default Navbar;
