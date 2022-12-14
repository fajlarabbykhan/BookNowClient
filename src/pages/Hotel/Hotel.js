import React, { useContext } from "react";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import useFetch from "../../Components/hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  // const photos = [
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
  //   },
  // ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(
    `http://localhost:4000/server/hotels/find/${id}`
  );

  const { dates, members } = useContext(SearchContext);
  // console.log(dates);
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  // console.log(days);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading"
      ) : (
        <div className="flex flex-col items-center mt-5 p-1">
          {/* bg-base-300 */}
          {open && (
            <div className=" sticky top-0 left-0 w-[100vw] h-[100vh]  bg-[#000000] bg-opacity-50  z-[999] flex items-center">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className=" absolute top-5 right-5 text-[#dbdaeb]  cursor-pointer m-5 text-5xl"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className=" m-5 text-5xl text-[#dbdaeb]  cursor-pointer"
                onClick={() => handleMove("l")}
              />
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="w-[80%] h-[80vh] "
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="m-5 text-5xl text-[#dbdaeb] cursor-pointer"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="w-full max-w-[1024px] flex flex-col gap-2 relative mb-7">
            <button className="absolute top-2 right-0 border-none px-5 py-2 bg-[ #0071c2] text-white font-bold rounded cursor-pointer bg-gradient-to-r from-[#5651e5] to-[#709dff]">
              Book Now!
            </button>
            <h1 className=" text-2xl text-[#5651e5]">{data.name}</h1>
            <div className=" text-xs flex items-center gap-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-[#804abd]"
              />
              <span className="text-[#804abd]">{data.address}</span>
            </div>
            <span className="text-[#0071c2] font-medium">
              Excellent location ??? {data.distance}m from center
            </span>
            <span className=" text-[#804abd] font-medium">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="flex flex-wrap justify-between">
              {data.photos?.map((photo, i) => (
                <div className="w-[33%]" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="w-full object-cover cursor-pointer "
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-5 mt-5">
              <div className="col-span-2 p-1">
                <h1 className=" text-xl text-[#5651e5]">{data.title}</h1>
                <p className=" text-sm mt-5">{data.desc}</p>
              </div>
              <div className="flex-1 bg-[#eff1f5] p-5 flex flex-col gap-5  shadow-2xl ">
                <h1 className=" text-lg text-[#0071c2]">
                  Perfect for a {days}-night stay!
                </h1>
                <span className=" text-sm">
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2 className=" font-light">
                  <b>${days * data.cheapestPrice * members}</b> ({days} nights)
                </h2>
                <button className="border-none px-5 py-2 bg-[ #0071c2] text-white font-bold rounded cursor-pointer bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                  Book Now!
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
