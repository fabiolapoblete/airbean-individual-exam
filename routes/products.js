const express = require("express");
const router = express.Router();
const getProducts = require("../model/products");

router.get("/", async (req, res) => {
  const products = await getProducts();

  res.send({ success: true, products: products });
});

module.exports = router;
