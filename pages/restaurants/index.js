import React from "react";
import Link from "next/link";
import RestaurantsHeading from "../../components/RestaurantsHeading";
import { motion } from "framer-motion";

export const getStaticProps = async () => {
  // fetch all restaurants from next api
  const uriDev = "http://localhost:3000/api/restaurants";
  const uriProd = "https://thecommune.vercel.app/api/restaurants";
  const restaurants = await fetch(uriProd);
  const restaurantsJson = await restaurants.json();

  return {
    props: {
      restaurants: restaurantsJson,
    }
  }
};

/*
variants to show hidden text on hover
*/
const variants = {
  hidden: { opacity: 0.15 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};


const restaurants = ({ restaurants }) => {
  return (
    <RestaurantsHeading>
      <div className="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-6">
          {restaurants.map((restaurant) => (
            <Link key={restaurant._id} href={`/restaurants/${restaurant._id}`}>
              <motion.div
              className="p-1 m-2 cursor-pointer"
              >
                <motion.img
                  src={restaurant.images[0]}
                  alt={restaurant.title}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="h-48 w-full object-cover rounded-lg shadow-lg"
                />
                <motion.button
                  variants={variants}
                  initial="hidden"
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  whileTap={{ opacity: 0.5, scale: 0.9 }}
                  className="text-center text-md text-white font-semibold pt-12 items-center justify-center"
                >
                  {restaurant.title}
                </motion.button>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </RestaurantsHeading>
  );
};

export default restaurants;