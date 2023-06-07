const express = require("express");
const router = express.Router();
const {
  getProducts,
  addProduct,
  removeProduct,
  findProduct,
  updateProduct,
} = require("../model/products");

router.get("/", async (req, res) => {
  const products = await getProducts();

  res.send({ success: true, products: products });
});

// Router for adding product
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

// Router for removing product
router.delete("/", async (req, res) => {
  const productId = req.body._id;
  removeProduct(productId);
  res.send({ success: true, message: "Product was removed" });
});

router.put("/", async (req, res) => {
  const productId = req.body._id;
  const properties = req.body.properties;

  updateProduct(productId, properties);
  res.send({ success: true, message: "Product was updated" });
});

module.exports = router;
