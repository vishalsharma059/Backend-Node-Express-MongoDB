import { rejects } from "assert";
import { set } from "mongoose";
import { resolve } from "path";
import { loadEnvFile } from "process";
import { callbackify } from "util";

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function div(a, b) {
  if (b == 0) {
    throw new Error("Divide by 0 is not allowed");
  }
  return a / b;
}

//  dependeency and dev dependency - So dependency are the actual packages that are required in production but dev dependency are only required in local development and testing

// Creating a http server

// import http from "http";

// const server = http.createServer((req, res) => {
//     console.log(req, 'req');
//     res.writeHead(200, {
//         "Content-Type" : "text/plain"
//     })
//     res.end("Hello Node!!")
// });

// const port = 3000;

// server.listen(port, () => {
//     console.log(`Server is listening to port ${port}`);
// })

// callbacks , promises, async await and event emitter

// Callbacks are basically functions that passed as an arguments.

// Callback hell -> nested callback

// setTimeout(() => {
//     setTimeout(() => {
//         setTimeout(() => {
//             console.log("Hii");

//         }, 100);
//     }, 100);
// }, 100);

function person(name, callbackfunction) {
  console.log(`Hello ${name}`);
  callbackfunction();
}

function address() {
  console.log("Mawana, Meerut!!");
}

person("Vishal", address);

// Promises are better and better way to handle the asynchronous code

function delayfn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("Hii");

delayfn(2000).then(() => console.log("After 2 sec promised resolved!!"));

console.log("END");

function dividefn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Can not perform division by 0");
    } else {
      resolve(num1 / num2);
    }
  });
}

dividefn(10, 0)
  .then((result) => console.log("result", result))
  .catch((error) => console.log("error", error));


// async await

async function delayGreet( name) {
    await delayfn(3000)
    console.log(name);   
}

delayGreet("Vishal");

async function dividefn1(num1, num2) {
    try {
        if (num2 === 0) throw new Error("Can not divide by 0");
        return num1 / num2;
    } catch (error) {
        console.error("error", error);
    }
}

// async function mainFn() {
//     console.log(await dividefn1(10, 0));
//     return null;
// }
// mainFn();



