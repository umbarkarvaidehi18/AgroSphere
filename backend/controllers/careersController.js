const Application = require("../models/Application");

exports.submitApplication = async (req, res) => {
  try {
    const { name, email, role, coverLetter } = req.body;
    const resume = req.file;

    if (!name || !email || !role || !resume) {
      return res
        .status(400)
        .json({ error: "All required fields must be provided" });
    }

    const application = new Application({
      name,
      email,
      role,
      coverLetter,
      resumePath: resume.path,
    });

    await application.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ error: "Server error" });
  }
};
