const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  salary: {
    type: Number,
    required: true,
    min: 0,
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;

const metaDataSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    designation: {
        type: String,
        required: true,
        trim: true,
    }
}, { timestamps: true })


