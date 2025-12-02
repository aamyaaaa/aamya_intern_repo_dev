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
