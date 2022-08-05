import React, { useState, useEffect } from "react";

const RestaurantReviews = ({ user, date, ratingImages, rating, children }) => {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    setRate("⭐️".repeat(rating));
  }, [rate]);

  return (
    <div className="max-w-[1240] mx-auto">
      <div className="py-[3rem]">
        <h1 className="text-white text-5xl text-center">Reviews</h1>
      </div>
      <div className="justify-center align-center mx-2 my-2 p-2 bg-gray-600 rounded-xl">
        <div className="bg-black rounded-lg p-3 mb-2">
          <div className="flex justify-between rounded-lg p-2">
            <h1 className="text-lg text-left">{user}</h1>
            <h1 className="text-lg text-center invisible lg:visible">
              RATING: {rate}
            </h1>
            <h1 className="text-sm text-right">{date}</h1>
          </div>
          <div className="bg-gray-600 rounded-md p-3">
            <p className="font-bold underline">Thoughts...</p>
            <div>{children}</div>
            <h1 className="underline pt-1">Gallery...</h1>
            <div className="flex p-1 justify-end">
              {ratingImages.map((image, index = index.toString() + "aasimge1") => (
                <img
                  key={index}
                  src={image}
                  alt="rating"
                  className="mx-2 mt-1"
                  style={{ height: 50, width: 50 }}
                />
              ))}
            </div>
          </div>
          <h1 className="text-lg text-left pt-2 visible lg:hidden">
            RATING: {rate}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RestaurantReviews;
