# Refactoring Code for Simplicity

## Why refactoring matters
Refactoring improves code by making it **simpler, clearer, and easier to maintain**, without changing what the code actually does.  
It helps reduce confusion and makes future updates safer and faster.

## Before Refactoring — Complex Code
// Overly complicated function handling multiple things at once
function applyDiscount(user, cart, discountCode) {
  let total = 0
  let hasDiscount = false
  let discountValue = 0

  for (let i = 0; i < cart.items.length; i++) {
    const item = cart.items[i]
    if (item.quantity > 0) {
      total = total + item.price * item.quantity
    }
  }

  if (discountCode) {
    if (discountCode === 'WELCOME10') {
      if (user.isNewUser === true) {
        hasDiscount = true
        discountValue = 0.1
      }
    } else if (discountCode === 'VIP20') {
      if (user.isVip === true && total > 100) {
        hasDiscount = true
        discountValue = 0.2
      }
    }
  }

  if (hasDiscount === true) {
    total = total - total * discountValue
  }

  return {
    total: total,
    discountApplied: hasDiscount,
  }
}

### Why this was complex
- Too many responsibilities inside **one** function  
- Nested `if` conditions make the logic hard to follow  
- Temporary flags (`hasDiscount`, `discountValue`) being changed in multiple places  
- Hard to extend or reuse later  


## After Refactoring — Simpler & Clearer

function calculateCartTotal(cart) {
  return cart.items.reduce((sum, item) => {
    if (item.quantity <= 0) return sum
    return sum + item.price * item.quantity
  }, 0)
}

function getDiscountRate(user, total, discountCode) {
  if (!discountCode) return 0

  if (discountCode === 'WELCOME10' && user.isNewUser) return 0.1
  if (discountCode === 'VIP20' && user.isVip && total > 100) return 0.2

  return 0
}

function applyDiscount(user, cart, discountCode) {
  const total = calculateCartTotal(cart)
  const discountRate = getDiscountRate(user, total, discountCode)

  return {
    total: total - total * discountRate,
    discountApplied: discountRate > 0,
  }
}

## Reflection

### What made the original code complex?
- It mixed **different jobs**: calculating total + checking discounts + updating state + logging
- Hard to understand because all logic lived in one place
- Changing or adding new discounts would require rewriting more code

### How refactoring improved the code
- Separated logic into **three smaller functions** with clear purposes
- Easier to **read**, **test**, and **reuse**
- The main function now feels like a **simple checklist**:
  1️Calculate total  
  2️Check discount  
  3️Return result  
- Future changes (like new discount rules) are much simpler to implement


## Final takeaway
Refactoring didn’t change the feature — just made the structure cleaner.  
This helps developers understand, maintain, and improve the code confidently in the future.
