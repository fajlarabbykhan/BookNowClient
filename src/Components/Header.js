import React from "react";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faLocationSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="bg-[#dfeecb] text-[#5651e5] flex justify-center p-2 relative">
      <div className="w-full max-w-[1024px] ">
        <div
          className={type === "list" ? "flex gap-5 mb-2" : "flex gap-5 mb-10"}
        >
          <div className="sm:flex items-center gap-2 border border-indigo-600 p-2 rounded-md">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className=" sm:flex items-center gap-2  p-2 ">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="sm:flex items-center gap-2 p-2">
            <FontAwesomeIcon icon={faCar} />
            <span>Cars</span>
          </div>
          <div className="sm:flex items-center gap-2 p-2">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="sm:flex items-center gap-2 p-2">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <div className="sm:h-[50px] bg-white	border border-indigo-600 sm:p-2 rounded-md sm:flex items-center	justify-around	absolute sm:bottom-[-25px] p-4 sm:w-full sm:max-w-[1024px]">
              <div className="flex items-center gap-2 py-2">
                <FontAwesomeIcon icon={faBed} />
                <input
                  type="text"
                  placeholder="Please enter location"
                  className="outline-none cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-2 py-2">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span
                  className="text-gray-400 cursor-pointer	"
                  onClick={() => setOpenDate(!openDate)}
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="absolute top-[95px] sm:top-[48px] z-40"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="flex items-center gap-2 py-2">
                <FontAwesomeIcon icon={faBed} />
                <input
                  type="number"
                  placeholder="Members"
                  className="outline-none cursor-pointer"
                  min="1"
                />
              </div>
              <div>
                <button className="border-none font-medium	cursor-pointer p-2 rounded-none	">
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
