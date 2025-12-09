# Writing Small, Focused Functions - Issue #30

## Why breaking down functions is beneficial

Breaking a large or “busy” function into smaller, single-purpose functions makes the code:

- Easier to read: each function does one clear thing.
- Easier to test: small functions can be tested in isolation.
- Easier to reuse: logic can be called from other places without copying.
- Easier to change: updates are made in one focused place rather than inside a big block.

It also forces clearer thinking about what each step of the logic is responsible for.

## Before Refactoring (All logic in one component) 

Originally, my `MessageButton` component handled UI, message formatting, and click logic in one place:

```jsx
// src/MessageButton.jsx (before)
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
```

### What was the issue?

- The JSX contained both display and formatting logic:
  - The pluralisation logic (`time` vs `times`) was inline.
- The `onClick` handler had an inline function:
  - State update logic was not clearly named.
- The component mixed:
  - UI structure
  - Message formatting
  - Interaction behavior

It still worked, but it was less clear and harder to reuse or test parts of the logic.

## After Refactoring – Small, Focused Functions

I refactored the component by extracting the message formatting and click handler into separate functions.

```jsx
// src/MessageButton.jsx (after)
import React, { useState } from "react";

// Generates the message shown to the user based on the current count
function getClickMessage(count) {
  const timesLabel = count === 1 ? "time" : "times";
  return `You have clicked the button ${count} ${timesLabel}.`;
}

function MessageButton() {
  const [count, setCount] = useState(0);

  // Handles the button click and updates the state
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
```


## How refactoring improved the structure of the code

Breaking the component into small functions improved the structure in several ways:

- `getClickMessage(count)`:
  - Has a single responsibility: build the correct message string.
  - Can be reused or tested independently without rendering the component.
- `handleButtonClick()`:
  - Has a single responsibility: update the state when the button is clicked.
  - Uses a functional state update for clarity and correctness.

The `MessageButton` component itself now reads like a simple description:

1. Get the current `count`.
2. Generate the message from `getClickMessage(count)`.
3. Render a button that calls `handleButtonClick` when clicked.

This makes the code:

- Easier to understand at a glance.
- Easier to change (for example, if the message text changes later).
- Easier to test the non-UI logic separately.


## Summary

Breaking down functions in this example:

- Reduced the amount of logic directly inside JSX.
- Clearly separated “what to show” (message) from “how it changes” (click handler).
- Made the component more maintainable and more aligned with clean code practices.

These changes have been committed and pushed as part of the work for Issue #30.