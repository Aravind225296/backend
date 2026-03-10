import { getProducts,addProductForm,addProduct } from "../controllers/productController.js";
import express from "express";
const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/add", addProductForm)
productRouter.post("/add", addProduct)


export default productRouter