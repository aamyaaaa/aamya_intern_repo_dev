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
