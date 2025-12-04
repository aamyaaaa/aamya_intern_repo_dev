## 1. Simplicity

Simplicity means solving the problem in front of you without adding extra complexity “just in case.”  
Simple code:

- Does one thing well
- Avoids unnecessary layers, flags, or abstractions
- Is easier to test, debug, and reason about

If a solution feels clever but is hard to explain, it is probably not simple.


## 2. Readability

Readable code is code that another developer can understand quickly, even if they have never seen the project before.  
Good readability includes:

- Clear and descriptive names for variables, functions, and components
- Consistent indentation and formatting
- Avoiding deeply nested logic when possible

Code is read far more often than it is written, so readability is critical.

## 3. Maintainability

Maintainable code is easy to change, extend, and fix in the future—by you or by someone else.  
Maintainable code usually:

- Breaks logic into small, focused functions
- Avoids duplication (DRY: Don’t Repeat Yourself)
- Is well-structured so new features can be added without breaking everything

The goal is that future changes feel safe and predictable, not scary.

## 4. Consistency

Consistency means following the same patterns, naming conventions, and style across the project.  
This includes:

- Using the same naming style (e.g. `camelCase` for variables and functions)
- Following the chosen folder structure and component patterns
- Applying the same linting/formatting rules everywhere

When the codebase is consistent, developers don’t need to re-learn the “rules” on every file.

## 5. Efficiency

Efficient code performs well and avoids obvious waste of resources (CPU, memory, network), but **not at the cost of clarity**.  
Good efficiency practices:

- Choose reasonable algorithms and data structures
- Avoid doing heavy work repeatedly when it can be cached or reused
- Only optimize when there is a real performance problem (avoid premature optimization)

The goal is a good balance between speed and simplicity.

## Example of Messy Code

```js
// does stuff
function f(a){
  let x=[]
  for(let i=0;i<a.length;i++){
    if(a[i].age>18){ x.push(a[i].n) }
  }
  return x
}
```
Why this is messy

- Variable names give no meaning (f, a, n)
- Hard to understand the purpose of the function
- Comment adds no useful information
- Logic is not obvious without reading closely

  // Returns names of users over age 18
function getAdultNames(users) {
  return users
    .filter(user => user.age > 18)
    .map(user => user.name)

}

Improvements
- Clear function and variable names
- Logic is readable and obvious
- Function has a single responsibility

Why Clean Code Matters
Clean code:
- Prevents bugs from growing unnoticed
- Makes collaboration easier
- Saves time when updating code later
