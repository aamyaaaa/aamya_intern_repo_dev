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

### 3. **Empty or invalid input**

If input isn't validated, you may end up adding blank list items.
Adding checks prevents this and makes the UI cleaner.

### 4. **Poor performance with large lists**

Re-rendering very large lists can slow the app down.
Using techniques like memoization helps — but only when necessary.

### 5. **Removing or updating items incorrectly**

Forgetting proper state updates can lead to inconsistent UI if not handled correctly.
