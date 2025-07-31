const express = require('express');

const app = express();
app.use(express.json());

let products = ["Books", "Soap", "Groceries", "Clothes"];

app.get('/products', (req, res) => {
    return res.status(200).json({message: "Data Fetch Successefully", data: products});
})
app.post('/products', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Product name is required" });
    }
    products.push(name);
    return res.status(200).json({ message: "Product added", data: products });
});

app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!products[id]) {
        return res.status(404).json({ error: "Product not found" });
    }

    products[id] = name || products[id];
    return res.status(200).json({ message: "Product updated", data: products });
});

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;

    if (!products[id]) {
        return res.status(404).json({ error: "Product not found" });
    }

    products.splice(id, 1);
    return res.status(200).json({ message: "Product deleted", data: products });
});

app.listen(3000, () => {
    console.log("Server is running");
});