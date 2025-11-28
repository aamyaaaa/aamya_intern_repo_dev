# Practise React Debugging in a Test Repo

## What was the issue?

I recreated the example where a parent component stores a count in state as an object, for example:

- const [state, setState] = useState({ count: 0 })

This object was passed down to a child component as a prop. Inside the child, I wrote code that changed the prop directly, like:

- state.count += 5

This caused a bug because the child was mutating the same object that the parent was using for its state. As a result, every time I clicked the button in the parent to increment the count by 1, the number increased by more than expected (for example, it looked like it was adding 6 instead of 1). The core issue was **mutating props / state directly**, especially when using objects that are passed by reference in JavaScript.


## What debugging method did you use?

To debug this problem, I used:

- console.log before and after the line that changed state.count, to see how the value was being modified inside the child component.
- I compared the behaviour when using a simple number as state versus using an object as state, which helped me see that the bug only happened with the object version.
- I referred back to the article to confirm that mutating props is an anti-pattern and to remind myself that objects are shared by reference, so changing them in the child affects the parent.

These steps made it clear that the child component was changing the parent’s state indirectly by modifying the shared object.


## How did you resolve the problem?

I fixed the issue by:

- Removing the direct mutation of the prop (state.count += 5) from the child component.
- Instead of changing the prop object, I simply calculated the derived value when rendering, for example using state.count + 5 to display the adjusted value.
- I left all actual state updates inside the parent component, using its own state setter.

After this change, the parent’s state updated predictably by 1 each time the button was clicked, and the child could still show count + 5 without causing any side effects. This respects React’s one-way data flow and treats props as read-only.
