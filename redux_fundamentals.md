# Redux Toolkit  Fundamentals

### What I did

1. **Installed Redux Toolkit and React Redux**

   I added the required packages to my existing React project:

   - @reduxjs/toolkit to create the store and slices easily.
   - `eact-redux to connect React components to the Redux store.

2. **Created a Redux store and counter slice**

   - I created a counterSlice with:
     - An initial value (starting at 0).
     - Reducers for actions like increment, decrement, and reset.
   - I set up a Redux store using configureStore and added the counter slice to the reducer field.

3. **Connected Redux to the React app**

   - I wrapped the root <App /> component with <Provider store={store}> so the entire app can access the Redux store.
   - This was done in the main entry file (e.g. main.jsx).

4. **Used `useSelector` and `useDispatch` in `Counter.js`**

   - In the Counter component:
     - useSelector reads the current count value from the Redux store.
     - useDispatch sends actions like increment() and decrement() to update the state.
   - The UI updates automatically whenever the Redux state changes, proving the connection works.

5. **Pushed the Redux setup to GitHub**

   - After confirming the counter worked (buttons changed the number on screen), I committed the changes and pushed the updated project, including this documentation, to my existing GitHub repository.

## Reflection for When should you use Redux instead of useState?

I would choose Redux instead of just useState when:

- **State needs to be shared across many components**  
  If multiple components need the same piece of data (e.g. user info, theme, cart, filters), passing it down through props with `useState` becomes messy. Redux gives one central place (the store) that any component can access.

- **The state logic is complex or has many updates**  
  When there are lots of different ways the same state can change (API calls, user actions, background events), having that logic in Redux reducers makes it easier to manage, test, and understand.

- **I want better debugging and predictability**  
  Redux enforces that state changes only through actions and reducers. With tools like Redux DevTools, I can see exactly what action changed the state and what the state looked like before and after. This is harder with many scattered `useState` hooks.

- **Multiple features depend on the same data**  
  For example, an authenticated user object or global app settings that many components need to read and react to.

On the other hand, I would stick with **`useState`** when:

- The state is **local** to a single component (like a form field, modal open/close, or a simple toggle).
- Only one or two components need the value and the logic is simple.

### Summary

- useState is great for **simple, local component state**.  
- Redux is better when state is **global, shared across components, or complex enough** that managing it with only useState becomes hard to maintain.

This task helped me see how Redux Toolkit can simplify global state management and make the state flow in a React app more structured and predictable.
