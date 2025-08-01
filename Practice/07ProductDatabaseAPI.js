const express = require("express");
const mongoose = require("mongoose");

const Product = require("./06ProductSchema");

const app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ newProduct });
  } catch (err) {
    res.status(400).json({ error: "Failed to add product" });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ updatedProduct });
  } catch (err) {
    res.status(400).json({ error: "Failed to Update product" });
  }
});
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product Deleted Successfully" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete product" });
  }
});
