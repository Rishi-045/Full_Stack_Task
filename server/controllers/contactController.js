import Contact from "../models/Contact.js";

// POST /contact
export const createContact = async (req, res) => {
  const { fullName, email, mobile, city } = req.body;
  try {
    const contact = new Contact({ fullName, email, mobile, city });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET /contact
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
