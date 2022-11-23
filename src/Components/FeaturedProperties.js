import React from "react";
import useFetch from "./hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    " http://localhost:4000/server/hotels?featured=true&limit=4"
  );
  console.log(data);
  return (
    <div className="w-full max-w-[1024px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2 ">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="flex flex-col	gap-2" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="w-full h-[250px] object-cover"
              />
              <span className="font-bold	 text-[#333]">{item.name}</span>
              <span className="font-light">{item.city}</span>
              <span className="font-medium	">
                Starting from ${item.cheapestPrice}
              </span>
              {item.ratting && (
                <div>
                  <button className="border-none p-3 mr-2 font-bold shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
                    {item.rating}
                  </button>
                  <span className="text-sm	">Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
