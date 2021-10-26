import React from "react";

const SinglePackage = ({ img, name }) => {
  return (
    <article className="single-package inline-block text-center grid place-items-center hover:bg-blue-100 transition duration-200 cursor-pointer py-4 px-8 rounded-lg ">
      {/* Image */}
      <figure
        className="w-16 h-16 border border-blue-600 grid place-items-center relative"
        style={{ borderRadius: "1.2rem" }}
      >
        <div
          className="circle absolute w-4 h-4 bg-gray-200 border border-blue-600 rounded-full "
          style={{ bottom: -8 }}
        ></div>

        <img src={img} alt="img" className="w-8" />
      </figure>

      {/* Name */}
      <p className="text-blue-600 mt-3 text-sm font-medium">{name}</p>
    </article>
  );
};

export default SinglePackage;
