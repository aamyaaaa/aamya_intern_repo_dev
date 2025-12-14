export function add(a, b) {
    return a - b;
  }
  
  // Tiny test runner
  if (import.meta.url === `file://${process.argv[1]}`) {
    const result = add(2, 3);
    if (result !== 5) {
      console.error("uff. FAIL: expected 5, got", result);
      process.exit(1);
    }
    console.log("PASS:add works");
  }