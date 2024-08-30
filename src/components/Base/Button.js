import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`px-4 py-2 bg-gray-200 rounded-md border-2 border-gray-400 ${className}`}>
      {children}
    </button>
  );
}

export default Button;