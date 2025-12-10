# Clean Code & Style Guides (Issue #47)

## Why is code formatting important?

Consistent code formatting:
- Makes the code easier to read and understand
- Helps developers collaborate better as it removes personal formatting differences
- Reduces bugs caused by missing semicolons or unused variables
- Makes Pull Requests smaller and focused on real changes, not style issues

Formatting tools like ESLint and Prettier allow the team to follow the same rules automatically instead of debating style in reviews.

### Example Issues Detected by ESLint

- `no-unused-vars` — ESLint flagged an unused translation variable (`t`) in `App.jsx`. I removed it to clean up the code.
- `no-empty` — An empty loop in `ExpensiveList.jsx` was flagged. Adding a dummy operation inside fixed the issue and clarified the intent of the delay simulation.
- `no-unused-vars` — ESLint detected that the `err` parameter in `QuoteFetcher.jsx` was unused. I updated the error handling so the variable is now part of the logic.

These issues would not be obvious visually, and fixing them resulted in cleaner and more intentional code.

## Did formatting the code make it easier to read? How?

(Write your real thoughts here after formatting)
Cleaner formatting helped me:
- Quickly understand what each file does
- Notice unused code that wasn’t needed
- See a more consistent structure across the project

It definitely improves readability and confidence in the codebase.

