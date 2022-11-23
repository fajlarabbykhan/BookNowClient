import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="flex justify-between gap-5 mb-5 rounded border border-indigo-600 p-2">
      <img
        src={item.photos[0]}
        alt=""
        className="w-[200px] h-[200px] object-cover"
      />
      <div className="flex flex-col gap-3 flex-2">
        <h1 className="text-xl text-[#0071c2]">{item.name}</h1>
        <span className="text-xs ">{item.distance}m from center</span>
        <span className=" text-xs bg-gradient-to-r from-[#d41876] to-[#dee94c] text-white p-1 rounded font-bold">
          Free airport taxi
        </span>
        <span className="text-xs text-[#804abd] font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-xs">{item.desc}</span>
        <span className="text-xs text-[#804abd]font-bold">
          Free cancellation{" "}
        </span>
        <span className="text-xs text-[#804abd]">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        {item.rating && (
          <div className="flex justify-between">
            <span className="font-normal p-1">Excellent</span>
            <button className="bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white p-1 font-bold ">
              {item.rating}
            </button>
          </div>
        )}
        <div className="text-right	flex flex-col gap-1">
          <span className="text-2xl">${item.cheapestPrice}</span>
          <span className="text-xs text-[#804abd] ">
            Includes taxes and fees
          </span>
          <Link to={`/hotels/${item._id}`}>
            <button className="bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white font-bold cursor-pointer rounded">
              See availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
