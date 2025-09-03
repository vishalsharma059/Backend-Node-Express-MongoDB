// =============================
// 🔹 var vs let
// =============================

// var:
// - Function-scoped
// - Can be redeclared
// - Gets hoisted (initialized with undefined)

// let:
// - Block-scoped
// - Cannot be redeclared in the same scope
// - Hoisted but in the Temporal Dead Zone (TDZ) until initialized

function testVarLet() {
  if (true) {
    var x = 10; // function-scoped
    let y = 20; // block-scoped
  }

  console.log(x); // ✅ 10
  // console.log(y); // ❌ ReferenceError (y is block-scoped)
}

testVarLet();


// =============================
// 🔹 Variable Hoisting
// =============================
// Hoisting = Declarations are moved to the top of the scope,
// but initializations are NOT hoisted.

console.log(a); // ✅ undefined (hoisted, but not initialized)
var a = 5;

// console.log(b); // ❌ ReferenceError (TDZ)
let b = 10;


// =============================
// 🔹 Function Hoisting
// =============================

// ✅ Function declarations are hoisted with their definitions
sayHello();
function sayHello() {
  console.log("Hello");
}

// ❌ Function expressions are hoisted as variables (undefined)
try {
  greet(); // Error: greet is not a function
} catch (err) {
  console.log(err.message);
}

var greet = function () {
  console.log("Hi");
};


// =============================
// 🔹 Arrow Functions
// =============================
// - Shorter syntax
// - Do NOT have their own "this" (lexical scoping)

function add(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;

console.log(add(2, 3));      // ✅ 5
console.log(addArrow(2, 3)); // ✅ 5

// Arrow functions & "this"
const obj = {
  name: "Vishal",
  normalFn: function () {
    console.log("Hello " + this.name); // "this" = obj
  },
  arrowFn: () => {
    console.log("Hello " + this.name); // "this" = outer scope (undefined here)
  }
};

obj.normalFn(); // ✅ Hello Vishal
obj.arrowFn();  // ❌ Hello undefined


// =============================
// 🔹 IIFE (Immediately Invoked Function Expression)
// =============================
// Executes immediately after being defined.
// Useful for creating private scopes and avoiding global pollution.

(function () {
  console.log("IIFE executed!");
})();

(() => {
  console.log("Arrow IIFE executed!");
})();
