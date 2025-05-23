import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLeaf, FaCheckCircle, FaTimes } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../../authentication/AuthContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import useApiRequest from "../../hooks/apiRequest";

const heroImage =
  "https://images.unsplash.com/photo-1516594798947-e65505ebb29a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

const Pricing = () => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();
  const [hectares, setHectares] = useState(10);
  const [roi, setRoi] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayPalModal, setShowPayPalModal] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);

  const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID || "";
  console.log("PayPal Client ID:", paypalClientId);

  const plans = [
    {
      name: "Farmer Plan",
      price: "Free",
      amount: 0,
      description: "Perfect for small farms starting with AgroSphere.",
      features: [
        "Up to 3 hectares",
        "Voice AI",
        "Crop Insights",
        "Local Support",
      ],
      planId: "farmer",
    },
    {
      name: "Growth Plan",
      price: "$15",
      amount: 15,
      description: "Advanced tools for growing operations.",
      features: [
        "Full AI Suite",
        "Sensors",
        "Predictive Models",
        "Marketplace Access",
      ],
      planId: "growth",
    },
    {
      name: "Enterprise",
      price: "$50",
      amount: 50,
      description: "Tailored solutions for large-scale farms.",
      features: [
        "Dedicated Onboarding",
        "Hardware Bundles",
        "API Access",
        "Service Level Agreement",
      ],
      planId: "enterprise",
    },
  ];

  useEffect(() => {
    document.title = "Pricing - AgroSphere";
    setRoi((hectares * 120 + 50).toFixed(2));

    if (location.pathname === "/pricing/success") {
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 4000);
      window.history.replaceState(null, "", "/pricing");
    } else if (location.pathname === "/pricing/cancel") {
      setError("Payment cancelled. Please try again.");
      window.history.replaceState(null, "", "/pricing");
    }
  }, [hectares, location]);

  const { apiRequest } = useApiRequest();
  const handleGetStarted = async (plan) => {
    if (!currentUser) {
      setError("Please log in to select a plan.");
      return;
    }
    setSelectedPlan(plan);
    setError("");
    setIsSubmitting(true);
    if (plan.planId === "farmer") {
      handleFreePlan();
    } else {
      try {
        const token = localStorage.getItem("token");
        console.log("Token for create-payment:", token);
        if (!token) {
          throw new Error("No authentication token found");
        }
        const response = await apiRequest(
          "POST",
          "/payments/create-payment",
          {
            name: plan.name,
            amount: plan.amount,
            planId: plan.planId,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("Create payment response:", response);
        setSelectedPlan({
          ...plan,
          paypalOrderId: response.paypalOrderId,
        });
        if (paypalClientId) {
          setShowPayPalModal(true);
        } else {
          setError("PayPal configuration error. Please contact support.");
        }
      } catch (err) {
        console.error(
          "Payment creation error:",
          err.response?.data || err.message
        );
        setError(
          err.response?.data?.error ||
            "Failed to initialize payment. Please contact support."
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleFreePlan = async () => {
    setIsSubmitting(true);
    setError("");
    try {
      const token = localStorage.getItem("token");
      console.log("Token for assign-free:", token);
      if (!token) {
        throw new Error("No authentication token found");
      }
      await apiRequest(
        "POST",
        "/payments/assign-free",
        { planId: "farmer" },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCurrentPlan("farmer");
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 4000);
    } catch (err) {
      console.error(
        "Free plan assignment error:",
        err.response?.data || err.message
      );
      setError(
        err.response?.data?.error || "Failed to assign plan. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-primary-50 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-50">
      <motion.section
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <FaLeaf size={60} className="mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Pricing Plans for Every Farmer
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto drop-shadow">
            Choose a plan that fits your farm’s needs, from free to
            enterprise-grade solutions.
          </p>
        </div>
      </motion.section>

      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Our Plans
          </motion.h2>
          {error && (
            <div className="mb-8 p-3 bg-red-50 text-red-500 rounded-md text-sm text-center max-w-lg mx-auto">
              {error}
            </div>
          )}
          {!currentUser && (
            <div className="mb-8 p-3 bg-yellow-50 text-yellow-700 rounded-md text-sm text-center max-w-lg mx-auto">
              Please{" "}
              <Link to="/auth/login" className="underline text-primary-600">
                log in
              </Link>{" "}
              to select a plan.
            </div>
          )}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300 border-t-4 border-primary-600"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold text-primary-600 mb-4">
                  {plan.price}
                </p>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="text-gray-600 mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <FaCheckCircle className="text-primary-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {currentPlan === plan.planId ? (
                  <div className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full">
                    Active Plan
                  </div>
                ) : (
                  <button
                    onClick={() => handleGetStarted(plan)}
                    disabled={isSubmitting || !currentUser}
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-transform duration-300 pointer-events-auto hover:scale-105"
                    aria-disabled={isSubmitting || !currentUser}
                  >
                    Get Started
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {showPayPalModal && selectedPlan && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setShowPayPalModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              aria-label="Close payment modal"
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Pay for {selectedPlan.name}
            </h2>
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-md text-sm">
                {error}
              </div>
            )}
            <p className="text-gray-600 mb-4">
              Pay {selectedPlan.price} for {selectedPlan.name}.
            </p>
            {paypalClientId && selectedPlan.paypalOrderId ? (
              <PayPalScriptProvider
                options={{
                  clientId: paypalClientId,
                  components: "buttons",
                  intent: "capture",
                }}
              >
                <PayPalButtons
                  createOrder={(data, actions) => {
                    console.log("Creating PayPal order:", selectedPlan);
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: selectedPlan.amount.toString(),
                            currency_code: "USD",
                          },
                          description: `Payment for AgroSphere ${selectedPlan.name}`,
                        },
                      ],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    try {
                      console.log("PayPal order approved:", data.orderID);
                      await actions.order.capture();
                      const token = localStorage.getItem("token");
                      console.log("Token for confirm:", token);
                      if (!token) {
                        throw new Error("No authentication token found");
                      }
                      const response = await apiRequest(
                        "POST",
                        "/payments/confirm",
                        {
                          orderId: data.orderID,
                          planId: selectedPlan.planId,
                        },
                        {
                          headers: { Authorization: `Bearer ${token}` },
                        }
                      );
                      console.log("Confirm payment response:", response);
                      setCurrentPlan(selectedPlan.planId);
                      setShowPayPalModal(false);
                      setShowSuccessPopup(true);
                      setTimeout(() => setShowSuccessPopup(false), 4000);
                    } catch (err) {
                      console.error(
                        "Payment confirmation error:",
                        JSON.stringify(err.response?.data, null, 2)
                      );
                      setError(
                        err.response?.data?.error ||
                          "Failed to confirm payment. Please try again or contact support."
                      );
                    }
                  }}
                  onError={(err) => {
                    console.error("PayPal Button error:", err);
                    setError("Payment processing failed. Please try again.");
                  }}
                />
              </PayPalScriptProvider>
            ) : (
              <p className="text-red-500">
                PayPal is not configured or payment is not available. Please
                contact support.
              </p>
            )}
          </motion.div>
        </motion.div>
      )}

      {showSuccessPopup && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full text-center relative">
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              aria-label="Close success popup"
            >
              <FaTimes size={20} />
            </button>
            <FaCheckCircle
              className="text-primary-600 mx-auto mb-4"
              size={40}
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Payment Successful!
            </h3>
            <p className="text-gray-600">
              Your {selectedPlan?.name || "plan"} is now active. Thank you!
            </p>
          </div>
        </motion.div>
      )}

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Public & NGO Licenses
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto mb-8"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            We offer discounted and negotiable pricing for public institutions
            and NGOs. Contact us to customize a plan for your organization.
          </motion.p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transform hover:scale-105 transition-transform duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Calculate Your ROI
          </motion.h2>
          <motion.div
            className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <label
              htmlFor="hectares"
              className="block text-sm font-medium text-gray-700 mb-4"
            >
              Number of Hectares
            </label>
            <input
              type="range"
              id="hectares"
              min="1"
              max="100"
              value={hectares}
              onChange={(e) => setHectares(e.target.value)}
              className="w-full h-3 bg-primary-200 rounded-lg appearance-none cursor-pointer focus:outline-none"
            />
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Monitoring{" "}
                <span className="font-bold text-primary-600">{hectares}</span>{" "}
                hectares
              </p>
              <p className="text-3xl font-extrabold text-primary-600 mt-2">
                Estimated ROI: ${roi}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Based on average yield improvements and cost savings.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
