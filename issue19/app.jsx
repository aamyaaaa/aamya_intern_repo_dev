import { useState } from "react";
import { testPost } from "./api/testApi";

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleClick = async () => {
    setLoading(true);
    setErrorMsg("");
    setResult(null);

    try {
      const data = await testPost("Hello Axios", "This is a test post");
      setResult(data);
    } catch (err) {
      setErrorMsg("Something went wrong – check console");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Axios Test</h1>
      <button onClick={handleClick} disabled={loading}>
        {loading ? "Sending..." : "Send Test POST"}
      </button>

      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

      {result && (
        <pre
          style={{
            marginTop: "1rem",
            background: "#f4f4f4",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
