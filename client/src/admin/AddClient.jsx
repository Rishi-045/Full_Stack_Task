import React, { useState } from "react";
import axios from "../api/axios";

const AddClient = () => {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", form.name);
    data.append("designation", form.designation);
    data.append("description", form.description);
    data.append("image", imageFile);

    try {
      await axios.post("/clients", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Client added!");
      setForm({ name: "", designation: "", description: "" });
      setImageFile(null);
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow rounded-xl p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-center">Add Client</h2>
      <input
        name="name"
        placeholder="Client Name"
        onChange={handleChange}
        value={form.name}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="designation"
        placeholder="Designation"
        onChange={handleChange}
        value={form.designation}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Feedback"
        onChange={handleChange}
        value={form.description}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full p-2 border rounded"
        required
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Client</button>
    </form>
  );
};

export default AddClient;
