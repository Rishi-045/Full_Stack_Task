import express from "express";
import upload from "../middleware/upload.js"; // 🆕 import multer middleware
import Project from "../models/Project.js"; // ⬅ Make sure this path is correct

const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new project with image
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file?.filename;

    if (!image) return res.status(400).json({ message: "Image upload failed." });

    const project = new Project({ name, description, image });
    await project.save();

    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
