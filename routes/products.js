const express = require("express");
const router = express.Router();
const { getProducts, addProduct, removeProduct } = require("../model/products");

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

// router.post("/", async (req, res) => {
//   //Vilken produkt ska updateras? gå på _id?, vilken parameter?
//   //Bara tillåtet att skicka med id, title, desc, price
//   //Lägg till modifiedAt.
//   //importera funktion updateProduct
//   const { id, title, desc, price, _id } = req.body;

// });
module.exports = router;
