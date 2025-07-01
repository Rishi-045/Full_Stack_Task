import React, { useState } from "react";
import axios from "../api/axios";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/subscribe", { email });
      setMessage("Subscribed successfully!");
      setEmail("");
    } catch (err) {
      if (err.response?.status === 409) {
        setMessage("You're already subscribed.");
      } else {
        setMessage("Something went wrong.");
      }
    }
  };

  return (
    <div className=" bg-white  max-w-xl mx-auto rounded shadow">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 p-2 border-none rounded focus:outline-none placeholder-gray-500 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 "
        >
          Subscribe
        </button>
      </form>
      {message && <p className="text-center mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default NewsletterForm;
