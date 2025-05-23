const mongoose = require("mongoose");

const userSubscriptionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  planId: {
    type: String,
    required: true,
  },
  paypalOrderId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["COMPLETED", "CANCELLED", "PENDING"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserSubscription", userSubscriptionSchema);
