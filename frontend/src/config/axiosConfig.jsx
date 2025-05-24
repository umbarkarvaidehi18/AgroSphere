import axios from "axios";

// Base URL is fetched from the .env file
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Use the environment variable
  withCredentials: true, // If your backend needs cookies or authorization headers
});

export default instance;
