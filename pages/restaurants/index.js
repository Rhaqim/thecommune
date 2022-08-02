import React from "react";
import Link from "next/link";
import RestaurantsSection from "../../components/RestaurantsSection";
import { motion } from "framer-motion";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();

  const photos = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=30");
  const photosJson = await photos.json();

  return {
    props: {
      restaurants: json,
      photos: photosJson
    }
  }
};

/*
variants to show hidden text on hover
*/
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};


const restaurants = ({ restaurants, photos }) => {
  return (
    <RestaurantsSection>
      <div className="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-6">
          {photos.map((photo) => (
            <motion.button
              whileHover={{ scale: 1.1, backdropFilter: "blur(10px)", filter: "blur(4px)" }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                key={photo.id}
                src={photo.thumbnailUrl}
                alt={photo.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="h-48 w-full object-cover rounded-lg shadow-lg"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </RestaurantsSection>
  );
};

export default restaurants;


{/*
      {restaurants.map(restaurant => (
        <div key={restaurant.id} className="border border-gray-400 border-spacing-2 rounded-lg m-4">
          <Link href={`/restaurants/${restaurant.id}`}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[2rem] p-4 cursor-pointer items-center">
              <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt={restaurant.name} />
              <h1 className="font-bold text-2xl text-white">{restaurant.name}</h1>
              <p>{restaurant.email}</p>
            </div>
          </Link>
        </div>
      ))}
      */}