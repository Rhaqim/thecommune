import React from "react";

const CommuneInfoSection = () => {
  return (
    <div className="bg-gray-600">
      <div className="py-5">
        <ul className="text-white text-center grid lg:grid-cols-3 sm:grid-cols-1 mid-content">
          <li className="p-4">
            <h1 className="sm:text-sm lg:text-4xl md:text-3xl font-bold p-2">Avg Rating</h1>
          </li>
          <li className="p-4">
            <h1 className="sm:text-sm lg:text-4xl md:text-3xl font-bold p-2">budget</h1>
          </li>
          <li className="p-4">
            <h1 className="sm:text-sm lg:text-4xl md:text-3xl font-bold p-2">Meal of the Week</h1>
          </li>
          <li className="p-4">
            <h1 className="sm:text-sm lg:text-4xl md:text-3xl font-bold p-2">Menu</h1>
          </li>
          <li className="p-4">
            <h1 className="sm:text-sm lg:text-4xl md:text-3xl font-bold p-2">Gallery</h1>
          </li>
          <li className="p-4">
            <h1 className="sm:text-sm lg:text-4xl md:text-3xl font-bold p-2">Name of Person</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CommuneInfoSection;
