import React, { useEffect } from "react";
import RestaurantsHero from "../../components/RestaurantsHero";
import CommuneInfoSection from "../../components/CommuneInfoSection";
import RestaurantReviews from "../../components/RestaurantReviews";
import WriteReview from "../../components/WriteReview";

//Production
export const getStaticPaths = async () => {
  // fetch all restaurants from next api
  const restaurantURI = process.env.RESTAURANTS_URI

  const restaurants = await fetch(restaurantURI);
  const restaurantsJson = await restaurants.json();

  const paths = restaurantsJson.map((restaurant) => ({
    params: { slug: restaurant._id.toString() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const { slug } = context.params;
  
  // get resturant data as well as reviews
  const restaurantsURI = process.env.GET_RESTAURANTS_URI

  const restaurantJson = await fetch(restaurantsURI + `?id=${slug}`);
  const restaurant = await restaurantJson.json();

  // get all restaurant reviews
  const reviewURI = process.env.GET_REVIEW_URI;

  const reviewJson = await fetch(reviewURI + `?id=${slug}`);
  const reviews = await reviewJson.json();

  const getReviewer =  () => {
    const reviewers = reviews.map((review) => review.reviewer);
    const users = reviewers.map((reviewer) => reviewer.$id);

    // map users to each review
    const reviewsWithUsers = reviews.map((review) => {
      const reviewer = review.reviewer;
      const user = users.find((user) => user === reviewer.$id);
      return { ...review, user };
    });

    return reviewsWithUsers;
  };

  return {
    props: {
      restaurant: restaurant,
      reviews: getReviewer(),
    },
  };
};

const RestaurantsPage = ({ restaurant, reviews }) => {
  const { title, tags, images } = restaurant;
  const currrentUser = {
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
      <RestaurantsHero image={images[0]}
        title={title}
        tags={tags}
      />
      <CommuneInfoSection />
      <div className="py-[3rem]">
        <h1 className="text-white text-5xl text-center">Reviews</h1>
      </div>
      {reviews.map((review) => (
        <RestaurantReviews key={review._id} reviews={review}>
          <p>{review.review}</p>
        </RestaurantReviews>
      ))}
      <WriteReview user={currrentUser} />
    </div>
  );
};

export default RestaurantsPage;
