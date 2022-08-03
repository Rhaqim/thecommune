import React from "react";
import SearchBar from "./SearchBar";

const RestaurantsHeading = ({ children }) => {
  return (
    <div className="max-w-[1240] mx-auto p-2">
      <div />
      <div className="py-10 justify-center items-center">
        <div className="lg:flex py-16 justify-between ">
          <h1 className="text-5xl text-white font-bold">Restaurants</h1>
          <div className="search-bar">
            <SearchBar />
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default RestaurantsHeading;
