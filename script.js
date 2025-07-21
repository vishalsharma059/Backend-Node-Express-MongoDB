const express = require('express');
const app = express();    

app.use((req, res, next) => {
    console.log("middlware is running");
    next();
 }
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => { 
    res.send("what's up buddy?");
})

app.get('/profile', (req, re, next) => { 
    res.send("This is the profile page");
})

app.get('/about', (req, res, next) => {
    return next(new Error("This is an error"));
    res.send("This is the about page");
});


app.use((err, req, res, next) => { 
    console.error(err.stack);
    res.status(500).send('Something broke!');
})
app.listen(3001);

