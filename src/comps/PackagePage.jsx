import React from "react";
import Btn from "./Btn";
import SinglePackage from "./SinglePackage";
import PackagesData from "./PackagesData";

const PackagePage = () => {
  return (
    <section
      id="package-page"
      className="container text-center flex flex-column gap-5 items-center"
    >
      <div className="wrapper my-10 border border-gray-200  md:w-2/3 mx-auto pt-16 pb-5 px-14 relative">
        {/* Avatar-img */}
        <figure className="avatar-img absolute p-3 bg-white border border-gray-500 rounded-full">
          <img src="./images/avatar.svg" alt="avatar icon" />
        </figure>

        {/* title */}
        <h1 className="package-title text-2xl sm:text-3xl text-blue-600 font-light mb-10">
          Got it! Which would you like?
        </h1>

        {/* input */}
        <div className="input-group flex flex-col sm:flex-row items-center mb-8 gap-6 sm:gap-0 relative  ">
          <input
            type="text"
            className="px-5   py-3 w-full rounded-full shadow-md"
            placeholder="Search here"
          />
          <Btn
            text="Search Package"
            extraClasses="bg-blue-600 text-white sm:absolute sm:right-px"
          />
        </div>

        {/* Packages */}
        <div className="packages-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {PackagesData.map((item, index) => (
            <SinglePackage key={index} {...item} />
          ))}
        </div>

        {/* Next-Btn */}
        <Btn
          text="NEXT"
          extraClasses="bg-blue-600 text-white px-10 mt-8 shadow-lg"
        />
      </div>
    </section>
  );
};

export default PackagePage;
