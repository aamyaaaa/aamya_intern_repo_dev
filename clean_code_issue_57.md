# Refactoring Code for Simplicity

## Why Refactoring Matters
Refactoring improves code readability and maintainability without changing functionality.  
It helps reduce duplication, separate responsibilities, and make future updates easier.

## Original Code (Before Refactoring)
The original `Counter.jsx` mixed UI, business logic, and repetitive button elements in one place.

```jsx
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './store/counterSlice'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-white">Redux Counter</h1>
      <p className="text-2xl text-white">Count: {count}</p>

      <div className="flex gap-2">
        <button
          className="px-4 py-2 rounded bg-green-600 text-white"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button
          className="px-4 py-2 rounded bg-red-600 text-white"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <button
          className="px-4 py-2 rounded bg-gray-500 text-white"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter
```

### Issues in Original Code
- Inline anonymous functions recreated on every render
- Repeated button markup with only minor changes
- Mixing Redux logic directly in JSX
- Hard to change or reuse UI components


## Refactored Code (After Improvement)
Logic is now separated from UI. Buttons are reusable and handlers are clearly named.

```jsx
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './store/counterSlice'

function ActionButton({ label, onClick, color }) {
  return (
    <button
      className={`px-4 py-2 rounded text-white bg-${color}-600`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleIncrement = () => dispatch(increment())
  const handleDecrement = () => dispatch(decrement())
  const handleReset = () => dispatch(reset())

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-white">Redux Counter</h1>
      <p className="text-2xl text-white">Count: {count}</p>

      <div className="flex gap-2">
        <ActionButton label="+1" onClick={handleIncrement} color="green" />
        <ActionButton label="-1" onClick={handleDecrement} color="red" />
        <ActionButton label="Reset" onClick={handleReset} color="gray" />
      </div>
    </div>
  )
}

export default Counter
```

---

## Improvements Achieved
| Before | After |
|--------|-------|
| Duplicate button code | Reusable `ActionButton` component |
| Dispatch actions inline | Clear named handlers |
| UI and logic mixed together | Better separation of concerns |
| Harder to maintain or update | Clean, readable structure |

## Reflection
The original code was more complex than necessary because:
- It combined several responsibilities in one component
- Updating one UI element required editing multiple lines

Refactoring improved the structure by:
- Making dispatch logic easy to locate and reuse
- Allowing future styling changes to be done in one place
- Reducing cognitive load when reading the component

Overall, the refactor made the code more maintainable and easier to extend.