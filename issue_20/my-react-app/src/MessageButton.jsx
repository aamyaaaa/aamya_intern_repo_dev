// src/MessageButton.jsx
import React, { useState } from "react";

function MessageButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Focus Bear Test Component</h1>
      <p data-testid="message">
        You have clicked the button {count} {count === 1 ? "time" : "times"}.
      </p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default MessageButton;
