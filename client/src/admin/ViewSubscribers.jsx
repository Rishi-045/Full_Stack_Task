import React, { useEffect, useState } from "react";
import axios from "../api/axios";

const ViewSubscribers = () => {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    axios.get("/subscribe").then((res) => setSubs(res.data));
  }, []);

  return (
    <div className="max-w-lg mx-auto bg-white shadow p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Newsletter Subscribers</h2>
      <ul className="space-y-2">
        {subs.map((s) => (
          <li key={s._id} className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 transition">{s.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewSubscribers;
