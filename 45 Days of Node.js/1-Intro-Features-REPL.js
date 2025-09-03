// ===============================
// 📌 What is JavaScript?
// ===============================

// JavaScript is a high-level, lightweight, and interpreted programming language 
// used to make web pages interactive and dynamic.
// It is one of the core web technologies alongside HTML and CSS. 
// JavaScript can run on both the client side (in browsers) and the server side via Node.js.


// ===============================
// 📌 What is Node.js?
// ===============================

// Node.js is a runtime environment that allows JavaScript to run outside the browser, i.e., on the server side.
// It is built on Google Chrome's V8 JavaScript engine and follows an event-driven, non-blocking (asynchronous), 
// single-threaded architecture, making it highly scalable and efficient for I/O-intensive applications.


// ===============================
// 📌 REPL (Read - Evaluate - Print - Loop)
// ===============================

// REPL is an interactive shell that comes with Node.js.
// It allows you to execute JavaScript code snippets quickly without creating a file.


// ===============================
// 📌 Uses of Node.js
// ===============================

/*
1. Web Servers & REST APIs
   - Build lightweight, fast APIs using frameworks like Express or Nest.js.

2. Microservices & Distributed Systems
   - Each service (e.g., authentication, payments, product service) can be built as a small Node.js application.

3. Real-time Applications
   - Build chat apps, live notifications, gaming servers.
   - Node.js with WebSocket enables real-time communication.
*/


// ===============================
// 📌 Features of Node.js
// ===============================

/*
1. Single-threaded & Event-driven
   - Node.js uses a single thread with an event loop to handle multiple client requests.
   - Instead of blocking one request until completion, Node puts I/O operations in the background and continues processing others.
*/
setTimeout(() => console.log("Task 1 done"), 2000);
console.log("Task 2 is done");

/*
2. Asynchronous & Non-blocking I/O
   - File, database, and network calls don’t block the main thread, 
     making Node.js very efficient for I/O-heavy applications.

3. Cross-Platform
   - Node.js applications can run on Windows, Linux, and macOS.

4. Rich Ecosystem (NPM)
   - Node Package Manager provides the largest ecosystem of open-source libraries 
     (e.g., mongoose, express, jsonwebtoken, bcrypt).

5. Built-in Modules
   - Node.js comes with core modules like fs, http, path, os, crypto, etc.
*/


// Example: Importing Express (third-party package)
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Node.js World!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
