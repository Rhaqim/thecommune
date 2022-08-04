import React from "react";
import SearchBar from "./SearchBar";

const RestaurantsHeading = ({ children }) => {
  return (
    <div className="max-w-[1240] mx-2 p-2">
      <div className="pt-10 justify-center items-center">
        <div className="lg:flex pt-16 justify-between">
          <h1 className="font-bold text-5xl text-center text-white">Restaurants</h1>
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
