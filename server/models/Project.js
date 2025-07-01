import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // can store URL or filename
}, {
  timestamps: true,
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
