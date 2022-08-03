import React from "react";
import RestaurantsHero from "../../components/RestaurantsHero";
import CommuneInfoSection from "../../components/CommuneInfoSection";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();
  return {
    // paths: json.map(restaurant => ({
    //   params: { slug: restaurant.name.toLowerCase().replace(/ /g, "-") },
    // })),
    paths: json.map(restaurant => ({
      params: { slug: restaurant.id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.slug}`
  );
  const json = await res.json();
  return {
    props: {
      title: "Restaurants",
      description: "Restaurants",
      keywords: "Restaurants",
      restaurant: json,
    },
  };
};

const RestaurantsPage = ({ restaurant }) => {
  return (
    <div>
      <RestaurantsHero image={"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
        heading={"Shiro"}
        description="Japanese Styled Restaurant"
      />
      <CommuneInfoSection />


      <h1>{restaurant.name}</h1>
      <p>{restaurant.email}</p>
      <p>{restaurant.phone}</p>
      <p>{restaurant.website}</p>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.email}</p>
      <p>{restaurant.phone}</p>
      <p>{restaurant.website}</p>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.email}</p>
      <p>{restaurant.phone}</p>
      <p>{restaurant.website}</p>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.email}</p>
      <p>{restaurant.phone}</p>
      <p>{restaurant.website}</p>
    </div>
  );
};

export default RestaurantsPage;
