import React from "react";
import Featured from "../../Components/Featured";
import FeaturedProperties from "../../Components/FeaturedProperties";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import PropertyList from "../../Components/PropertyList";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <div className=" mt-8 flex  flex-col items-center gap-5">
        <Featured />
        <h1 className="text-2xl max-w-[1024px] text-[#5651e5] justify-start		">
          Browse by property type
        </h1>
        <PropertyList />
        <h1 className="text-2xl max-w-[1024px] text-[#5651e5] justify-start		">
          Homes guests love
        </h1>
        <FeaturedProperties />

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
