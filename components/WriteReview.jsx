import React from "react";

const WriteReview = ({ user }) => {
  const [showModal, setShowModal] = React.useState(false);
  const { name, avatar } = user;
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
                <div className="relative px-6 flex-auto">
                  <textarea
                    className="w-full p-3 text-white bg-black rounded border border-gray-900 placeholder-gray-100 placeholder:opacity-50 shadow-sm focus:outline-none focus:shadow-outline"
                    cols="30"
                    rows="5"
                    maxLength={500}
                    placeholder="Write your review here..."
                  />
                </div>
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
