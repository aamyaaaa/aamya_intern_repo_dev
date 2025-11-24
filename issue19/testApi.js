// src/api/testApi.js
import axiosInstance, { createRequestController } from "./axiosInstance";

// Example parameters for a POST
export const testPost = async (title, body) => {
  const controller = createRequestController();

  try {
    const response = await axiosInstance.post(
      "/posts", // with our baseURL this becomes: https://jsonplaceholder.typicode.com/posts
      {
        title,
        body,
        userId: 1,
      },
      {
        signal: controller.signal, // enables cancellation
        // timeout: 5000, // optional per-request override
      }
    );

    // Example "redirect" logic you might use with a real backend
    if (response.status === 201) {
      // pretend the API told us to go somewhere
      // window.location.href = "/success"; // you can enable this later if you want
    }

    return response.data;
  } catch (error) {
    if (error.name === "CanceledError" || error.code === "ERR_CANCELED") {
      console.warn("Request was cancelled");
      return;
    }

    if (error.code === "ECONNABORTED") {
      console.error("Request timed out:", error.message);
      return;
    }

    if (error.response) {
      console.error(
        "API error:",
        error.response.status,
        error.response.data
      );
    } else {
      console.error("Network error:", error.message);
    }

    throw error;
  }
};
