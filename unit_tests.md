# Unit Testing Reflection -> Redux Tests

## What was challenging?

The tricky part was understanding that we are testing Redux logic, not the buttons on the screen. I am used to seeing the results visually, so testing state changes directly felt new.

Also, async actions were confusing at first. But I learned that I don’t need to wait for real time and I can test the “fulfilled” action that Redux receives once the async work is done.

Once I understood this, the tests became much easier.


## How are Redux tests different from React component tests?

Redux tests focus on data changes, not on the UI.

- Redux tests check if state updates correctly (checks logic only) when actions are used.  

- React component tests check the visual UI not the logic.


## What I learned

I learned that testing Redux gives us confidence that the app’s behavior is correct even before connecting it to the UI. This helps catch bugs early and makes features more reliable.

## Issue 37
# Unit Tests with Jest & React Testing Library

## 1. What are the benefits of using React Testing Library instead of testing implementation details?

React Testing Library encourages testing from the **user’s perspective** rather than focusing on how the component is implemented internally. Instead of checking state variables or internal methods, I write tests that:

- Look for elements the way a user would (by text, role, label, etc.).
- Interact with the UI (clicking buttons, typing input) and assert on visible changes.
- Avoid coupling tests to the exact implementation (e.g. specific hooks or internal structure).

This makes the tests more **robust** and less likely to break when I refactor the component. As long as the behaviour and UI seen by the user stays the same, the tests usually keep passing. It also naturally leads to better accessibility because I end up using queries like `getByRole` and `getByLabelText`.


## 2. What challenges did you encounter when simulating user interaction?

The main challenges I faced were:

- Understanding how to correctly use `userEvent` (e.g. `userEvent.setup()` and using `await user.click(button)`).
- Remembering that some interactions are **asynchronous**, so I had to use `async/await` in the test and wait for the UI to update.
- Choosing the right query methods (`getByRole`, `getByText`, `getByTestId`) so the tests were reliable and not too fragile.

Once I understood that I should think like a user—“find the button by its label, click it, and then check what changed”—the tests felt much more natural to write.
