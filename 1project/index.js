// setting up parsers for FormData
    
// setting up ejs for ejs Pages

// setting up public static files
// install ejs from npm
// setup ejs as a middleware for view engine

// dynamic routing

// hum log kai baar kuch routes dekhte hai unme sirf ek hu hissa change hota hai

// how to get data coming from the fronntend at backend route

const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render("index");
});

app.get('/profile/:username', (req, res) => { 
    req.params.username
    res.send(req.params.username + "'s profile page");
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

