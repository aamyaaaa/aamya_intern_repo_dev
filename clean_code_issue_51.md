# Naming Variables & Functions

## What makes a good variable or function name?

A good name should:

- **Describe what it represents or does** (clear purpose)
- Be **specific**, not vague (`totalPrice` is better than `data` or `value`)
- Use consistent style (e.g. `camelCase` for variables and functions in JavaScript)
- Avoid abbreviations that are unclear to others (`userId` is better than `uId` or `uidx`)
- Match the **level of detail** (e.g. `getUserById` vs `getUser`)

Good names make code understandable even without many comments.


## Bad vs Good Naming – Example

### Before: Unclear Names

```js
// Hard to understand at a glance
function fn(a, b) {
  let x = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i].p === true) {
      x = x + a[i].amt
    }
  }

  if (b === true) {
    console.log(x)
  }

  return x
}
```

**Problems:**

- `fn` → no idea what this function does  
- `a`, `b`, `x` → too generic, meaning is hidden  
- `p`, `amt` inside objects are cryptic  
- Requires reading the whole function to guess its purpose

### After: Clear, Descriptive Names


// Calculates the total amount of all paid orders
function calculatePaidOrderTotal(orders, shouldLog = false) {
  let totalAmount = 0

  for (let index = 0; index < orders.length; index++) {
    const order = orders[index]

    if (order.isPaid === true) {
      totalAmount = totalAmount + order.amount
    }
  }

  if (shouldLog) {
    console.log(totalAmount)
  }

  return totalAmount
}

**Improvements:**

- `fn` → `calculatePaidOrderTotal` (function purpose is obvious)
- `a` → `orders`, `b` → `shouldLog`, `x` → `totalAmount`
- `p` → `isPaid`, `amt` → `amount`
- Someone can understand the function quickly by just reading the signature and a few lines.


## What issues can arise from poorly named variables?

Poor names can cause:

- **Confusion** – developers misinterpret what a variable represents
- **Bugs** – using the wrong variable because names are too similar or unclear
- **Slower collaboration** – teammates spend extra time reading and re-reading code
- **Fear of changing code** – if names are unclear, people are less confident modifying logic

Bad names don’t just look messy, they actively increase the chance of mistakes.


## How refactoring improved code readability

Refactoring from short, unclear names to descriptive names:

- Made the **intent** of the function obvious: “calculate total of paid orders”
- Reduced the need for comments like `// a is orders`, because the names now explain themselves
- Turned a “mysterious” block of logic into a function that reads almost like plain English
- Makes it easier for future me (or another developer) to reuse or change the function without being scared of breaking something

Good naming is one of the simplest but most powerful ways to write clean code.
