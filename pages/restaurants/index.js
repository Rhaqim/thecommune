import React from "react";
import Link from "next/link";
import Hero from "../../components/Hero";
import RestaurantsSection from "../../components/RestaurantsSection";

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
    <RestaurantsSection>
      {restaurants.map(restaurant => (
        <div key={restaurant.id} className="p-4">
          {/* <Link
          href={`/restaurants/${restaurant.name
            .toLowerCase()
              .replace(/ /g, "-")}`}
          > */}
          <Link href={`/restaurants/${restaurant.id}`}>
            {restaurant.name}
          </Link>
          <p>{restaurant.website}</p>
        </div>
      ))}
    </RestaurantsSection>
  );
};

export default restaurants;
