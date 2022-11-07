import { useState } from "react";
import { navLinks } from "../constants/index";
import { closeIcon, menuIcon } from "../assets/index.js";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-4 justify-between items-center navbar'>
      <div>
        <span className='text-2xl font-bold text-blueDianne'>AR78</span>
        <span className='text-3xl text-sunsetOrange'> //</span>
      </div>
      {/* START NAV LINKS */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-roboto font-bold cursor-pointer text-[1rem] 
            // Next line of code gives margin right to all but the last nav link. Nav links are imported from constants/index.js
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            text-blueDianne`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
              {nav.content}
            </a>
          </li>
        ))}
      </ul>

      {/* START SMALL DEVICE NAV */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          src={toggle ? closeIcon : menuIcon}
          alt='menu'
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${toggle ? "flex" : "hidden"} p-6
        bg-lightBeige 
        opacity-90
        absolute 
        top-20 
        right-0 
        mx-4 
        my-2  
        w-11/12
        rounded-lg 
        sidebar`}
      >
        {/* START BURGER MENU NAV LINKS */}
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-roboto font-normal cursor-pointer text-[16px] 
            // Next line of code gives margin right to all but the last nav link. Nav link are imported from constants/index.js
            ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}
            text-blueDianne`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
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
