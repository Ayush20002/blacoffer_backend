require("dotenv").config();
const connectDB = require("./config/database");
const Product = require("./model/product");
const ProductJson = require("./jsondata.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.create(ProductJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start(); // Invoking the start function
