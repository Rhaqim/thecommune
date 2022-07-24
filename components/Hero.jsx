import React from "react";

const Hero = ({ heading, message, bg_image }) => {
  return (
    <>
      <div className={`flex items-center justify-center h-screen bg-fixed bg-center bg-cover ${bg_image}`}>
        <div className="p-5 text-white z-[2] mt-[-10rem]">
          {/* <h2 className="text-5xl font-bold">{heading}</h2> */}
          <p className="container py-5 text-4xl text-center">{message}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
