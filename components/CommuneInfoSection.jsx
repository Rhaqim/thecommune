import React from "react";

const CommuneInfoSection = ({ avgRating, budget, meal_of_the_week }) => {
  return (
    <div className="bg-gray-600">
      <div className="py-5">
        <ul className="text-white text-center grid lg:grid-cols-2 grid-cols-2 mid-content">
          <li className="p-4">
            <h1 className="sm:text-sm lg:text-4xl md:text-3xl font-bold p-2">Avg Rating: {avgRating}</h1>
          </li>
          <li className="p-4">
            <h1 className="sm:text-sm lg:text-4xl md:text-3xl font-bold p-2">Budget: {budget}</h1>
          </li>
          <li className="p-4">
            <h1 className="sm:text-sm lg:text-4xl md:text-3xl font-bold p-2">Meal of the Week: {meal_of_the_week}</h1>
          </li>
          <li className="p-4">
            <h1 className="sm:text-sm lg:text-4xl md:text-3xl font-bold p-2">Gallery</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CommuneInfoSection;
