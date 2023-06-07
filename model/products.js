const nedb = require("nedb-promise");

// Creates a product database.
const productsDB = new nedb({ filename: "products.db", autoload: true });
// Import of json file with menu
const menu = require("../products.json");
const products = menu.products;

// A one time function that imports the menu from the json file and adds it to the database
function importProducts() {
  products.forEach((product) => {
    productsDB.insert({ product: product });
  });
}
// Calling the function one time to fill the products database.
//importProducts();

// Function to get all products from the products database.
async function getProducts() {
  return await productsDB.find({});
}

function addProduct(product) {
  const createdAt = new Date();
  product.createdAt = createdAt.toLocaleString();
  productsDB.insert({ product });
}

async function findProduct(productId) {
  return await productsDB.findOne({ _id: productId });
}

async function removeProduct(productId) {
  return await productsDB.remove({ _id: productId });
}

async function updateProduct(productId, properties) {
  const updatedProperties = {};
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      updatedProperties["product." + key] = properties[key];
    }
  }
  updatedProperties["product.modifiedAt"] = new Date().toLocaleString();

  productsDB.update({ _id: productId }, { $set: updatedProperties });
}

module.exports = {
  getProducts,
  addProduct,
  findProduct,
  removeProduct,
  updateProduct,
};
