import React from "react";

const RestaurantsHero = ({ image, title, tags }) => {
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
              zIndex: -1,
            }}
          >
            <div className="p-5 text-white z-[2] mt-[2rem] mid-content">
              <h2 className="text-[25px] sm:text-sm md:text-3xl lg:text-6xl text-left">
                {title}
              </h2>
              <div className="flex pt-[17.5rem] lg:pt-[16rem] text-[10px] lg:text-[12px] text-left">
                {tags.map((tag, index = index.toString() + "152247856a") => (
                  <>
                    <a
                      key={index}
                      href={`/tags/${tag}`}
                      className="bg-gray-500 bg-opacity-100 rounded-lg p-1 mx-2 hover:bg-[#A1A1A1] focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      {tag}
                    </a>
                  </>
                ))}
              </div>
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
