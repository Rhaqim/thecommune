import React from "react";
import { useSession } from "next-auth/react";
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
      restaurant={restaurant}
      />
    </div>
  );
};

export default RestaurantsPage;
