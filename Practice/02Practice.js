// HTTP methods are the type of action to perform on a resource in a RESTful API.

const express = require("express");

// const app = express();

app.use(express.json());

app.get("./users", (req, res) => {
  res.json([{ id: 1, name: "Vishal" }]);
});

app.post("./users", (req, res) => {
  const newUser = req.body;
  res.status(201).json(newUser);
});

app.put("./users/:id", (req, res) => {
  res.json({ message: "User Updated" });
});

app.delete("./users/:id", (req, res) => {
  res.json({ message: "User Deleted" });
});

app.listen(3000, () => console.log("Server is running"));

// A   RESTful API i.representational state transfer is an artitectural style for designing stateless web services that use standard HTTP methods to interact with the resource.

// Core principles of REST ->

//     1. Stateless - Each request is independent.The server does not store the client session.

//     2. Client - Server Sepration - Frontend(client) and backend(Server) are seprated.

// Status code ->
// 200 - Success, 201 - Created, 400 - Bad request, 401 - Unauthorized, 404 - Not Found, 500 - Internal Server Error

// Login api ->

const express = require("express");

// const app = express();

app.use(express.json());

app.post("./login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid user or password!!" });
    }

    res.status(200).json({ message: "Login Successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

const fs = require('fs');

const content = "Hello Node.js";

fs.writeFile('new.txt', content, 'utf8', (error) => {
  if (error) {
    console.log("File not write");
    return;
  }
  console.log("Successfully write");
});

// By default, Node write in buffer format. If we don't secify 'utf8', it may write binary data or give unexpected results when dealing with strings.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/plain'
  })
  res.end("Hello Vishal");
})

server.listen(3000, () => {
  console.log("Server is running");
})

const express = requie('express');

const app = express();
app.use(express.json());

app.get('/api', (req, res) => {
  return res.status(200).json({message: "Api fetch successfully"})
})

app.get('/', (req, res) => {
  return res.status(200).json({message: "Welcome Home"})
})

app.use((req, res) => {
  return res.status(404).json({message: "404 notfound"})
})