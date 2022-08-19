import React, { useEffect } from "react";
import RestaurantsHero from "../../components/RestaurantsHero";
import CommuneInfoSection from "../../components/CommuneInfoSection";
import RestaurantReviews from "../../components/RestaurantReviews";
import WriteReview from "../../components/WriteReview";

//Production
export const getStaticPaths = async () => {
  // fetch all restaurants from next api
  const restaurants = await fetch("http://localhost:3000/api/restaurants");
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
  const restaurantJson = await fetch(`http://localhost:3000/api/getRestaurant?id=${slug}`);
  const restaurant = await restaurantJson.json();

  // get all restaurant reviews
  const reviewJson = await fetch(`http://localhost:3000/api/reviews?id=${slug}`);
  const reviews = await reviewJson.json();

  const reviewers = reviews.map((review) => review.reviewer);

  const users = reviewers.map((reviewer) => reviewer.$id);

  // map users to each review
  const reviewsWithUsers = reviews.map((review) => {
    const reviewer = review.reviewer;
    const user = users.find((user) => user === reviewer.$id);
    return { ...review, user };
  });

  return {
    props: {
      restaurant: restaurant,
      reviews: reviewsWithUsers,
    },
  };
};

const RestaurantsPage = ({ restaurant }) => {
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
  const reviews = [
    {
      id: "ab776524",
      reviewer: "John Doe",
      reviewRating: 5,
      review: "This place is great!",
      reviewDate: "2020-01-01",
      like: 5,
      dislike: 3,
      spent: "$100",
      reviewImages: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ]
    },
    {
      id: "ab776525",
      reviewer: "Jane Doe",
      review: "This place is okay.",
      reviewRating: 4,
      spent: "$100",
      reviewImages: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
      like: 4,
      dislike: 3,
      reviewDate: "2020-01-02",
    },
    {
      id: "ab776526",
      reviewer: "Joe Doe",
      reviewRating: 3,
      review: "This place is not so good.",
      reviewDate: "2020-01-03",
      like: 3,
      dislike: 3,
      spent: "$100",
      reviewImages: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ]
    },
    {
      id: "ab776527",
      reviewer: "Jack Doe",
      reviewRating: 2,
      review: "w-full p-3 text-black rounded border border-gray-300 placeholder-gray-100 shadow-sm focus:outline-none focus:shadow-outline lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam lorem ipsum dolor sit amet conseclorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam lorem ipsum",
      reviewDate: "2020-01-04",
      like: 2,
      dislike: 3,
      spent: "$100",
      reviewImages: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ]
    },
    {
      id: "ab776528",
      reviewer: "Jill Doe",
      reviewRating: 1,
      review: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam.",
      reviewDate: "2020-01-05",
      like: 1,
      dislike: 3,
      spent: "$100",
      reviewImages: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1526398977052-654221a252b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1521424159246-e4a66f267e4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      ]
    }
  ];
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
        <RestaurantReviews key={review.id} reviews={review}>
          <p>{review.review}</p>
        </RestaurantReviews>
      ))}
      <WriteReview user={currrentUser} />
    </div>
  );
};

export default RestaurantsPage;
