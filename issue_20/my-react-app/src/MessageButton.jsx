// src/MessageButton.jsx
import React, { useState } from "react";

// Generates the message shown to the user based on the current count
function getClickMessage(count) {
  const label = count === 1 ? "time" : "times";
  return `You have clicked the button ${count} ${label}.`;
}

function MessageButton() {
  const [count, setCount] = useState(0);

  // Handles button clicks
  function handleButtonClick() {
    setCount(prev => prev + 1);
  }

  return (
    <div>
      <h1>Focus Bear PR Learning Component</h1>
      <p data-testid="message">{getClickMessage(count)}</p>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default MessageButton;