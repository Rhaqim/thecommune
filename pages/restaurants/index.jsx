import React from "react";
import Link from "next/link";
import Hero from "../../components/Hero";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();

  return {
    props: {
      title: "Restaurants",
      description: "Restaurants",
      keywords: "Restaurants",
      restaurants: json,
    },
  };
};

const restaurants = ({ restaurants }) => {
  return (
    <div>
      <Hero heading="Restaurants" message="Restaurants Page" />
      {restaurants.map(restaurant => (
        <div key={restaurant.id}>
          {/* <Link
            href={`/restaurants/${restaurant.name
              .toLowerCase()
              .replace(/ /g, "-")}`}
          > */}
          <Link
            href={`/restaurants/${restaurant.id}`}
          >
            {restaurant.name}
          </Link>
          <p>{restaurant.description}</p>
        </div>
      ))}
    </div>
  );
};

export default restaurants;
