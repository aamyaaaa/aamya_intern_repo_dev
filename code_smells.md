# Code Smells Reflection

## What code smells did you find in your code?
I identified several common code smells:
- **Magic numbers and strings** (e.g., hardcoded thresholds like 18, 50, 100 and strings like "ACTIVE", "AU").
- **Long function** where one function handled validation, business logic, logging, and caching.
- **Duplicate code** where similar logging lines were repeated with small variations.
- **Large class / God object** where a single class managed too many responsibilities (state, caching, logging, and business rules).
- **Deeply nested conditionals** which made the logic hard to follow and easy to break.
- **Commented-out code** which cluttered the file and added noise.
- **Inconsistent naming** (e.g., unclear variable names like `u`).

## How did refactoring improve readability and maintainability?
Refactoring improved readability by replacing hardcoded values with well-named constants and extracting logic into small, focused helper functions. The control flow became clearer by reducing nesting and using early returns and boolean checks. Maintainability improved because changes (like adjusting thresholds or adding new rules) now happen in one place, and reused helpers reduce repetition and the chance of inconsistent behavior.

## How can avoiding code smells make future debugging easier?
Avoiding code smells makes debugging easier because the code becomes more predictable and modular. Smaller functions are easier to test in isolation, constants reduce hidden assumptions, and removing duplication prevents bugs from being fixed in one place but not another. Clear naming and simpler control flow also makes it faster to identify where a bug is coming from.