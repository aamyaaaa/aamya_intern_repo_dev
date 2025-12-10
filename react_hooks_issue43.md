# React Hooks - useEffect (Issue #43)

## 1. When should you use useEffect instead of handling logic inside event handlers?
We use useEffect when you want to run side effects that depend on render/state/props, not just on a direct user action.

Examples:
- Syncing with a browser API (e.g. `document.title`, `localStorage`, event listeners).
- Starting a timer or interval when a component appears.
- Fetching data when the component mounts or when a piece of state changes.
- Setting up a subscription (e.g. WebSocket, Firebase, resize listener) and cleaning it up.

Event handlers are great for **one-off actions** like:
- Updating state from a button click.
- Submitting a form.
- Toggling UI immediately.

But if you want:
- “Whenever this state/prop changes, do X”
- Or “When the component appears/disappears, do X/Y”

…then `useEffect` is the right place.

## 2. What happens if you don’t provide a dependency array?

If you don’t provide a dependency array:

useEffect(() => {
  // effect
});

The effect runs after every render.

That means:
	•	It runs once after the initial render.
	•	It runs again after every state/prop change that causes a re-render.

If the effect updates state inside it, this can easily create:
	•	Render loops (effect → setState → re-render → effect → setState …).
	•	Extra work (e.g. refetching data on every render).

So:
	•	No array → runs on every render.
	•	[] → runs once on mount (and cleanup on unmount).
	•	[value] → runs when value changes.



### 3. How can improper use of useEffect cause performance issues?

Improper useEffect usage can cause performance problems by:
	1.	Running too often
	•	Putting heavy logic (e.g. big calculations, large API calls) in an effect without a proper dependency array, so it runs after every render.
	2.	Unnecessary repeated API calls
	•	Forgetting the dependency array when fetching data:
	•	The component re-renders → effect runs again → refetches the same data over and over.
	3.	Leaking subscriptions / timers
	•	Not returning a cleanup function:
	•	Multiple intervals, event listeners, or subscriptions pile up.
	•	Each re-render or remount adds more listeners, slowing down the app.
	4.	Using too many dependencies
	•	Overly broad dependency arrays cause effects to rerun more than needed, redoing work.

Good useEffect usage means:
	•	Keep effects focused on actual side effects.
	•	Use a small, correct dependency array.
	•	Always clean up subscriptions, listeners, and timers.