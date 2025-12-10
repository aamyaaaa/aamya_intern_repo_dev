// issue_20/my-react-app/src/UseEffectDemo.jsx
import React, { useEffect, useRef, useState } from "react";

function UseEffectDemo() {
  const [data, setData] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchControllerRef = useRef(null);

  // Logs when the component mounts and unmounts
  useEffect(() => {
    console.log("UseEffectDemo mounted");

    return () => {
      console.log("UseEffectDemo unmounted");
      if (fetchControllerRef.current) {
        fetchControllerRef.current.abort();
      }
    };
  }, []);

  // Fetch data when triggered by button click
  useEffect(() => {
    if (!shouldFetch) return;

    const controller = new AbortController();
    fetchControllerRef.current = controller;

    setIsLoading(true);
    setError(null);

    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
        setShouldFetch(false);
        fetchControllerRef.current = null;
      });

    return () => {
      controller.abort();
    };
  }, [shouldFetch]);

  function handleFetchClick() {
    setShouldFetch(true);
  }

  return (
    <div
      style={{
        border: "1px solid #30363d",
        padding: "1.5rem",
        marginTop: "1rem",
        borderRadius: "8px",
        background: "#1a1b26",
        color: "white",
        width: "450px",
      }}
    >
      <h2>useEffect Demo Component</h2>
      <p>
        This component logs when it mounts/unmounts and fetches data when you
        click the button.
      </p>

      <button
        onClick={handleFetchClick}
        disabled={isLoading}
        style={{
          color: "#fff",
          background: "#2563eb",
          border: "none",
          padding: "10px 18px",
          borderRadius: "6px",
          marginTop: "12px",
          cursor: isLoading ? "not-allowed" : "pointer",
          fontSize: "14px",
        }}
      >
        {isLoading ? "Fetching..." : "Fetch Post"}
      </button>

      {error && (
        <p style={{ color: "#f87171", marginTop: "0.8rem" }}>
          ❌ Error: {error}
        </p>
      )}

      {data && (
        <div style={{ marginTop: "1.5rem" }}>
          <h3 style={{ color: "#38bdf8" }}>Fetched Post</h3>
          <p>
            <strong>Title:</strong> {data.title}
          </p>
          <p>
            <strong>Body:</strong> {data.body}
          </p>
        </div>
      )}
    </div>
  );
}

export default UseEffectDemo;