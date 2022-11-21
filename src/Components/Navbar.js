import React from "react";

const Navbar = () => {
  return (
    <div className="h-[55px]  bg-[#f3f6f9] flex  justify-center p-2">
      <div className="w-full max-w-[1024px] flex items-center justify-between ">
        <p className="text-green-500 text-2xl ">Book Now</p>
        <div className="">
          <button className="ml-5 p-2 border-none	"> Register</button>
          <button className="ml-5 p-2 border-none	"> Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
