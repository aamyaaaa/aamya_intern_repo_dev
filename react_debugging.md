# React Debugging - Notes and Reflection

## Common Debugging Techniques in React

1. **Logging with console**
   - Use `console.log`, `console.error`, and `console.warn` to inspect props, state, and function calls.
   - Add temporary logs inside event handlers, `useEffect`, and conditional branches to see what is actually running.

2. **Checking component props and state**
   - Verify that the right data is being passed from parent to child.
   - Print values before rendering: `console.log('props', props)` or log specific fields.

3. **Using React DevTools**
   - Inspect the component tree in the browser.
   - Check current props and state for any component.
   - Confirm which component owns which piece of state.

4. **Using breakpoints instead of only logs**
   - Open the browser DevTools or VS Code debugger.
   - Set breakpoints in key places to pause execution and inspect variables step by step.
   - Step through async code and event handlers.

5. **Isolating the problem**
   - Comment out or temporarily remove parts of the JSX.
   - Replace complex data with small hard-coded examples.
   - Reproduce the bug in the smallest possible version of the component.


## Tools That Are Most Effective for React Debugging

### 1. React DevTools
- Inspect the full component tree.
- View props, state, and hooks values in real time.
- See which components re-render and why.
- Helpful for checking:
  - Incorrect props passed down
  - State not updating as expected
  - Unnecessary re-renders

### 2. Browser DevTools (Chrome/Brave/Edge)
- Console for logs and runtime errors.
- Network tab to check API requests, responses, and status codes.
- Sources tab to set breakpoints and step through code.
- Performance tab to investigate slow rendering or heavy operations.

### 3. VS Code Debugger
- Attach to the browser or Node process.
- Set breakpoints directly from the editor.
- Inspect local variables, call stack, and watch expressions.

### 4. Error Boundaries
- Special React components that catch errors in the component tree.
- Prevent the entire app from crashing when a child component throws a runtime error.
- Show a fallback UI instead of a blank screen.
- Useful in large apps to:
  - Wrap risky areas (e.g., third-party components)
  - Provide better error messages to users

### 5. React Profiler
- Part of React DevTools.
- Records rendering performance.
- Shows how long each component took to render.
- Helps find:
  - Components that re-render too often
  - Expensive calculations that should be memoized (with `useMemo` or `useCallback`)


## Debugging Issues in Large React Codebases

1. **Start from the bug report and reproduce it**
   - Try to reproduce the issue consistently.
   - Note down the exact steps, input values, and environment.
   - If you cannot reproduce it, add more logging or ask for more context.

2. **Follow the data flow**
   - Identify where the data comes from (API, Redux store, context, props).
   - Check each step: API → state/store → props → component.
   - Use logs or DevTools to confirm that each step has the expected value.

3. **Narrow down the problem area**
   - Find the smallest component (or function) where the behaviour goes wrong.
   - Use conditional rendering or temporary UI to display intermediate state.
   - If needed, create a small test version of the component in isolation.

4. **Use clear assumptions and then verify them**
   - Write down what you think “should” be happening.
   - Use logging and breakpoints to prove or disprove your assumptions.
   - Adjust your mental model based on what you see in DevTools.

5. **Check for common React-specific issues**
   - State not updating because of stale closures or wrong dependencies in `useEffect`.
   - Mutating state directly instead of copying (e.g., arrays/objects).
   - Missing `key` props in lists causing weird rendering behaviour.
   - Race conditions in async code (e.g., multiple API calls updating state in the wrong order).

6. **Use tests where possible**
   - Add small unit tests or component tests to lock in the expected behaviour.
   - Once the bug is fixed, tests help prevent regressions later.


## Summary

- React debugging is mostly about **observing data flow** (state + props) and **understanding the component tree**.
- The most effective tools are:
  - React DevTools (for props/state and re-renders)
  - Browser DevTools (for logs, network, breakpoints)
  - Error boundaries and the React Profiler for runtime and performance issues.
- In large codebases, it is important to:
  - Reproduce the bug
  - Trace data step by step
  - Isolate the smallest failing part
  - Use tests to prevent the same bug from coming back.
