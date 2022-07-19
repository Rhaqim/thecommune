import React from "react";
import BaseScene from "./models/BaseScene";

const RestaurantsHomeSection = ({ children, title, img, id }) => {
  return (
    <div id={id} className="max-w-[1240] mx-auto" >
      <div className="flex p-10 justify-between items-center  bg-opacity-10 rounded-xl m-2">
        <h1 className="p-10 text-5xl text-white ">{title}</h1>
        <BaseScene />
      </div>
      <div
        className={`flex items-center justify-center h-screen m-auto bg-fixed bg-center bg-cover ${img}`}
      >
        <p className="p-10">{children}</p>
      </div>
    </div>
  );
};

export default RestaurantsHomeSection;
