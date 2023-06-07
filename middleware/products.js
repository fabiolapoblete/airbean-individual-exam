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
    res
      .status(400)
      .send({
        success: false,
        message: "The product you are trying to add is in the wrong format",
      });
  }
}

module.exports = validateProduct;
