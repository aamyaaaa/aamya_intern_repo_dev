# AI Tools for Development (Issue #42)

## 1. Which AI tools did I try?

For this task I focused on using **ChatGPT** as my main AI coding assistant.

I used ChatGPT to help with:

- Understanding React concepts like `useEffect`, Formik, and validation with Yup.
- Debugging issues in my React + Vite project (Vitest tests failing, ESLint and Prettier errors).
- Refactoring code into smaller, cleaner functions (e.g. `ExpensiveList` with helper functions).
- Writing clear documentation and reflections for other issues in this repo.

I have also briefly explored GitHub Copilot in Visual Studio Code before (code suggestions as I type), but for this internship task my main AI interaction was with ChatGPT.

## 2. What worked well?

**a) Explaining concepts**

- ChatGPT was very helpful for explaining *why* something works a certain way, not just giving code.
- It helped me understand:
  - When to use `useEffect` vs event handlers.
  - How Formik and Yup work together for form validation.
  - How ESLint + Prettier integrate with a React/Vite project.
- This made it easier to connect theory with the actual code in my project.

**b) Debugging errors**

- I pasted real error messages (Vitest failures, ESLint output) and got step-by-step guidance on:
  - Fixing `test is not defined` by importing `test`/`expect` from `vitest`.
  - Updating tests when my component text changed.
  - Cleaning up unused variables and empty blocks flagged by ESLint.
- This saved a lot of time compared to searching randomly and guessing.

**c) Generating code snippets**

- I used AI to generate:
  - A `UseEffectDemo` component with mount/unmount logs and cleanup.
  - A Formik form component with Yup validation.
  - A refactored `ExpensiveList` using helper functions and `useMemo`.
- The generated code was not always final, but it was a very good starting point that I could adapt to my project.


## 3. What didn’t work perfectly?

- Sometimes the AI assumed a slightly different setup (for example, **Jest** instead of **Vitest**). I had to adjust imports and configuration (`import { test, expect } from "vitest";` instead of using Jest globals).
- Some suggestions needed tweaking to fit my exact folder structure or existing code style.
- ESLint configuration with the new flat config required a bit of trial and error before everything worked smoothly.

These moments reminded me that AI is a helper, not a magical “copy-paste and done” solution.


## 4. When is AI most useful for coding?

From this experience, I found AI most useful:

- **For learning and explanations**  
  When I am stuck on a new concept (React hooks, Formik, testing, ESLint), AI can explain it in simple steps and tie it to my current code.

- **For debugging**  
  When I have a specific error message (like a failing test or linter error), AI helps me:
  - Understand what the error means.
  - Suggest concrete changes to fix it.
  - Avoid wasting time on guesswork.

- **For boilerplate and patterns**  
  AI is great for:
  - Generating initial versions of forms, hooks, tests, and configs.
  - Showing typical patterns (e.g. `useEffect` with cleanup, Formik with Yup schema, Vitest test structure).

- **For documentation and reflections**  
  It also helped me organise my thoughts and write clearer summaries for tasks like this one.


## 5. My overall takeaway

AI tools are very powerful *assistants* for development:

- They speed up learning.
- They help debug faster.
- They provide working examples and patterns.

However, I still need to:
- Read and understand the code they generate.
- Check that it matches my project setup.
- Use my own judgement instead of blindly trusting the output.

Used in this way, AI makes me more productive and confident as a developer.
