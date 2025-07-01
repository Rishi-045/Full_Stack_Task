import Client from "../models/Client.js";

// GET /clients
export const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /clients
export const createClient = async (req, res) => {
  const { name, designation, description, image } = req.body;
  try {
    const client = new Client({ name, designation, description, image });
    await client.save();
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
