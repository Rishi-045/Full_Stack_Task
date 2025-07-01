import React from "react";
import AddProject from "./AddProject";
import AddClient from "./AddClient";
import ViewContacts from "./ViewContacts";
import ViewSubscribers from "./ViewSubscribers";

const AdminPanel = () => {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto bg-white rounded shadow">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>
      <AddProject />
      <hr />
      <AddClient />
      <hr />
      <ViewContacts />
      <hr />
      <ViewSubscribers />
    </div>
  );
};

export default AdminPanel;
