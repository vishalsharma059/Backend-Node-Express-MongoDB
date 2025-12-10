import mongoose from "mongoose";
import Product from "./models/Product.js";
import dotenv from "dotenv"

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connected"));

let dummy = [];


for (let i = 0; i < 100; i++) {
    dummy.push({
        name: `Product ${i}`,
        price: i * 10
    });
}

Product.insertMany(dummy)
    .then(() => {
        console.log("Inserted")
        process.exit();
    });