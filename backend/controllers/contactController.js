const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
  try {
    const { name, email, purpose, message } = req.body;

    if (!name || !email || !purpose || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const validPurposes = [
      "General Inquiry",
      "Demo Request",
      "Support",
      "Partnership",
    ];
    if (!validPurposes.includes(purpose)) {
      return res.status(400).json({ error: "Invalid purpose" });
    }

    const contact = new Contact({
      name,
      email,
      purpose,
      message,
    });

    await contact.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error submitting contact message:", error);
    res.status(500).json({ error: "Server error" });
  }
};
