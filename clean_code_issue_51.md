# Refactoring Code for Simplicity – Reflection

## Why refactor code for simplicity?

Simple code is easier to:
- Understand quickly
- Debug and maintain
- Test independently
- Extend without breaking things

Refactoring helps remove unnecessary complexity while keeping the same behavior.


## Before Refactor, Harder to Understand

The component below mixes UI, state, list generation, delay simulation, and heavy calculation in one place:

```js
import { useMemo, useState } from 'react'

function ExpensiveList() {
  const [size, setSize] = useState(5000)
  const [clicks, setClicks] = useState(0)

  const numbers = useMemo(() => {
    return Array.from({ length: size }, (_, index) => index + 1)
  }, [size])

  const evenCount = useMemo(() => {
    console.log('Running expensive calculation...')
    let count = 0

    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < 500; j++) {} // artificial delay

      if (numbers[i] % 2 === 0) {
        count++
      }
    }

    return count
  }, [numbers])

  return (
    <div>
      <h2>Expensive List</h2>
      <p>Size: {size} — Even: {evenCount}</p>
      <button onClick={() => setSize(prev => prev + 1000)}>Grow List</button>
      <button onClick={() => setClicks(prev => prev + 1)}>
        Random button ({clicks})
      </button>
    </div>
  )
}

export default ExpensiveList
```

### What made this complex?

- Multiple responsibilities inside one component
- Hard to test the logic (only testable through UI)
- Artificial delays hidden inside loops
- Naming doesn’t explain purpose clearly


## After Refactor – Cleaner & More Maintainable

Complex logic extracted into small, clear helper functions:

```js
import { useMemo, useState } from 'react'

// Generate list of numbers (responsibility is clear)
function generateNumbers(size) {
  return Array.from({ length: size }, (_, index) => index + 1)
}

// Independent delay simulation
function simulateDelay() {
  for (let i = 0; i < 500; i++) {}
}

// Count even numbers separately with clear intent
function countEvenNumbers(numbers) {
  let count = 0
  for (let num of numbers) {
    simulateDelay()
    if (num % 2 === 0) count++
  }
  return count
}

function ExpensiveList() {
  const [size, setSize] = useState(5000)
  const [clicks, setClicks] = useState(0)

  const numbers = useMemo(() => generateNumbers(size), [size])
  const evenCount = useMemo(
    () => countEvenNumbers(numbers),
    [numbers]
  )

  return (
    <div>
      <h2>Optimized Expensive List</h2>
      <p>Size: {size} — Even: {evenCount}</p>
      <button onClick={() => setSize(prev => prev + 1000)}>Grow List</button>
      <button onClick={() => setClicks(prev => prev + 1)}>
        Random button ({clicks})
      </button>
    </div>
  )
}

export default ExpensiveList
```

---

## How refactoring improved the code

| Before | After |
|--------|-------|
| One huge function | Clear & reusable helpers |
| Hard to test | Logic can be unit-tested |
| Mixed UI + business logic | Clean separation of responsibilities |
| Hard to read | Code reads like a narrative |

### Key improvements:

- Better readability → no need to decode nested loops
- Smaller units of logic → easier to test individually
- Reusable helpers → maintainable codebase
- UI code became much cleaner and focused only on rendering

---

## Final Conclusion

Refactoring simplified this component by:
- Reducing cognitive load
- Improving structure and clarity
- Making future changes safer and faster

Small changes in structure can greatly improve the quality of a project. 

Updated version committed and pushed to GitHub as part of this issue.