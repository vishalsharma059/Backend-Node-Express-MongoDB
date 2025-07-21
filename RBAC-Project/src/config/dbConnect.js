const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB connected: ${connect.connection.host}, Database: ${connect.connection.name}`
    );
  } catch (err) {
    console.log(err);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
