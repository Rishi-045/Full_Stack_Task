import React, { useState } from "react";
import axios from "../api/axios";

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/contact", form);
      setMessage("Submitted successfully!");
      setForm({ fullName: "", email: "", mobile: "", city: "" });
    } catch{
      setMessage("Submission failed. Try again.");
    }
  };

  return (
    <div className="p-6 bg-none  mt-6 max-w-xl mx-auto rounded shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border-none placeholder-white focus:outline-none focus:ring-0 "
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-2 border-none placeholder-white focus:outline-none focus:ring-0 "
          required
        />
        <input
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="w-full p-2 border-none placeholder-white focus:outline-none"
          required
        />
        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="City"
          className="w-full p-2 border-none placeholder-white focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-500 w-full"
        >
          Submit
        </button>
      </form>
      {message && <p className="text-center mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default ContactForm;
