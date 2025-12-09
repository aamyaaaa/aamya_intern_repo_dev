# Mocking API Calls in Jest

## Why is it important to mock API calls in tests?
Mocking API calls ensures that tests do not rely on real network requests. This is important because:
- Real APIs can be slow or temporarily unavailable
- Network failures would cause false test failures
- We control the exact response, making tests predictable and repeatable
- We can test different scenarios like success and failure without changing real API behavior

By mocking, we isolate the component’s logic and verify how it actually behaves based on controlled test data.


## What are some common pitfalls when testing asynchronous code?
A few issues developers commonly face:
- **Not waiting for state updates** (UI does not update before assertion happens)
- **Multiple re-renders** causing flaky results
- Forgetting to use `async/await`, `waitFor`, or user interactions
- Mock not properly cleaned up between tests
- Assuming the DOM updates instantly after an async call

Using tools like `waitFor()` and `findBy*()` helps ensure React has time to rerender before we check expectations.

## Example of this task in my project

### Component Using an API: `QuoteFetcher.jsx`
This component fetches a motivational quote from an API and displays it.

### Mocking in Test
In `QuoteFetcher.test.jsx`, I mocked:
```js
global.fetch = vi.fn()