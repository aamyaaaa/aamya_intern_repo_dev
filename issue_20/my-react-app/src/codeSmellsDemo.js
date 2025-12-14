/* =========================
   BEFORE (smelly code)
   ========================= */

// Magic numbers/strings, long function, duplicate code, deeply nested conditionals,
// commented-out code, inconsistent naming, and a "god object" style class.

class AppManager {
    constructor() {
      this.u = null; // inconsistent naming (u)
      this.userData = {};
      this.logs = [];
      this.cache = {};
    }
  
    // Long function (does too much)
    processUser(input) {
      // commented-out code smell
      // console.log("Processing user...");
  
      // magic string + magic numbers
      if (input.status === "ACTIVE") {
        if (input.age > 18) {
          if (input.country === "AU") {
            if (input.points > 100) {
              this.userData.level = "gold";
            } else {
              this.userData.level = "silver";
            }
          } else {
            this.userData.level = "basic";
          }
        } else {
          this.userData.level = "basic";
        }
      } else {
        this.userData.level = "basic";
      }
  
      // duplicate code (same log format repeated)
      this.logs.push("USER:" + input.name + " LEVEL:" + this.userData.level);
      this.logs.push("USER:" + input.name + " AGE:" + input.age);
  
      // more magic numbers/strings
      if (input.points > 50) {
        this.cache[input.name] = true;
      } else {
        this.cache[input.name] = false;
      }
  
      this.u = input; // inconsistent naming
      return this.userData;
    }
  }
  
  /* =========================
     AFTER (refactored code)
     ========================= */
  
  // Constants remove magic numbers/strings
  const STATUS = Object.freeze({
    ACTIVE: "ACTIVE",
  });
  
  const COUNTRY = Object.freeze({
    AU: "AU",
  });
  
  const LEVEL = Object.freeze({
    GOLD: "gold",
    SILVER: "silver",
    BASIC: "basic",
  });
  
  const THRESHOLDS = Object.freeze({
    ADULT_AGE: 18,
    GOLD_POINTS: 100,
    CACHE_POINTS: 50,
  });
  
  // Small pure functions remove deep nesting & long function smell
  function isEligibleForGold({ status, age, country, points }) {
    return (
      status === STATUS.ACTIVE &&
      age > THRESHOLDS.ADULT_AGE &&
      country === COUNTRY.AU &&
      points > THRESHOLDS.GOLD_POINTS
    );
  }
  
  function determineUserLevel(user) {
    if (isEligibleForGold(user)) return LEVEL.GOLD;
  
    const isActiveAdultInAU =
      user.status === STATUS.ACTIVE &&
      user.age > THRESHOLDS.ADULT_AGE &&
      user.country === COUNTRY.AU;
  
    if (isActiveAdultInAU) return LEVEL.SILVER;
  
    return LEVEL.BASIC;
  }
  
  // Reusable helper removes duplicate code
  function formatLog(label, user, value) {
    return `${label}:${user.name} ${value}`;
  }
  
  function shouldCacheUser(points) {
    return points > THRESHOLDS.CACHE_POINTS;
  }
  
  // ✅ Split responsibilities: manager orchestrates, helpers do logic
  class UserProcessor {
    constructor() {
      this.currentUser = null; // consistent naming
      this.userData = {};
      this.logs = [];
      this.cache = {};
    }
  
    processUser(user) {
      const level = determineUserLevel(user);
  
      this.userData = { level };
  
      this.logs.push(formatLog("USER", user, `LEVEL:${level}`));
      this.logs.push(formatLog("USER", user, `AGE:${user.age}`));
  
      this.cache[user.name] = shouldCacheUser(user.points);
  
      this.currentUser = user;
      return this.userData;
    }
  }
  
  export { AppManager, UserProcessor, determineUserLevel };