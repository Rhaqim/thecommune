import React from "react";
import RestaurantsHero from "../../components/RestaurantsHero";
import CommuneInfoSection from "../../components/CommuneInfoSection";
import RestaurantReviews from "../../components/RestaurantReviews";
import WriteReview from "../../components/WriteReview";

import { getRestaurantById, getRestaurantsReview } from "../../lib/DB/DBExecutions";


export const getServerSideProps = async (context) => {
    const { slug } = context.query;
    const restaurants = await getRestaurantById(slug);

    const reviews = await getRestaurantsReview(slug);

    return {
        props: {
            restaurant: JSON.parse(JSON.stringify(restaurants)),
            reviews: JSON.parse(JSON.stringify(reviews)),
        },
    };
};

const RestaurantsPage = ({ restaurant, reviews }) => {
  const { title, tags, images, avgPrice, rating } = restaurant;
  const currrentUser = {
    user_id: "1",
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "New York",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas nunc, euismod eget nisl eget consectetur sagittis.",
    social: {
      twitter: "https://twitter.com/johndoe",
      facebook: "https://facebook.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/johndoe",
    },
  };
  return (
    <div>
      <RestaurantsHero image={images[1].uri}
        title={title}
        tags={tags}
      />
      <CommuneInfoSection 
      avgRating={rating}
      budget={avgPrice}
      meal_of_the_week={"SUSHI"}
      />
      <div className="py-[3rem]">
        <h1 className="text-white text-5xl text-center">Reviews</h1>
      </div>
      {reviews.map((review) => (
        <RestaurantReviews key={review._id} reviews={review}>
          <p>{review.review}</p>
        </RestaurantReviews>
      ))}
      <WriteReview 
      user={currrentUser}
      restaurant={restaurant}
      />
    </div>
  );
};

export default RestaurantsPage;
