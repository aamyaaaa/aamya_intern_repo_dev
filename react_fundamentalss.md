## Why are components important in React?

Components are the foundation of how React applications are built. They allow us to break the entire application into small, independent pieces that each manage their own structure, logic, and behavior.

Here’s why they are so important:

**- Reusable Logic and UI**  
Instead of writing the same code again and again, a component can be used anywhere in the app. This improves consistency and reduces errors.

**- Scalable Architecture**  
Large applications become easier to manage when split into smaller components. Each component handles only what it needs to, making the code cleaner and easier to update as the app grows.

**- Better Performance with Virtual DOM**  
React only re-renders components that change. Smaller components mean fewer updates and faster apps.

**- Dynamic Data with Props**  
Components receive input called **props** that allow them to display different information without changing the component itself. This enables dynamic and personalized interfaces.

**- Separation of Concerns**  
Each component can contain:
- UI (HTML/JSX)
- Styling
- Interactive behavior (state, events)

All bundled together, no mixing chaos across files.

### Personal Learning

When I created my HelloWorld component and passed the name prop, I realised how React views everything as modular pieces that can work together like LEGO blocks. This approach makes modern apps like Focus Bear much easier to build and maintain.
