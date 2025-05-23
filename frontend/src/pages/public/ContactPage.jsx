import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../../authentication/AuthContext";
import { Link } from "react-router-dom";
import useApiRequest from "../../hooks/apiRequest";

// Hero background image
const heroImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

const ContactPage = () => {
  const { currentUser, loading } = useAuth(); // Added loading from AuthContext
  const [formData, setFormData] = useState({
    name: "",
    email: currentUser?.email || "",
    purpose: "General Inquiry",
    message: "",
  });
  const [formError, setFormError] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Update email when currentUser changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, email: currentUser?.email || "" }));
  }, [currentUser]);

  // Debug currentUser and isSubmitting
  useEffect(() => {
    console.log("ContactPage: currentUser =", currentUser);
    console.log("ContactPage: isSubmitting =", isSubmitting);
  }, [currentUser, isSubmitting]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError("");
    setError("");
  };

  const validateForm = () => {
    if (!currentUser) return "Please log in to send a message.";
    if (!formData.name.trim()) return "Name is required.";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      return "Valid email is required.";
    if (!formData.message.trim()) return "Message is required.";
    return "";
  };

  const { apiRequest, loading: apiLoading } = useApiRequest();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setFormError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError("");
    setFormError("");

    try {
      await apiRequest("POST", "/contact", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log("Contact form submitted successfully");
      setFormData({
        name: "",
        email: currentUser?.email || "",
        purpose: "General Inquiry",
        message: "",
      });
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 4000);
    } catch (err) {
      console.error(
        "Contact form submission error:",
        err.response?.data || err.message
      );
      setError(
        err.response?.data?.error || "Failed to send message. Please try again."
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
    <div className="bg-primary-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <FaEnvelope size={60} className="mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto drop-shadow">
            Connect with AgroSphere for demos, support, or partnerships. We're
            here to help!
          </p>
        </div>
      </motion.section>

      {/* Contact Form and Info */}
      <section className="container mx-auto py-16 px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto lg:mx-0">
              <h2 className="text-2xl font-semibold text-primary-700 mb-6">
                Send a Message
              </h2>
              {(error || formError) && (
                <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-md text-sm">
                  {error || formError}
                </div>
              )}
              {!currentUser && (
                <div className="mb-4 p-3 bg-yellow-50 text-yellow-700 rounded-md text-sm">
                  Please{" "}
                  <Link to="/login" className="underline text-primary-600">
                    log in
                  </Link>{" "}
                  to send a message.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!!currentUser}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    required
                    aria-required="true"
                    aria-disabled={!!currentUser}
                  />
                </div>
                <div>
                  <label
                    htmlFor="purpose"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Purpose
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option>General Inquiry</option>
                    <option>Demo Request</option>
                    <option>Support</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    required
                    aria-required="true"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !currentUser}
                  className="w-full flex justify-center py-2 px-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-transform duration-300 pointer-events-auto hover:scale-105"
                  aria-disabled={isSubmitting || !currentUser}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info and Call to Action */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center">
                  <FaEnvelope className="text-primary-600 mr-2" />
                  support@agrosphere.com
                </p>
                <p className="flex items-center">
                  <FaPhone className="text-primary-600 mr-2" />
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center">
                  <FaMapMarkerAlt className="text-primary-600 mr-2" />
                  123 Green Fields, Agri City, USA
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mt-12"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold text-primary-700 text-center mb-6">
            Our Location
          </h2>
          <div className="bg-gray-200 h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d-122.4194156846812!3d37.77492977975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f1e3e9b7b%3A0xafee6e34e4e4c3d!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1697654321098!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AgroSphere Location"
            ></iframe>
          </div>
        </motion.div>
      </section>

      {/* Success Popup */}
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
              Message Sent!
            </h3>
            <p className="text-gray-600">
              We'll get back to you soon. Thank you!
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactPage;
