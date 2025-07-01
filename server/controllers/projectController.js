import Project from "../models/Project.js";

// @desc    Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create a new project
export const createProject = async (req, res) => {
  const { name, description, image } = req.body;
  try {
    const newProject = new Project({ name, description, image });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
