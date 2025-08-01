const mongoose = require('mongoose');

mongoose.connect("url", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: {type: Number, required: true},
    inStock: {type: Boolean, required: true},
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

