import mongoose from "mongoose";
import dotenv from "dotenv";
import productModel from "./models/productModel.js";
import dbConnect from "./config/db.js";

dotenv.config();

const addSampleProducts = async () => {
  await dbConnect();
  await productModel.deleteMany({});
  const products = [
    {
      name: "Coffee",
      price: 5.99,
      desc: "Fresh brewed coffee",
      imageUrl: "https://via.placeholder.com/300x200?text=Coffee"
    },
    {
      name: "Tea",
      price: 3.99,
      desc: "Hot green tea",
      imageUrl: "https://via.placeholder.com/300x200?text=Tea"
    }
  ];
  await productModel.insertMany(products);
  console.log("Sample products added");
  process.exit(0);
};

addSampleProducts();