import React, { useEffect } from "react";
import RestaurantsHero from "../../components/RestaurantsHero";
import CommuneInfoSection from "../../components/CommuneInfoSection";
import RestaurantReviews from "../../components/RestaurantReviews";
import WriteReview from "../../components/WriteReview";

//Production
// export const getStaticPaths = async () => {
//   // fetch all restaurants from next api
//   const restaurants = await fetch("http://localhost:3000/api/restaurants");
//   const restaurantsJson = await restaurants.json();

//   const paths = restaurantsJson.map((restaurant) => ({
//     params: { id: restaurant._id.toString() },
//   }));

//   return {
//     paths: paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async context => {
//   const { id } = context.params;
//   // get resturant data as well as reviews
//   const restaurantJson = await fetch(`http://localhost:3000/api/getRestaurant?id=${id}`);
//   const restaurant = await restaurantJson.json();

//   // get all restaurant reviews
//   const reviewJson = await fetch(`http://localhost:3000/api/reviews?id=${id}`);
//   const reviews = await reviewJson.json();

//   // get all reviewers for each review
//   const getReviewers = async () => {
//     const reviewers = await Promise.all(
//       reviews.map(async (review) => {
//         const reviewer = await fetch(
//           `http://localhost:3000/api/getReviewer?id=${review.reviewer.toJSON().$id.toString()}`
//         );
//         const reviewerJson = await reviewer.json();
//         return reviewerJson;
//       })
//     );
//     return reviewers;
//   };

//   return {
//     props: {
//       restaurant: restaurant,
//       reviews: reviews,
//       reviewers: await getReviewers(),
//     },
//   };
// };

// const RestaurantsPage = ({ restaurant, reviews, reviewers }) => {
//   const { title, tags, address, description, image, phone, email, website, rating, budget, currency, opened } = restaurant;

//   reviews.map((review) => {
//     review.reviewer = reviewers.find((reviewer) => reviewer._id === review.reviewer.toJSON().$id.toString());
//     return review;
//   });

//   return (
//     <div>
//       <RestaurantsHero image={image}
//         title={title}
//         description={description}
//         address={address}
//         phone={phone}
//         email={email}
//         website={website}
//         tags={tags}
//         rating={rating}
//         avgBudget={budget}
//         currency={currency}
//         opened={opened}
//       />
//       <CommuneInfoSection />
//       <div className="py-[3rem]">
//         <h1 className="text-white text-5xl text-center">Reviews</h1>
//       </div>
//       {reviews.map((review) => (
//         <RestaurantReviews key={review.id} reviews={review}>
//           <p>{review.review}</p>
//         </RestaurantReviews>
//       ))}
//       <WriteReview user={currrentUser} />
//     </div>
//   );
// };

// export default RestaurantsPage;


// Development
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();

  return {
    paths: json.map(user => ({
      params: { slug: user.id.toString(), id: user.id.toString() },
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
      placeholder: json,
    },
  };
};

const RestaurantsPage = ({ placeholder }) => {
  const title = `Shiro Restaurant`;
  const orgImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  const tags = ["Japanese", "Styled", "Restaurant"];
  const { name } = placeholder;
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
      <RestaurantsHero image={orgImage}
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
