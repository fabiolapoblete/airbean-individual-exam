const express = require("express");
const router = express.Router();
const { getProducts, addProduct } = require("../model/products");

router.get("/", async (req, res) => {
  const products = await getProducts();

  res.send({ success: true, products: products });
});

router.post("/", async (req, res) => {
  const { id, title, desc, price } = req.body;
  const product = {
    id: id,
    title: title,
    desc: desc,
    price: price,
  };
  addProduct(product);
  res.send({ success: true, message: "Product was added" });
});

module.exports = router;
