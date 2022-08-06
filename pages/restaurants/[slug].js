import React from "react";
import RestaurantsHero from "../../components/RestaurantsHero";
import CommuneInfoSection from "../../components/CommuneInfoSection";
import RestaurantReviews from "../../components/RestaurantReviews";

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
      restaurant: json,
    },
  };
};

const RestaurantsPage = ({ restaurant }) => {
  const title = `Shiro Restaurant`;
  const orgImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  const tags = ["Japanese", "Styled", "Restaurant"];
  const { name } = restaurant;
  const reviews = [
    {
      id: "ab776524",
      name: "John Doe",
      rating: 5,
      review: "This place is great!",
      date: "2020-01-01",
      likes: 5,
      dislikes: 3,
      spent: "$100",
      reviewImages: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ]
    },
    {
      id: "ab776525",
      name: "Jane Doe",
      rating: 4,
      review: "This place is okay.",
      date: "2020-01-02",
      likes: 4,
      dislikes: 3,
      spent: "$100",
      reviewImages: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ]
    },
    {
      id: "ab776526",
      name: "Joe Doe",
      rating: 3,
      review: "This place is not so good.",
      date: "2020-01-03",
      likes: 3,
      dislikes: 3,
      spent: "$100",
      reviewImages: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ]
    },
    {
      id: "ab776527",
      name: "Jack Doe",
      rating: 2,
      review: "This place is not good.",
      date: "2020-01-04",
      likes: 2,
      dislikes: 3,
      spent: "$100",
      reviewImages: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ]
    },
    {
      id: "ab776528",
      name: "Jill Doe",
      rating: 1,
      review: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam.", 
      date: "2020-01-05",
      likes: 1,
      dislikes: 3,
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
      <RestaurantsHero image={orgImage}
        title={title}
        tags={tags}
      />
      <CommuneInfoSection />
      <div className="py-[3rem]">
        <h1 className="text-white text-5xl text-center">Reviews</h1>
      </div>
      {reviews.map((review) => (
        <RestaurantReviews key={review.id} user={review.name} date={review.date} ratingImages={review.reviewImages} rating={review.rating} likes={review.likes} dislikes={review.dislikes}>
          <p>{review.review}</p>
        </RestaurantReviews>
      ))}
    </div>
  );
};

export default RestaurantsPage;
