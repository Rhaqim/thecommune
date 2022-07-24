import React from "react";
import Grid from "../../components/Grid";
import Hero from "../../components/Hero";

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

const RestaurantsPage = ({restaurant}) => {
  return (
    <div>
      <Hero heading="Restaurants" message="Slug Page" />
      <Grid />
      <h1>{restaurant.name}</h1>
      <p>{restaurant.email}</p>
      <p>{restaurant.phone}</p>
      <p>{restaurant.website}</p>
    </div>
  );
};

export default RestaurantsPage;
