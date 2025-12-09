## Styling with Tailwind CSS (Issue #55)

### Advantages of Tailwind CSS
- Faster development because styling is done inline within components
- Consistent design system through utility-based classes
- No separate CSS files needed for common spacing, colors, and layout utilities
- Built-in responsive design with utilities like `sm:`, `md:`, `lg:`
- Styles are easier to maintain because they live with the component structure

### Potential Pitfalls of Tailwind CSS
- Class names can become long and cluttered if not structured well
- Dynamic class names (example: `bg-${color}-600`) might be removed in production if not safelisted
- Can be overwhelming for beginners due to many utility options
- Inline styles only — complex themes or animation may require extra configuration

### What I Updated in This Issue
- Converted the Counter component UI to Tailwind utility classes
- Created a reusable `ActionButton` component with Tailwind styling
- Added hover and active states for better interaction feedback  
  Examples:
  - `hover:bg-*`
  - `active:scale-95`
  - `transition ease-in-out duration-150`

### Reflection
Before Tailwind:
- Styling was tied to separate CSS files
- Changing UI required switching between components and stylesheets

After Tailwind:
- Faster styling workflow
- Everything is visually consistent
- Easier to adjust style directly in JSX without context switching

Tailwind CSS improved readability and development speed while keeping the UI consistent and easy to update.