import React from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";

const Hero = () => {
  return (
    <section
      id="Hero-section"
      className="container flex items-center justify-between gap-8"
    >
      {/* Text */}
      <article className="text-wrapper w-1/2">
        <h1 className="Hero-title text-5xl text-gray-800 font-bold mb-5">
          One size doesn't fit all
        </h1>

        <p className="Hero-para font-medium text-4xl text-gray-800 ">
          Get a personalised insurance package for your business!
        </p>
        <Link to="/packages">
          <Btn
            text="Check our Products"
            extraClasses="bg-blue-600 text-white mt-10 px-10"
          />
        </Link>
      </article>

      {/* Figure */}
      <figure className="Hero-image-wrapper">
        <img
          src="./images/hero-image.png"
          alt="hero-image"
          className="Hero-image"
        />
      </figure>
    </section>
  );
};

export default Hero;
