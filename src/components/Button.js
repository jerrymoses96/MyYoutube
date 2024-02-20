import React from "react";

const Button = ({ name }) => {
  return (
    <div className=" text-center px-4 py-1 rounded-lg m-2 cursor-pointer       bg-gray-200 hover:bg-gray-100">
      {name}
    </div>
  );
};

export default Button;
