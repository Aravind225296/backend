import productModel from "../models/productModel.js";

const getProducts = async (req, res) => {
  const products = await productModel.find();
  res.render("product/index", { products });
};

const addProduct = async (req, res) => {
  const product = req.body;
  await productModel.create(product);
  res.redirect("/products");
};

const addProductForm = async (req, res) => {
  res.render("product/add");
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  await productModel.findByIdAndDelete(id);
  res.redirect("/products");
};

const editProductForm = async (req, res) => {
  const id = req.params.id;
  const product = await productModel.findOne({ _id: id });
  res.render("product/edit", { product });
};

const saveProduct = async (req, res) => {
  const id = req.params.id;
  await productModel.findByIdAndUpdate(id, req.body);
  res.redirect("/products")
};

export {
  getProducts,
  addProduct,
  addProductForm,
  deleteProduct,
  editProductForm,
  saveProduct
};