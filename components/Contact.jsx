import React, { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      subject,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setSuccess(true);
    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="max-w-[1240px] m-auto p-4 mb-6">
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
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            className="border shadow-lg p-3"
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
        <textarea
          className="border shadow-lg p-3 w-full text-black"
          cols="30"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
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
