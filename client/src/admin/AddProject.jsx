import React, { useState } from "react";
import axios from "../api/axios";

const AddProject = () => {
  const [form, setForm] = useState({ name: "", description: "" });
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
    data.append("description", form.description);
    data.append("image", imageFile);

    try {
      await axios.post("/projects", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Project added!");
      setForm({ name: "", description: "" });
      setImageFile(null);
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow rounded-xl p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-center">Add Project</h2>
      <input
        name="name"
        placeholder="Project Name"
        onChange={handleChange}
        value={form.name}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Project Description"
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
      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Add Project</button>
    </form>
  );
};

export default AddProject;
