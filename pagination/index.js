import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";


const app = express();
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongo DB is connected!!"))
    .catch(err => console.log(err))


const port = process.env.PORT || 4000;


app.use("/products", productRoutes);

app.listen(port, () => {
    console.log(`Server is running on  ${port}`);
    
})