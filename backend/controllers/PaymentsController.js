const axios = require("axios");
const User = require("../models/User");
const UserSubscription = require("../models/UserSubscription");

const getPayPalAccessToken = async () => {
  try {
    const auth = Buffer.from(
      `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
    ).toString("base64");
    const response = await axios.post(
      `${process.env.PAYPAL_API_URL}/v1/oauth2/token`,
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting PayPal access token:", error.response?.data);
    throw new Error("Failed to obtain PayPal access token");
  }
};

exports.assignFreePlan = async (req, res) => {
  try {
    const { planId } = req.body;
    if (planId !== "farmer") {
      return res.status(400).json({ error: "Invalid plan ID" });
    }

    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.plan = planId;
    await user.save();

    res.status(200).json({ message: "Free plan assigned successfully" });
  } catch (error) {
    console.error("Error assigning free plan:", error);
    res.status(500).json({ error: "Failed to assign plan" });
  }
};

exports.createPayment = async (req, res) => {
  try {
    const { name, amount, planId } = req.body;
    if (!name || !amount || !planId) {
      return res
        .status(400)
        .json({ error: "Name, amount, and planId required" });
    }

    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const accessToken = await getPayPalAccessToken();
    const response = await axios.post(
      `${process.env.PAYPAL_API_URL}/v2/checkout/orders`,
      {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: amount.toString(),
            },
            description: `Payment for AgroSphere ${name}`,
          },
        ],
        application_context: {
          return_url: "http://localhost:5173/pricing/success",
          cancel_url: "http://localhost:5173/pricing/cancel",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(201).json({ paypalOrderId: response.data.id });
  } catch (error) {
    console.error("Error creating PayPal payment:", error.response?.data);
    res.status(500).json({
      error: "Failed to create payment. Please contact support.",
    });
  }
};

exports.confirmPayment = async (req, res) => {
  try {
    console.log("Confirm payment called, user:", req.user);
    const { orderId, planId } = req.body;
    if (!orderId || !planId) {
      return res.status(400).json({ error: "Order ID and plan ID required" });
    }

    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const subscription = new UserSubscription({
      userId: user._id,
      planId,
      paypalOrderId: orderId,
      status: "COMPLETED",
    });
    await subscription.save();

    user.plan = planId;
    await user.save();

    res.status(200).json({ message: "Payment confirmed" });
  } catch (error) {
    console.error("Error confirming payment:", error);
    res.status(500).json({ error: "Failed to confirm payment" });
  }
};
