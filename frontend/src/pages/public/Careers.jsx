import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApiRequest from "../../hooks/apiRequest";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaCode,
  FaSeedling,
  FaPaintBrush,
  FaGlobe,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../../authentication/AuthContext"; // Your AuthContext

// Placeholder image for hero
const heroImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

const Careers = () => {
  const { currentUser } = useAuth(); // Use currentUser from your AuthContext
  const [showModal, setShowModal] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [appliedRoles, setAppliedRoles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    coverLetter: "",
  });
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");

  const { apiRequest } = useApiRequest();
  useEffect(() => {
    document.title = "Careers - AgroSphere";
    if (currentUser?.email) {
      const fetchAppliedRoles = async () => {
        try {
          const response = await apiRequest(
            "GET",
            "/careers/applications",
            null,
            {
              params: { email: currentUser.email },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          setAppliedRoles(response.appliedRoles);
        } catch (err) {
          console.error("Error fetching applied roles:", err);
          setError("Failed to load application status. Please try again.");
        }
      };
      fetchAppliedRoles();
    }
  }, [currentUser]);

  const roles = [
    {
      name: "AI & Machine Learning",
      icon: FaCode,
      image:
        "https://images.unsplash.com/photo-1516321318423-8a03f4b2e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Agri-Science",
      icon: FaSeedling,
      image:
        "https://images.unsplash.com/photo-1592982537447-6f34b2ebde0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "UX Design",
      icon: FaPaintBrush,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Field Operations",
      icon: FaGlobe,
      image:
        "https://images.unsplash.com/photo-1500595046743-ff614d63071a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

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

  const handleApplyClick = (role) => {
    if (!currentUser) {
      alert("Please log in to apply.");
      return;
    }
    setSelectedRole(role);
    setShowModal(true);
    setError("");
    setFormError("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setFormError("Please upload a PDF file.");
        setResume(null);
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setFormError("File size must be less than 5MB.");
        setResume(null);
        return;
      }
      setFormError("");
      setResume(file);
    }
  };

  const { loading: apiLoading } = useApiRequest();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    if (!formData.name.trim()) {
      setFormError("Full name is required.");
      return;
    }
    if (!resume) {
      setFormError("Please upload a resume (PDF).");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setFormError("");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", currentUser.email);
    data.append("coverLetter", formData.coverLetter);
    data.append("role", selectedRole);
    data.append("resume", resume);

    try {
      await apiRequest("POST", "/careers/apply", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setAppliedRoles([...appliedRoles, selectedRole]);
      setFormData({ name: "", coverLetter: "" });
      setResume(null);
      setShowModal(false);
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 4000);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Failed to submit application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-primary-50">
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
          <FaLeaf size={60} className="mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Join Our Mission
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto drop-shadow">
            Be part of AgroSphere’s journey to transform global food systems
            with innovation and sustainability.
          </p>
          <Link
            to="/apply"
            className="mt-6 inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transform hover:scale-105 transition-transform duration-300"
          >
            Explore Careers
          </Link>
        </div>
      </motion.section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Remote-First, Climate-Positive Culture
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto mb-8"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            At AgroSphere, we foster a remote-first environment, prioritizing
            climate-positive solutions and global collaboration.
          </motion.p>
          <img
            src="https://images.unsplash.com/photo-1516321318423-8a03f4b2e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Team Collaboration"
            className="w-full max-w-3xl mx-auto h-64 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Open Roles
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {roles.map((role, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
                variants={itemVariants}
              >
                <img
                  src={role.image}
                  alt={role.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <role.icon
                  className="text-primary-600 mx-auto mb-4"
                  size={40}
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {role.name}
                </h3>
                <button
                  onClick={() => handleApplyClick(role.name)}
                  disabled={appliedRoles.includes(role.name)}
                  className={`inline-flex items-center px-6 py-2 font-semibold rounded-full transition-colors duration-300 ${
                    appliedRoles.includes(role.name)
                      ? "bg-gray-500 text-white cursor-not-allowed"
                      : "bg-primary-600 text-white hover:bg-primary-700"
                  }`}
                >
                  {appliedRoles.includes(role.name) ? "Applied" : "Apply Now"}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Internship & Fellowship */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Internship & Fellowship Programs
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto mb-8"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Launch your career with AgroSphere’s programs in AI, agriculture,
            and sustainability. Gain hands-on experience with global impact.
          </motion.p>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <button
              onClick={() => handleApplyClick("Internship/Fellowship")}
              disabled={appliedRoles.includes("Internship/Fellowship")}
              className={`inline-flex items-center px-8 py-4 font-semibold rounded-full transition-colors duration-300 ${
                appliedRoles.includes("Internship/Fellowship")
                  ? "bg-gray-500 text-white cursor-not-allowed"
                  : "bg-primary-600 text-white hover:bg-primary-700"
              }`}
            >
              {appliedRoles.includes("Internship/Fellowship")
                ? "Applied"
                : "Apply Now"}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Application Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              aria-label="Close application form"
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Apply for {selectedRole}
            </h2>
            {(error || formError) && (
              <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-md text-sm">
                {error || formError}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={currentUser.email}
                  disabled
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                  aria-disabled="true"
                />
              </div>
              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-gray-700"
                >
                  Resume (PDF, max 5MB)
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept="application/pdf"
                  required
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary-100 file:text-primary-700 hover:file:bg-primary-200"
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cover Letter (Optional)
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows="4"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-transform duration-300"
                aria-disabled={isSubmitting}
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
                    Submitting...
                  </span>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}

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
              Successfully Applied!
            </h3>
            <p className="text-gray-600">
              Your application for {selectedRole} has been submitted.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Careers;
