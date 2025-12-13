import mongoose from "mongoose"
import { useState } from "react";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    }, 
    category: {
        type: String
    }
}, { timestamps: true })

export default mongoose.model("Product", productSchema);




