import productModel from "../models/productModel.js";

const showProducts = async (req,res) => {
const products = await productModel.find()
res.render("store/product",{products})
    // res.json(products)
}

export {showProducts}