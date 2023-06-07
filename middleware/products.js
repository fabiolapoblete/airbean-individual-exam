const { findProduct } = require("../model/products");

function validateProduct(req, res, next) {
  const requiredProperties = ["id", "title", "desc", "price"];
  const bodyProperties = Object.keys(req.body);

  const hasProperties = requiredProperties.every((property) =>
    bodyProperties.includes(property)
  );
  const noAdditionalProperties = bodyProperties.every((property) =>
    requiredProperties.includes(property)
  );

  if (hasProperties && noAdditionalProperties) {
    next();
  } else {
    res.status(400).send({
      success: false,
      message: "The product you are trying to add is in the wrong format",
    });
  }
}

async function productExists(req, res, next) {
  const productId = req.body._id;
  const product = await findProduct(productId);
  if (product) {
    next();
  } else {
    res.status(401).send({
      success: false,
      message: "The product you are trying to remove does not exist",
    });
  }
}

module.exports = { validateProduct, productExists };
