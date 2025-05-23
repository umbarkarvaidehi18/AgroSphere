import axios from "../config/axiosConfig";
import { useState } from "react";

/**
 * Generic loader function to make API requests.
 * @param {string} method - The HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param {string} path - The API path (endpoint) to send the request to
 * @param {Object|null} data - The data to be sent (for POST/PUT requests)
 * @param {Object} config - Additional Axios config (e.g., headers, params)
 * @returns {Promise} - A promise resolving to the response data or error
 */
const useApiRequest = () => {
  const [loading, setLoading] = useState(false);

  const apiRequest = async (method, path, data = null, config = {}) => {
    try {
      setLoading(true); // Start loading when the request starts
      const response = await axios({
        method: method,
        url: path, // Path will be relative to the base URL
        data: method === "POST" || method === "PUT" ? data : null, // Pass data for POST/PUT
        ...config, // Spread config for headers, params, etc.
      });

      setLoading(false); // Stop loading after the request finishes
      return response.data;
    } catch (error) {
      setLoading(false); // Stop loading in case of an error
      console.error(`Error during ${method} request to ${path}:`, error);
      throw error;
    }
  };

  return { apiRequest, loading };
};

export default useApiRequest;
