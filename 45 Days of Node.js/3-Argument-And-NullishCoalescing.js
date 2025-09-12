// =============================
// 🔹 Arguments Object
// =============================
// - Available only inside regular functions (NOT arrow functions).
// - Contains all arguments passed to the function.
// - It is array-like (indexed, has length) but not a real array.

function sum() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // ✅ 10

// ❌ Arrow functions do NOT have "arguments"
const arrowSum = () => {
  try {
    console.log(arguments); // ReferenceError
  } catch (err) {
    console.log("Arrow functions don’t have 'arguments'");
  }
};

arrowSum(1, 2, 3);


// =============================
// 🔹 Default Parameters
// =============================
// Allows setting default values for parameters
// when no value (or "undefined") is passed.

function greet(name = "Hari") {
  return `Hello ${name}`;
}

console.log(greet("Vishal")); // ✅ Hello Vishal
console.log(greet());         // ✅ Hello Hari


// =============================
// 🔹 Rest Parameters (...args)
// =============================
// - Collects remaining arguments into a real array.
// - Replaces the need for "arguments" object.
// - Must always be the LAST parameter.

function multiply(multiplier, ...numbers) {
  return numbers.map(num => num * multiplier);
}

console.log(multiply(2, 1, 2, 3, 4)); // ✅ [2, 4, 6, 8]


// =============================
// 🔹 Nullish Coalescing Operator (??)
// =============================
// - Returns the right-hand value ONLY if the left-hand value is null or undefined.
// - Different from || (OR), which also treats 0, "", false as falsy.

let a = null;
let b = a ?? "Default";
console.log(b); // ✅ Default

let x = 0;
let y = x || 10; // || treats 0 as falsy
console.log(y); // ✅ 10

let z = x ?? 10; // ?? treats only null/undefined as nullish
console.log(z); // ✅ 0
