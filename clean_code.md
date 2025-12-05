## Commenting & Documentation

### Goal
Learn when and how to write helpful comments and documentation in code.

### Key Learning
Comments should be used to explain the purpose behind a piece of code, not to repeat what the code already shows.  
When code is unclear, it is often better to improve the code itself by using meaningful naming or breaking down complex logic instead of adding extra comments.
## Example of Improving Comments

### Poorly Commented Code (Unhelpful comments)

// add one
function a(x) {
  // do math
  return x + 1 // return
}

Problems:
- Comments repeat what the code already says
- Function and variable names are unclear
- No explanation of why this exists
- Improved Version (Clear purpose and better naming)


// Increases a user's point count by 1
function increaseUserPoints(currentPoints) {
  // We return a new value instead of modifying the original
  return currentPoints + 1;
}

Improvements:
- Clear function name
- Clear parameter name
- Comment explains the purpose, not the code
- More meaningful and readable


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

## Unit Testing Reflection

### How do unit tests help keep code clean?

Unit tests make sure that each part of the code behaves correctly before it is used inside the application. By writing tests:

- I focus more on the **logic and expected behavior** of functions
- I catch mistakes early, before they break the UI
- Code becomes easier to **refactor**, because tests will alert me if something stops working
- It encourages writing **smaller, reusable functions** that are easier to test

Overall, unit tests act like a safety net — if someone changes code later, tests ensure no new bugs are introduced.


### What issues did you find while testing?

While testing the `calculateDiscount` function, I discovered:

- The first version did not handle **invalid values** like negative prices or discount percentages over 100%
- I realized I needed **proper error handling** to prevent unexpected results
- Writing tests made me think more deeply about **edge cases** that I might have missed

After updating the function and improving validation, all tests passed — showing that the function is now more reliable and cleaner in design.
