# React Hooks -> useMemo

## How does useMemo improve performance?

`useMemo` helps improve performance by avoiding unnecessary recalculation of expensive values. In my example, I created a large list of numbers and ran a heavy loop to count how many of them are even. This calculation can be slow if it runs on every render.

With `useMemo`, React only recomputes the value when its dependencies change (in this case, when the list of numbers changes). If other state in the component changes, the memoized value is reused instead of recalculated. This reduces wasted work and makes the UI feel more responsive.

## When should you avoid using useMemo?

I should avoid using `useMemo` when:

- The calculation is very cheap and does not affect performance.
- Adding `useMemo` makes the code harder to read for only a tiny benefit.
- The dependencies change often, so the value is recomputed almost every time anyway.

In those cases, `useMemo` can add unnecessary complexity without a real gain. It is more useful when the calculation is clearly expensive or the component re-renders very frequently.

## What happens if you remove useMemo from your implementation?

If I remove `useMemo` from my implementation, the expensive calculation runs on every render:

- When I change the list size, it recomputes (which is expected).
- But it also recomputes when I update an unrelated piece of state (like the click counter).

This means the heavy loops run much more often than needed, which can make the UI feel slow or laggy. With `useMemo`, those extra recalculations are avoided, and the component behaves more efficiently.


## Preventing Unnecessary Renders with useCallback

### What problem does useCallback solve?

In React, every time a component re-renders, the functions inside it are recreated.  
If those functions are passed as props to child components (especially memoized ones using `React.memo`), the changed function reference can cause the child to re-render even when its actual data has not changed.

`useCallback` solves this by giving React a way to **reuse the same function reference** between renders, as long as the values in its dependency array do not change. This helps reduce unnecessary re-renders of child components that depend on stable function props.

### How does useCallback work differently from useMemo?

- `useCallback(fn, deps)` returns a **memoized function**.
- `useMemo(factory, deps)` returns a **memoized value** (the result of running `factory()`).

In other words:
- Use `useCallback` when you want to memoize a **function**.
- Use `useMemo` when you want to memoize a **computed value**.

Internally, they are similar, but they are used for different purposes: function reference vs computed data.

### When would useCallback not be useful?

`useCallback` is not useful when:

- The function is **cheap** and not passed to memoized children.
- The component does not re-render often.
- You are not using `React.memo` or similar optimization on child components.
- Adding `useCallback` makes the code harder to read without giving a real performance benefit.

In small components, adding `useCallback` everywhere can actually make the code more complex without noticeable gains. It is most useful when you have performance issues due to frequent re-renders and are passing functions down into memoized children.