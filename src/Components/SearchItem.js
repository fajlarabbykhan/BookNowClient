import React from "react";

const SearchItem = () => {
  return (
    <div className="flex justify-between gap-5 mb-5 rounded border border-indigo-600 p-2">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="w-[200px] h-[200px] object-cover"
      />
      <div className="flex flex-col gap-3 flex-2">
        <h1 className="text-xl text-[#0071c2]">Tower Street Apartments</h1>
        <span className="text-xs ">500m from center</span>
        <span className=" text-xs bg-gradient-to-r from-[#d41876] to-[#dee94c] text-white p-1 rounded font-bold">
          Free airport taxi
        </span>
        <span className="text-xs text-[#804abd] font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-xs">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="text-xs text-[#804abd]font-bold">
          Free cancellation{" "}
        </span>
        <span className="text-xs text-[#804abd]">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between">
          <span className="font-normal p-1">Excellent</span>
          <button className="bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white p-1 font-bold ">
            8.9
          </button>
        </div>
        <div className="text-right	flex flex-col gap-1">
          <span className="text-2xl">$112</span>
          <span className="text-xs text-[#804abd] ">
            Includes taxes and fees
          </span>
          <button className="bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white font-bold cursor-pointer rounded">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
