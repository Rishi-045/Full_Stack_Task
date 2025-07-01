import express from "express";
import { createSubscriber, getAllSubscribers } from "../controllers/subscriberController.js";

const router = express.Router();

router.post("/", createSubscriber);
router.get("/", getAllSubscribers);

export default router;
