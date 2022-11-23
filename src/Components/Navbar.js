import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="h-[55px]  bg-[#dfeecb] flex  justify-center p-2">
      <div className="w-full max-w-[1024px] flex items-center justify-between ">
        <Link to="/">
          {" "}
          <p className="text-green-500 text-2xl ">Book Now</p>
        </Link>
        <div className="">
          <button className="ml-5 p-2 border-none	shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
            {" "}
            Register
          </button>
          <button className="ml-5 p-2 border-none	shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
            {" "}
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
