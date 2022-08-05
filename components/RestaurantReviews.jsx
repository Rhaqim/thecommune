import React, { useState, useEffect } from "react";

const RestaurantReviews = ({ user, date, ratingImages, rating, children }) => {
  const [rate, setRate] = useState(null);
  const [modal, setModal] = useState(false);
  const [currentRatingImage, setCurrentRatingImage] = useState(0);

  const length = ratingImages.length;

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
    } else {
      setModal(true);
      return;
    }
  };

  
  if (!Array.isArray(ratingImages)) {
    return null;
  }
  
  useEffect(() => {
    setRate("⭐️".repeat(rating));
  }, [rate]);
  
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  
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
              <h1 className="text-sm text-right">{date}</h1>
            </div>
            <div className="bg-gray-600 rounded-md p-3">
              <p className="font-bold underline">Thoughts...</p>
              <div>{children}</div>
              <h1 className="underline pt-1">Gallery...</h1>
              <div className="flex p-1 justify-end">
                {ratingImages.map(
                  (image, index = index.toString() + "aasimge1") => (
                    <div key={index}>
                      {/* <span>close</span> */}
                      <img
                        src={image}
                        alt="rating"
                        className="mx-2 mt-1 cursor-pointer"
                        style={{ height: 50, width: 50 }}
                        onClick={() => initailDisplay({ index })}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            <h1 className="text-lg text-left pt-2 visible lg:hidden">
              RATING: {rate}
            </h1>
          </div>
        </div>
      </div>
      {/* Modal */}
      {modal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modal-content">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none close-modal">
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
                  {ratingImages.map((image, index) => (
                    <div key={index}>
                      <button
                        onClick={prevImage}
                        className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                      >
                        Back
                      </button>
                      {index === currentRatingImage && (
                        <img
                          src={image}
                          alt="rating"
                          className="rounded-t-lg w-[1440] h-[600] object-cover px-2 close-modal"
                        />
                      )}
                      <button
                        onClick={nextImage}
                        className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                      >
                        Front
                      </button>
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
