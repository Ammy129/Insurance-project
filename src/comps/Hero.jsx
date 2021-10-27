import React from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";

const Hero = () => {
  return (
    <section
      id="Hero-section"
      className="container flex  flex-col text-center   md:text-left  md:flex-row items-center justify-between gap-8"
    >
      {/* Text */}
      <article className="text-wrapper w-full md:w-2/3 lg:w-1/2">
        <h1 className="Hero-title  text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-800 font-bold mb-5">
          One size doesn't fit all
        </h1>

        <p className="Hero-para font-medium  text-xl md:text-2xl  lg:text-4xl text-gray-800 ">
          Get a personalised insurance package for your business!
        </p>
        <Link to="/packages">
          <Btn
            text="Check our Products"
            extraClasses="bg-blue-600 text-white mt-10 px-10 hover:bg-blue-400 transition duration-200"
          />
        </Link>
      </article>

      {/* Figure */}
      <figure className="Hero-image-wrapper relative">
        {/* Coin */}
        <div className="img-wrapper absolute coin shadow-xl bg-white rounded-xl ">
          <img src="./images/coin.png" alt="coin image" className="w-full  " />
        </div>

        {/* Graph */}
        <div className="img-wrapper absolute  shadow-xl bg-white rounded-xl graph overflow-hidden ">
          <img src="./images/graph.png" alt="graph image" className=" w-full" />
        </div>

        {/* Hero-img */}
        <img
          src="./images/hero-image.png"
          alt="hero-image"
          className="Hero-image "
        />
      </figure>
    </section>
  );
};

export default Hero;
