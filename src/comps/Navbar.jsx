import React, { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import { useLocation } from "react-router";

const Navbar = () => {
  const { pathname } = useLocation();
  const [showNav, setShowNav] = useState(false);

  return (
    <nav
      class={`navbar container flex gap-5 items-center justify-between relative ${
        showNav && "show-nav"
      }`}
    >
      {/* Logo */}
      <div className="logo z-50 ">
        <Link to="/">
          <img
            src="./images/logo.png"
            alt="logo icon"
            className="w-10 md:w-12"
          />
        </Link>
      </div>

      {/* Menu-icon */}

      <div
        className="menu-icon md:hidden z-50"
        onClick={() => setShowNav(!showNav)}
      >
        <div className="one bar"></div>
        <div className="two bar"></div>
        <div className="three bar"></div>
      </div>

      <div className="nav-wrapper flex flex-col md:flex-row items-center justify-between w-full absolute top-px p-3 md:p-0 md:relative z-20 ">
        {/* Nav-List */}
        <ul className="nav-list flex flex-col  gap-6 items-center  md:flex-row">
          <li>
            <a
              href="#"
              className="nav-links font-semibold text-gray-700 text-lg"
            >
              Our Packages
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-links font-semibold text-gray-700 text-lg"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-links font-semibold text-gray-700 text-lg"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Btns */}

        {pathname == "/" ? (
          <div className="btn-container flex gap-4 items-center justify-end mt-5 md:mt-0">
            <Btn
              text="Sign In"
              extraClasses="bg-gray-300 hover:bg-gray-400 transition duration-200 "
            />
            <Btn
              text="Sign Up"
              extraClasses="bg-blue-600 text-white px-10 shadow-xl hover:bg-blue-400 transition duration-200"
            />
          </div>
        ) : (
          <div className=" flex gap-4 items-center justify-end mt-5 md:mt-0 w-6 md:w-10 ">
            <img
              src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-refresh-mintab-for-ios-becris-lineal-becris-1.png"
              className="w-10"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
