import { useState } from "react";
// import { ar78Logo } from "../assets/index.js";
import { navLinks } from "../constants/index";
import { closeIcon, menuIcon } from "../assets/index.js";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-4 justify-between items-center navbar'>
      <div>
        <span className='text-3xl font-bold text-blueDianne'>AR78</span>
        <span className='text-4xl text-sunsetOrange'> //</span>
      </div>
      {/* START NAV LINKS */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-roboto font-normal cursor-pointer text-[16px] 
            // Next line of code gives margin right to all but the last nav link
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            text-blueDianne`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* START SMALL DEVICE NAV */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? closeIcon : menuIcon}
          alt='menu'
          className='w-[28px]'
        />
      </div>
      {/* STOP SMALL DEVICE NAV */}
      {/* STOP NAV LINKS */}
    </nav>
  );
};

export default Navbar;
