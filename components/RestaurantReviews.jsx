import React, { useState, useEffect } from "react";

const RestaurantReviews = ({ user, date, ratingImages, rating, children }) => {
  const [rate, setRate] = useState(null);
  const [modal, setModal] = useState(false);

  const modalDiv = ({ image }) => {
    return (
      <div
        id="modal"
        class="hidden fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 justify-center items-center"
      >
        <a
          class="fixed z-90 top-6 right-8 text-white text-5xl font-bold"
          href="javascript:void(0)"
          onclick={() => setModal(false)}
        >
          &times;
        </a>
        <img
          id="modal-img"
          class="max-w-[800px] max-h-[600px] object-cover"
          src={image}
        />
      </div>
    );
  };

  useEffect(() => {
    setRate("⭐️".repeat(rating));
  }, [rate]);

  useEffect(() => {
    if (modal) {
      modalDiv({ image: ratingImages[rating - 1] });
    } else {
      setModal(false);
    }
  }, [modal]);

  return (
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
                      onClick={() => setModal(!modal)}
                    />

                    {/* Modal */}
                    {modal && (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
                                {ratingImages.map(
                                  (
                                    image,
                                    index = index.toString() + "aasimge1"
                                  ) => (
                                    <div key={index}>
                                      <img
                                        src={image}
                                        alt="rating"
                                        className="rounded-t-lg w-full h-full object-cover px-2"
                                      />
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                    )}
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
  );
};

export default RestaurantReviews;
