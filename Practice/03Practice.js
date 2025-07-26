// MongoDB Basics ->

// It is basically a NoSql database means we can store stuctured and semi structured data both.
// It stores the data in BSON documents(JSON like format).

// Connecting MongoDB to Node.js using Mongoose ->
    
// const mongoose = require("mongoose");

// mongoose.connect("url", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true;
// })
//     .then(() => console.log("MongoDB Connected"));
//     .catch (err => console.error(err));
    
// // Mongoose ->

// It is an ODM(object data modeling) library for MongoDB in Node.js. It helps you to define the schema for the data, apply validation and interact with the database easily.

// Schema define the structure of the documents in a MongoDB collection.

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     age: { type: Number, min: 18 },
// });

// Model - It is created from a schema. It represents a MongoDB collection and provides methods to interact with the database.

// const User = mongoose.model('User', userSchema);

