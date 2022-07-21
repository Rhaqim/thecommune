import React from "react";

const RestaurantsSection = ({ children }) => {
  return (
    <div className="max-w-[1240] mx-auto p-2">
      <div />
      <div className="py-10 justify-center items-center  bg-opacity-10 rounded-xl m-2">
        <h1 className="py-10 text-5xl text-white font-bold">Restaurants</h1>
        <div className="grid grid-rows-none md:grid-cols-5 p-4 md:gap-4">
          <div className="w-full h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsSection;
