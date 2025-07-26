// Node js

// Node js is basically a run time environment used to run js code in server side because mainly the js code is run in client side i.e browser.
// It built on Chrome V8 engine and used to build fast, scalable and real time applications like APIs etc

// Featues

// Single threaded - uses a single thread to handle the requests
// Event driven - Uses an event-driven architecture - it responds to events instead of blocking execution.
// Asynchronous - Uses Callback, promises and async/await to handle time consuming tasks

// Core Modules in Node.js

// Node.js comes with the in -built modules that help in building server - side functionality without installing the external libraries

// 1. fs - File system operation(ReadableByteStreamController, delete, write, etc)


const { log } = require('console');
const fs = require('fs');

fs.readFile('new.txt', 'utf8', (err, data) => {
    if (err) return console.error(err);
    console.log(data);
});

// 2. http - Used to Create web server, handle HTTP requests/responses

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end("Hello world!!")
});

server.listen(3000, () => {
    console.log("Server is running");
})

// http.createServer - it creates an http server and takes a callback req and res

// req - Contains data about http request

// res - Used to send data back to the client

// res.writeHead() - set the status code and Headers

// res.end() - Ends the resposne and sends data


console.log("Start");

setTimeout(() => {
    console.log("Timeout Callback");
    
},0);

Promise.resolve().then(() => {
    console.log("Promise Resolved");
    
})

console.log("End");

// Modules are the resuable piece of code and it supports two main type of module system

// 1. CommonJS (CJS) - Default in Node js

// 2. ECMAScript Modules (ESM) - Modern Standard from ES6


