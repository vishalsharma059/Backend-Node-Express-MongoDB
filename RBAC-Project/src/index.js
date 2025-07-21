const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/dbConnect');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

connectDB(); // Connect to the database
const app = express();

//Middleware
app.use(express.json());

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/users',userRoutes);

//Start the server

const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

