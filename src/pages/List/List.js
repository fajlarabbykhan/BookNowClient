import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import useFetch from "../../Components/hooks/useFetch";
import Navbar from "../../Components/Navbar";
import SearchItem from "../../Components/SearchItem";
const List = () => {
  const location = useLocation();
  // console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [members, setMembers] = useState(location.state.members);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);

  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:4000/server/hotels?city=${destination}&min=${
      min || 0
    }&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-[1024px] grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" bg-gradient-to-r from-[#5651e5] to-[#709dff] ml-2 w-full h-[415px] p-3 rounded-lg	md:sticky top-2 relative">
            <p className="text-xl	text-white font-bold mb-2">Search</p>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-xs text-white">Destination</label>
              <input
                type="text"
                placeholder={destination}
                className="h-7 border-none p-2"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-xs text-white">Check-in Date</label>
              <spna
                className="h-7 border-none p-2 bg-white flex items-center cursor-pointer"
                onClick={() => setOpenDate(!openDate)}
              >
                {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </spna>

              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className="absolute top-[152px] z-40"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-xs text-white">Total Members</label>
              <input
                type="number"
                min="1"
                placeholder={members}
                className="h-7 border-none p-2"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-xs font-bold text-white">Options</label>
              <div className="">
                <div className="flex justify-between  mb-2 ">
                  <span className="text-xs text-white">
                    Min Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="h-7 border-none p-2"
                    onChange={(e) => setMin(e.target.value)}
                  />
                </div>
                <div className="flex justify-between  mb-2 ">
                  <span className="text-xs text-white">
                    Max Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="h-7 border-none p-2"
                    onChange={(e) => setMax(e.target.value)}
                  />
                </div>
                <div className="flex justify-between mb-2 ">
                  <span className="text-xs text-white">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="h-7 border-none p-2"
                  />
                </div>
              </div>
            </div>
            <button
              className="p-2 shadow-gray-400  text-xl bg-gradient-to-r from-[#dee94c] to-[#d41876] text-white w-full"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
          <div className="col-span-2  p-3">
            {loading ? (
              "Loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem key={item._id} item={item} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
