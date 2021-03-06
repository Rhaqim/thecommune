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
        <div key={restaurant.id} className="border border-gray-400 border-spacing-2 rounded-lg m-4">
          <Link href={`/restaurants/${restaurant.id}`}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-2 p-4 cursor-pointer items-center">
              <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt={restaurant.name} />
              <p>{restaurant.name}</p>
              <p>{restaurant.website}</p>
              <p>{restaurant.email}</p>
              <p>{restaurant.address.street}</p>
              <p>{restaurant.address.city}</p>
              <p>{restaurant.address.zipcode}</p>
              <p>{restaurant.phone}</p>
            </div>
          </Link>
        </div>
      ))}
    </RestaurantsSection>
  );
};

export default restaurants;
