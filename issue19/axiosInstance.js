// src/api/axiosInstance.js
import axios from "axios";

// TODO: change this to your real API base URL later.
// For now, we can use a placeholder:
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const createRequestId = () =>
  `${Date.now()}-${Math.random().toString(16).slice(2)}`;

// Create the Axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    Accept: "*/*",
  },
});

// Request interceptor: add token + dynamic request ID
axiosInstance.interceptors.request.use(
  (config) => {
    // Get auth token from localStorage (if present)
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken"); // <-- change key if needed

      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    // Add X-Request-Id
    config.headers = config.headers || {};
    if (!config.headers["X-Request-Id"]) {
      config.headers["X-Request-Id"] = createRequestId();
    }

    return config;
  },
  (error) => {
    console.error("Axios request config error:", error);
    return Promise.reject(error);
  }
);

// Helper for AbortController
export const createRequestController = () => new AbortController();

export default axiosInstance;
