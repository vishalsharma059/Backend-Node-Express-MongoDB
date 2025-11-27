import { set } from "mongoose";
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
