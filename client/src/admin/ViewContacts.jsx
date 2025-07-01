import React, { useEffect, useState } from "react";
import axios from "../api/axios";

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("/contact").then((res) => setContacts(res.data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Contact Submissions</h2>
      <ul className="space-y-4">
        {contacts.map((c) => (
          <li key={c._id} className="border border-gray-300 rounded p-4 hover:shadow-md transition">
            <p><strong>{c.fullName}</strong> <span className="text-gray-500">({c.email})</span></p>
            <p className="text-sm text-gray-600">📍 {c.city} | 📱 {c.mobile}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewContacts;
