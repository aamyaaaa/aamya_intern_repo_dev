# React + Tailwind CSS Setup & Reflection

## Setup Summary

To complete the task, I created a new React project using Vite and installed Tailwind CSS for styling.

### Steps I followed:

1. Installed the React project using Vite.
2. Installed Tailwind CSS, PostCSS and Autoprefixer.
3. Configured Tailwind to work with React by updating the Tailwind config and main stylesheet.
4. Ran the project to confirm Tailwind styles were applying correctly.
5. Pushed the project to GitHub, including this documentation.

After running the project, I tested Tailwind by adding styling classes to the main component. The page successfully displayed updated styles such as a coloured heading and background, confirming Tailwind was working.


## Proof of Working Project

- The development server ran successfully.
- Tailwind classes correctly applied styles such as fonts, colours, spacing, and layout.
- The browser displayed the styled UI without errors.


## Reflection: What Challenges Did I Face?

During setup, I initially installed the wrong Tailwind version which caused errors. I fixed this by installing the stable Tailwind v3 version.  
I also accidentally mixed CSS and JavaScript into the same file, which prevented the styling from loading properly. Separating them into the correct files solved the issue.

Another minor issue was the warnings shown in VS Code for `@tailwind` rules, which I learned are normal and not actual project errors.

### What I learned:

- How to set up a React project using Vite.
- How Tailwind CSS integrates into React using utility-first styling.
- How to troubleshoot configuration issues and check whether Tailwind is actually working.

This process helped me understand the connections between React, Vite, Tailwind, and build tools more clearly.

## issue 34
## Handling State & User Input Reflection

### What happens if we modify state directly instead of using setState?
If we modify state directly (for example, doing `count = count + 1` instead of
calling `setCount(count + 1)`), React will not reliably detect that the state
has changed. Because React doesn’t know a change happened, it may not re-render
the component, so the UI might not update correctly.

Using the setter function from `useState` (like `setCount`) tells React that the
state has changed and triggers a re-render in a predictable way. It also helps
React manage updates efficiently (including batching updates) and keeps the
component state consistent over time.