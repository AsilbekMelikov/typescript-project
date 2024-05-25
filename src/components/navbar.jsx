import React, { useState } from "react";
import { styles } from "../util/styles";
import { navigationLinks } from "../util/constants";
import { logo, close, menu } from "../assets";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const toggleHandler = () => setToggleNav(!toggleNav);

  return (
    <div className={`w-full py-6  ${styles.flexBetween}`}>
      {/* LOGO */}
      <img src={logo} alt="Typescript logo" className="w-[70px] h-[70px]" />

      {/* NAVIGATION LINKS */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((link, idx) => {
          return (
            <li
              key={link.id}
              className="font-montserrat font-normal cursor-pointer text-[16px] text-white mr-10 last:mr-0 hover:text-lightWhite duration-150"
            >
              {link.title}
            </li>
          );
        })}
      </ul>

      {/* NAVIGATION BUTTONS */}
      <div className=" sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleNav ? close : menu}
          alt="navigation menu icon and close icon"
          className="w-[30px] h-[30px] cursor-pointer object-contain"
          onClick={toggleHandler}
        />

        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6 absolute top-20 right-0 left-0 w-full sidebar bg-black bg-black-gradient`}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
