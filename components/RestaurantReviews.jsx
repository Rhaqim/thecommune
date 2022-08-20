import React, { useState, useEffect } from "react";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";
import { IoIosThumbsUp, IoIosThumbsDown } from "react-icons/io";

const RestaurantReviews = ({ reviews, children }) => {
  const { user, createdAt, reviewRating, like, dislike, reviewImages } = reviews;
  
  const [rate, setRate] = useState(null);

  const [modal, setModal] = useState(false);

  const [currentRatingImage, setCurrentRatingImage] = useState(0);

  const [likes, setLikes] = useState(like);
  const [dislikes, setDislikes] = useState(dislike);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLikes = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  const handleDislikes = () => {
    if (disliked) {
      setDislikes(dislikes - 1);
      setDisliked(false);
    } else {
      setDislikes(dislikes + 1);
      setDisliked(true);
    }
  };

  const length = reviewImages.length;

  const nextImage = () => {
    setCurrentRatingImage(
      currentRatingImage === length - 1 ? 0 : currentRatingImage + 1
    );
  };

  const prevImage = () => {
    setCurrentRatingImage(
      currentRatingImage === 0 ? length - 1 : currentRatingImage - 1
    );
  };

  const initailDisplay = ({ index }) => {
    setCurrentRatingImage(index);
    setModal(true);
  };

  /*
  close modal by clicking outside of the modal
  */

  const handleClick = e => {
    let target = e.target.contains(e.target) ? e.target : e.target.parentNode;
    if (target.classList.contains("close-modal")) {
      setModal(false);
      return;
    } else {
      return null;
    }
    // if (e.target.classList.contains("modal")) {
    //   setModal(false);
    // }
  };

  useEffect(() => {
    setRate("⭐️".repeat(reviewRating));
  }, [reviewRating]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!Array.isArray(reviewImages)) {
    return null;
  }

  return (
    <>
      <div className="max-w-[1240] mx-auto mb-10">
        <div className="justify-center align-center mx-2 my-2 p-2 bg-gray-600 rounded-xl">
          <div className="bg-black rounded-lg p-3 mb-2">
            <div className="flex justify-between rounded-lg p-2">
              <h1 className="text-lg text-left">{user}</h1>
              <h1 className="text-lg text-center invisible lg:visible">
                RATING: {rate}
              </h1>
              <h1 className="text-sm text-right">{createdAt}</h1>
            </div>
            <div className="bg-gray-600 rounded-md p-3">
              <p className="font-bold underline">Comments...</p>
              <div>{children}</div>
              {/* <h1 className="underline pt-1">Gallery...</h1> */}
              <div className="flex p-1 justify-end">
                {reviewImages.map(
                  (image, index = index.toString() + "aasimge1") => (
                    <div key={index}>
                      {/* <span>close</span> */}
                      <img
                        src={image}
                        alt="rating"
                        className="mx-2 mt-1 cursor-pointer rounded-md"
                        style={{ height: 50, width: 50 }}
                        onMouseEnter={({ target }) => {
                          target.style.transform = "scale(1.2)";
                        }}
                        onMouseLeave={({ target }) => {
                          target.style.transform = "scale(1)";
                        }}
                        onClick={() => initailDisplay({ index })}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="flex justify-between pt-2">
              <h1 className="text-lg text-left visible lg:hidden">
                RATING: {rate}
              </h1>
              <div className="flex px-1">
                <button
                  disabled={disliked ? true : false}
                  className="text-lg text-left mx-2 disabled"
                  size={23}
                  onClick={handleLikes}
                >
                  <IoIosThumbsUp color={liked ? "#00b300" : "#fff"} />
                </button>
                <h1>{likes}</h1>
                <button
                  disabled={liked ? true : false}
                  className="text-lg text-left mx-2 disabled"
                  size={23}
                  onClick={handleDislikes}
                >
                  <IoIosThumbsDown color={disliked ? "#ff0000" : "#fff"} />
                </button>
                <h1>{dislikes}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {modal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 w-full h-full close-modal">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">
                <button
                  className="p-1 ml-auto bg-white border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setModal(false)}
                >
                  <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-double focus:outline-1">
                    &times;
                  </span>
                </button>
                {/*body*/}
                <div className="flex">
                  {reviewImages.map((image, index) => (
                    <div key={index}>
                      <ImArrowLeft2
                        onClick={prevImage}
                        size={40}
                        className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2] hover:bg-black rounded-xl"
                      />
                      {index === currentRatingImage && (
                        <img
                          src={image}
                          alt="rating"
                          draggable="true"
                          className="rounded-t-lg w-[1440] h-[600] object-cover px-2"
                        />
                      )}
                      <ImArrowRight2
                        onClick={nextImage}
                        size={40}
                        className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2] hover:bg-black rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default RestaurantReviews;
