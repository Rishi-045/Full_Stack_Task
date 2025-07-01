import Subscriber from "../models/Subscriber.js";

// POST /subscribe
export const createSubscriber = async (req, res) => {
  const { email } = req.body;
  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) return res.status(409).json({ message: "Already subscribed" });

    const subscriber = new Subscriber({ email });
    await subscriber.save();
    res.status(201).json(subscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET /subscribe
export const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
