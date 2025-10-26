import axios from "axios";

// Use Vite env variable instead of process.env
// Make sure you have a .env file in your project root with:
// VITE_API_URL=http://localhost:5000/api
const API_URL = import.meta.env.VITE_API_URL || "https://trutor-link.onrender.com/api";

// Function to get token from localStorage
const getToken = () => localStorage.getItem("token");

// Create Axios instance
export const api = axios.create({
  baseURL: API_URL,
});

// Add Authorization header if token exists
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
