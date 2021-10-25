import React from "react";

const Btn = ({ text, extraClasses }) => {
  return (
    <button
      className={`  px-7 py-3 rounded-full text-sm  font-semibold whitespace-nowrap ${extraClasses} `}
    >
      {text}
    </button>
  );
};

export default Btn;
