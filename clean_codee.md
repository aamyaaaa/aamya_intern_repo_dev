# Clean Code Principles

## Simplicity
Code should solve the problem without unnecessary complexity.

## Readability
Code should be easy to understand at a glance.

## Maintainability
Future developers should be able to work with it without confusion.

## Consistency
Follow the same patterns, naming and formatting across the project.

## Efficiency
Perform well, but do not sacrifice clarity for premature optimization.

---

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
