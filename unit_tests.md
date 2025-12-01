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
