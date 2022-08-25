import React, { useState } from "react";
import { BsCardImage } from "react-icons/bs";

const WriteReview = ({ user, restaurant }) => {
  const { name, avatar, user_id } = user;
  const { _id } = restaurant;
  const restaurant_id = _id;

  const [showModal, setShowModal] = React.useState(false);
  const [spent, setSpent] = useState(0);
  const [images, setImages] = useState([]);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleImageUpload = e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "restaurant-review");
    data.append("cloud_name", "dzqxqxqxq");
    fetch("	https://api.cloudinary.com/v1_1/dzqxqxqxq/image/upload", {
      method: "post",
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        setImages([...images, data.url]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSubmission = async e => {
    e.preventDefault();
    const reviewImages = images
      .map(image => {
        return { image };
      })
      .filter(image => {
        return image.image !== "";
      })
      .map(image => {
        return image.image;
      })
      .join(",");
    try {
      const body = {
        reviewer: user_id,
        review,
        reviewRating: rating,
        spent,
        reviewImages,
        restaurant_id,
      };
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleOnChange = e => {
    setSpent(e.target.value);
  };

  return (
    <>
      {/* Modal Button */}
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-black outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Review
      </button>
      {/* Modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto max-w-3xl w-[800px]">
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg flex flex-col w-full bg-gray-700 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 ">
                  <div className="flex justify-center items-center">
                    <picture>
                      <img
                        src={avatar}
                        className="mx-2 mt-1 cursor-pointer object-cover rounded-full"
                        style={{ height: 60, width: 60 }}
                        onMouseEnter={({ target }) => {
                          target.style.transform = "scale(1.2)";
                        }}
                        onMouseLeave={({ target }) => {
                          target.style.transform = "scale(1)";
                        }}
                        alt="avatar"
                      />
                    </picture>
                    <h3 className="text-3xl font-semibold pl-1">{name}</h3>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form className="flex-1 bg-gray-800 rounded-xl p-6 overflow-y-auto">
                  <div className="relative px-6 flex-auto">
                    <textarea
                      className="w-full p-3 text-white bg-black rounded border border-gray-900 placeholder-gray-100 placeholder:opacity-50 shadow-sm focus:outline-none focus:shadow-outline"
                      cols="30"
                      rows="5"
                      maxLength={500}
                      placeholder="Write your review here..."
                    />
                  </div>
                  {/* Additional Info */}
                  <div>
                    <div className="flex justify-between items-center p-5">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <input
                            type="range"
                            className="w-32"
                            min={0}
                            max={1000000}
                            step={10000}
                            defaultValue={10000}
                            id="spent"
                            name="spent"
                            onChange={handleOnChange}
                          />
                          : <span className="text-white ml-2">{spent}</span>
                          <label className="ml-2 text-white">Spent</label>
                        </div>
                        <div className="flex items-center">
                          {/* Upload Images */}
                          <div className="flex items-center space-x-2">
                            <BsCardImage className="h-5 w-5 text-pink-500" />
                            <input
                              type="file"
                              className="form-file h-5 w-5 text-pink-500"
                              multiple
                              onChange={e => {
                                setImages(e.target.files);
                              }}
                            />
                            {/* Display Images */}
                            <label className="ml-2 text-white">Images: </label>
                            {images.map(image => (
                              <picture key={image.name}>
                                <img
                                  src={URL.createObjectURL(image)}
                                  className="h-5 w-5 text-pink-500"
                                  alt="image"
                                />
                              </picture>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end px-6 ">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Review
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default WriteReview;
