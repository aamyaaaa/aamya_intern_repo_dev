## Commenting & Documentation

### Goal
Learn when and how to write helpful comments and documentation in code.

### Key Learning
Comments should be used to explain the purpose behind a piece of code, not to repeat what the code already shows.  
When code is unclear, it is often better to improve the code itself by using meaningful naming or breaking down complex logic instead of adding extra comments.

## issue 27 log
### Handling Errors and Edge Cases

#### Original function (without proper error handling)


// Calculates completion percentage for a task
function calculateCompletionPercentage(completed, total) {
  return (completed / total) * 100
}

Issues in this version:

- If total is 0, this will cause a division by zero and return Infinity or NaN.

- If completed or total are not numbers, the result will be NaN.

- There is no validation or helpful message when the input is invalid.

- The function assumes the caller always passes correct values, which is not safe.


## Edited version

// Calculates completion percentage for a task with basic error handling
function calculateCompletionPercentage(completed, total) {
  // Guard clause: handle invalid types
  if (typeof completed !== 'number' || typeof total !== 'number') {
    throw new Error('completed and total must be numbers')
  }

  // Guard clause: total must be positive
  if (total <= 0) {
    throw new Error('total must be greater than zero')
  }

  // Guard clause: completed cannot be negative
  if (completed < 0) {
    throw new Error('completed cannot be negative')
  }

  // Guard clause: cap completed at total
  if (completed > total) {
    completed = total
  }

  return (completed / total) * 100
}

### The fix:
I added guard clauses to validate inputs before performing the calculation.
This prevents crashes and makes the function more reliable.

### What was the issue with the original code?

It trusted the input too much.
Invalid values caused broken output, and there was no clear message showing what went wrong.

### How does handling errors improve reliability?

By validating input:

- Errors are caught immediately

- The app becomes safer and easier to debug

- The function always returns a correct and meaningful value

- This makes the entire application more stable and predictable.