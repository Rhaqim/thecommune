import React from "react";

const RestaurantsHero = ({ image, heading, description }) => {
  return (
    <>
      <div className="flex max-w-auto pt-[5.5rem]">
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
              <h2 className="text-5xl font-bold">{heading}</h2>
              <p className="container pt-[8rem] text-4xl text-center">{description}</p>
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
          <div className="flex flex-col items-center justify-center text-3xl py-[5rem]">
            <ul>
              <li className="p-2 hover:text-black nav-transition">
                <a href={"#"}>Website</a>
              </li>
              <li className="p-2 hover:text-black nav-transition">
                <a href={"#"}>Address</a>
              </li>
              <li className="p-2 hover:text-black nav-transition">
                <a href={"#"}>Phone</a>
              </li>
              <li className="p-2 hover:text-black nav-transition">
                <a href={"#"}>E-mail</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantsHero;

{
  /* <Image
            alt="Mountains"
            src={image}
            layout="intrinsic"
            width={"1640rem"}
            height={400}
            objectFit="cover"
            quality={100}
          /> */
}

{
  /* <div
        className={`flex items-center justify-center h-screen bg-fixed bg-center bg-cover ${header_image}`}
      >
        <div className="p-5 text-white z-[2] mt-[-10rem]">
          <h2 className="text-5xl font-bold">{RestaurantName}</h2>
          <p className="container py-5 text-4xl text-center">{description}</p>
          <p className="container py-5 text-4xl text-center">{phone}</p>
          <p className="container py-5 text-4xl text-center">{website}</p>
          <p className="container py-5 text-4xl text-center">{address}</p>
        </div>
      </div> */
}
