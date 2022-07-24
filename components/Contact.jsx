import React, { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    };
    xhr.send(data);
  };

  return (
    <div className="max-w-[1240px] m-auto p-4">
      <h1 className="text-2xl font-bold text-center p-4">
        Let's work together
      </h1>
      <form className="max-w[600px] m-auto" action="" method="post">
        <div className="grid  grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          cols="30"
          rows="10"
          placeholder="Message"
        //   color="black"
        ></textarea>
        <button
          className="border shadow-lg p-3 w-full"
          type="submit"
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>
      {success && (
        <p className="text-center text-green-500">Message sent successfully</p>
      )}
    </div>
  );
};

export default Contact;
