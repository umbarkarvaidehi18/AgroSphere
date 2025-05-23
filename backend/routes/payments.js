const express = require("express");
const router = express.Router();
const {
  assignFreePlan,
  createPayment,
  confirmPayment,
} = require("../controllers/PaymentsController");
const authMiddleware = require("../middleware/authMiddleware");

console.log("Payment routes loaded");

router.post("/assign-free", authMiddleware, assignFreePlan);
router.post("/create-payment", authMiddleware, createPayment);
router.post("/confirm", authMiddleware, confirmPayment);

module.exports = router;
