import React from "react";

const RestaurantsHero = ({ image, heading, description }) => {
  return (
    <>
      <div className="flex max-w-auto pt-[5.5rem] mb-[5px]">
        <div style={{ width: "80%", height: 400 }}>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 400,
              width: "100%",
              display: "flex",
            }}
          >
            <div className="p-5 text-white z-[2] mt-[2rem] mid-content">
              <h2 className="text-6xl font-bold text-center lg:text-left">{heading}</h2>
              <p className="container pt-[8rem] sm:text-sm lg:text-4xl md:text-3xl text-center">{description}</p>
            </div>
          </div>
        </div>
        <div
          className="bg-gray-500"
          style={{
            width: "20%",
            height: 400,
            paddingLeft: "1rem",
            paddingRight: "1rem",
            marginLeft: "5px",
            backgroundColor:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), #A1A1A1",
          }}
        >
          <div className="flex flex-col items-center justify-center text-center sm:text-sm lg:text-4xl md:text-3xl py-[2rem]">
            <ul>
              <li className="p-2 hover:text-black nav-transition">
                <a href={"#"}>Menu</a>
              </li>
              <li className="p-2 hover:text-black nav-transition">
                <a href={"#"}>Phone</a>
              </li>
              <li className="p-2 hover:text-black nav-transition">
                <a href={"#"}>E-mail</a>
              </li>
              <li className="p-2 hover:text-black nav-transition">
                <a href={"#"}>Website</a>
              </li>
              <li className="p-2 hover:text-black nav-transition">
                <a href={"#"}>Address</a>
              </li>
              <li className="p-2 hover:text-black nav-transition">
                <a href={"#"}>Open now</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantsHero;