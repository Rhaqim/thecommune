import React from "react";

const RestaurantReviews = ({ user, date, children }) => {
  return (
    <div className="max-w-[1240] mx-auto">
      <div className="py-[3rem]">
        <h1 className="text-white text-5xl text-center">Reviews</h1>
      </div>
      <div className="justify-center align-center mx-4 my-2 p-3 bg-gray-600 rounded-xl">
        <div className="container bg-black rounded-lg p-3">
          <div className="flex justify-between rounded-lg p-2">
            <h1 className="text-lg text-left">{user}</h1>
            <h1 className="text-lg text-center invisible lg:visible">Rating ❤️</h1>
            <h1 className="text-sm text-right">{date}</h1>
          </div>
          <div className="container bg-gray-600 rounded-md p-3">
            <p>Comments</p>
            <div>{children}</div>
          </div>
          <h1 className="text-lg text-center visible lg:invisible">
            Rating ❤️
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RestaurantReviews;
