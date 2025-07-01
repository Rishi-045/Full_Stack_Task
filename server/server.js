import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import subscriberRoutes from "./routes/subscriberRoutes.js";


dotenv.config();

const app = express();
app.use(cors());
// Add this line below app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use(express.json());

app.use("/projects", projectRoutes);  // <-- Mount project routes here
app.use("/clients", clientRoutes);
app.use("/contact", contactRoutes);
app.use("/subscribe", subscriberRoutes);



const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
