const express = require("express");
const {
  getProducts,
  addProduct,
  removeProduct,
  updateProduct,
} = require("../model/products");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getProducts();

  res.send({ success: true, products: products });
});

// Router for adding product to database
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

// Router for removing product from database
router.delete("/", async (req, res) => {
  const productId = req.body._id;

  removeProduct(productId);
  res.send({ success: true, message: "Product was removed" });
});

// Router for updating a product in the database
router.put("/", async (req, res) => {
  const productId = req.body._id;
  const properties = req.body.properties;

  updateProduct(productId, properties);
  res.send({ success: true, message: "Product was updated" });
});

module.exports = router;
