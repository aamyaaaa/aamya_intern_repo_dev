# Form Handling with Formik (Issue #44)

## 1. How does Formik simplify form management compared to handling state manually?

Without Formik, I would usually:
- Create `useState` for every field in the form.
- Write `onChange` handlers to update each state.
- Handle `onSubmit` manually.
- Track whether a field was touched or not.
- Manage error messages and when to show them.

Formik simplifies this by:
- Managing **form state** (values, touched, errors) for me in one place.
- Providing helpers like `handleChange`, `handleBlur`, and `handleSubmit`.
- Letting me define an `initialValues` object instead of separate state variables.
- Integrating easily with Yup for validation, so I do not have to write custom validation logic for each field.
- Giving a clear structure for how to handle form submission and error display.

Overall, Formik reduces the amount of boilerplate and makes the code more organised and easier to maintain.

## 2. What are the benefits of using Formik’s validation (with Yup) instead of writing validation logic manually?

Formik works well with Yup to provide schema-based validation:

- I can define a **schema** that describes the rules for each field (e.g. email must be valid, name is required).
- The validation logic is **centralised** instead of spread across multiple `if` statements.
- Yup gives many built-in validators, such as `string().email().required()`, which saves time.
- Error messages are automatically mapped to fields through `errors` and `touched`.
- It is easier to update or extend validation rules later because they live in one place.

Using Formik + Yup leads to more **readable**, **reusable**, and **less error-prone** validation than writing all the logic manually.