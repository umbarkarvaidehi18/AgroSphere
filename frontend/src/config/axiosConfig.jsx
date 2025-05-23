import axios from "axios";

// Base URL will be automatically picked based on the environment
const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Localhost URL in development
  // Production URL
  withCredentials: true, // If your backend needs cookies or authorization headers
});

export default instance;
