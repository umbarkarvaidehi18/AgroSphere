const express = require("express");
const router = express.Router();
const { submitContact } = require("../controllers/contactController");
const authMiddleware = require("../middleware/authMiddleware"); // Assuming you have this

router.post("/", authMiddleware, submitContact);

module.exports = router;
