const { findProduct } = require("../model/products");

// Middleware to validate if given products exists in the product database
async function productsExists(req, res, next) {
  const campaignProducts = req.body.products;
  const products = [];

  for (const product of campaignProducts) {
    const campaignProduct = await findProduct(product._id);
    if (campaignProduct) {
      products.push(campaignProduct);
    }
  }

  if (campaignProducts.length === products.length) {
    next();
  } else {
    res.status(401).send({
      success: false,
      message: "The product with the given id does not exist",
    });
  }
}

module.exports = productsExists;
