import express from "express";
import upload from "../middleware/upload.js"; // 🆕 import multer middleware
import Client from "../models/Client.js"; // ⬅ Make sure this path is correct

const router = express.Router();


// GET all clients
router.get("/", async (req, res) => {
  try {

    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new client with image
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, designation, description } = req.body;
    const image = req.file?.filename;

    if (!image) return res.status(400).json({ message: "Image upload failed." });

    const client = new Client({ name, designation, description, image });
    await client.save();

    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
