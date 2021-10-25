import React from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import { useLocation } from "react-router";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav class="navbar container flex gap-5 items-center justify-between">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="./images/logo.png" alt="logo icon" />
        </Link>
      </div>

      {/* Nav-List */}
      <ul className="nav-list flex gap-6 items-center">
        <li>
          <a href="#" className="nav-links font-semibold text-gray-700 text-lg">
            Our Packages
          </a>
        </li>
        <li>
          <a href="#" className="nav-links font-semibold text-gray-700 text-lg">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="nav-links font-semibold text-gray-700 text-lg">
            Contact
          </a>
        </li>
      </ul>

      {/* Btns */}

      {pathname == "/" ? (
        <div className="btn-container flex gap-4 items-center justify-end ">
          <Btn text="Sign In" extraClasses="bg-gray-300 " />
          <Btn
            text="Sign Up"
            extraClasses="bg-blue-600 text-white px-10 shadow-xl "
          />
        </div>
      ) : (
        <div className="btn-container flex gap-4 items-center justify-end ">
          <img
            src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-refresh-mintab-for-ios-becris-lineal-becris-1.png"
            className="w-10"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
