import React from "react";
import BaseScene from "./models/BaseScene";

const HomeSection = ({ children, title, img, id, fileID }) => {
  return (
    <div id={id} className="max-w-[1240] mx-auto">
      <div className="flex py-10 justify-center items-center  bg-opacity-10 rounded-xl m-2">
        <h1 className="py-10 text-5xl text-white ">{title}</h1>
        <div className='model'>
          <BaseScene fileID={fileID} />
        </div>
      </div>
      <div
        className={`flex items-center justify-center h-screen m-auto bg-fixed bg-center bg-cover ${img}`}
      >
        <p className="p-10">{children}</p>
      </div>
    </div>
  );
};

export default HomeSection;
