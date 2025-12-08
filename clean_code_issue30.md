# Writing Small, Focused Functions

## Why breaking down functions is beneficial

Breaking a large function into smaller, single-purpose functions makes the code:

- **Easier to read**  each function does one clear thing
- **Easier to test**  you can write unit tests for small pieces instead of one giant block
- **Easier to reuse**  small functions can be called from different parts of the app
- **Easier to change** if one part of the logic needs updating, you only touch one place

It also forces us to think more clearly about the steps in your logic, instead of hiding everything inside one long function.


## Example: Before Refactoring (Long Function)

// Before: one long function doing too many things
function processOrders(orders) {
  // 1. Filter valid orders
  const validOrders = []
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === 'paid' && orders[i].total > 0) {
      validOrders.push(orders[i])
    }
  }

  // 2. Calculate total revenue
  let totalRevenue = 0
  for (let i = 0; i < validOrders.length; i++) {
    totalRevenue += validOrders[i].total
  }

  // 3. Log summary
  console.log('Number of valid orders:', validOrders.length)
  console.log('Total revenue:', totalRevenue)

  // 4. Return data
  return {
    count: validOrders.length,
    revenue: totalRevenue,
  }
}


**Problems with this version:**

- The function is doing multiple jobs (filtering, calculating, logging, returning)
- Harder to test each part separately
- If I want to reuse “filter valid orders” somewhere else, I would have to copy logic
- The function is longer and more tiring to read


## After Refactoring: Smaller, Focused Functions

function getValidOrders(orders) {
  return orders.filter((order) => order.status === 'paid' && order.total > 0)
}

function calculateTotalRevenue(orders) {
  return orders.reduce((sum, order) => sum + order.total, 0)
}

function logOrderSummary(count, revenue) {
  console.log('Number of valid orders:', count)
  console.log('Total revenue:', revenue)
}

function processOrders(orders) {
  const validOrders = getValidOrders(orders)
  const totalRevenue = calculateTotalRevenue(validOrders)

  logOrderSummary(validOrders.length, totalRevenue)

  return {
    count: validOrders.length,
    revenue: totalRevenue,
  }
}


## How refactoring improved the structure

- `getValidOrders` only cares about **filtering** orders.
- `calculateTotalRevenue` is responsible only for **summing totals**.
- `logOrderSummary` handles **logging**, which can be removed or changed easily later.
- `processOrders` reads like a **high-level story**: get valid orders → calculate revenue → log → return result.

This makes the logic:

- Much easier to skim and understand
- Easier to test each function separately
- Easier to reuse parts (for example, I can reuse `getValidOrders` in another feature)
- Safer to change, because each function has a clear responsibility

Breaking down long functions into small, focused ones makes the codebase feel more organised and less overwhelming to work with.
