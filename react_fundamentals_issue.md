## Working With Lists in React – Reflection

When working with lists in React, there are a few common issues developers often face:

### 1. **Forgetting the `key` prop**
React needs a unique `key` for each list item to track updates efficiently.  
Using the index works for very simple lists, but using unique IDs is better for real apps.

### 2. **Accidentally mutating the original list**
Modifying arrays directly (e.g., using `push`) can cause bugs.  
Instead, React requires immutable updates, like:
js
setItems([...items, newItem])
