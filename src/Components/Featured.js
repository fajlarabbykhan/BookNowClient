import React from "react";

const Featured = () => {
  return (
    <div className="w-full max-w-[1024px] flex justify-between gap-5 z-30 mt-44 sm:mt-5 p-2">
      <div className="relative text-white rounded-md	overflow-hidden	h-[250px]">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="w-full object-cover	"
        />
        <div className="absolute bottom-12	 left-3	">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="relative text-white rounded-md	overflow-hidden	h-[250px]">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="absolute bottom-12	 left-3	">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="relative text-white rounded-md	overflow-hidden	h-[250px]">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="absolute bottom-12	 left-3	">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
