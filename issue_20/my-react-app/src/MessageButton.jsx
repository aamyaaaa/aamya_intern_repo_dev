// src/MessageButton.jsx
import React, { useState } from "react";

// Small, focused function: generates the message text based on count
function getClickMessage(count) {
  const timesLabel = count === 1 ? "time" : "times";
  return `You have clicked the button ${count} ${timesLabel}.`;
}

function MessageButton() {
  const [count, setCount] = useState(0);

  // Small, focused function: updates the count
  function handleButtonClick() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <div>
      <h1>Focus Bear Test Component</h1>
      <p data-testid="message">
        {getClickMessage(count)}
      </p>
      <button onClick={handleButtonClick}>
        Click me
      </button>
    </div>
  );
}

export default MessageButton;