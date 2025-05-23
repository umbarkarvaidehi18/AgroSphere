import React, { useState } from "react";
import useApiRequest from "../../hooks/apiRequest";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { apiRequest, loading } = useApiRequest();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/newsletter/subscribe", { email });
      setSuccess("Thank you for subscribing to our newsletter!");
      setEmail("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to subscribe. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Stay Updated with AgroSphere
      </h2>
      <p className="mt-4 text-lg text-gray-500">
        Subscribe to our newsletter for the latest farming tips, technology
        updates, and exclusive offers.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 sm:flex sm:max-w-md mx-auto"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs"
          aria-required="true"
        />
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            disabled={isSubmitting || loading}
            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-disabled={isSubmitting || loading}
          >
            {isSubmitting || loading ? (
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
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Subscribing...
              </span>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </form>
      {error && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {success && (
        <p className="mt-4 text-sm text-green-600" role="alert">
          {success}
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;
