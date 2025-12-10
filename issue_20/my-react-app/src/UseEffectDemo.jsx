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
      // Cleanup: abort any in-flight fetch when the component unmounts
      if (fetchControllerRef.current) {
        fetchControllerRef.current.abort();
      }
    };
  }, []);

  // Runs when we decide we want to fetch data
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
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        // Ignore abort errors (they happen when we cancel the request)
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
        setShouldFetch(false);
        fetchControllerRef.current = null;
      });

    // Cleanup if shouldFetch changes again before this completes
    return () => {
      controller.abort();
    };
  }, [shouldFetch]);

  function handleFetchClick() {
    setShouldFetch(true);
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}>
      <h2>useEffect Demo Component</h2>
      <p>
        This component logs when it mounts/unmounts and fetches data when you
        click the button.
      </p>

      <button onClick={handleFetchClick} disabled={isLoading}>
        {isLoading ? "Fetching..." : "Fetch Post"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "0.5rem" }}>
          Error: {error}
        </p>
      )}

      {data && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Fetched Post</h3>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Body:</strong> {data.body}</p>
        </div>
      )}
    </div>
  );
}

export default UseEffectDemo;