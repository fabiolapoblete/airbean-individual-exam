const nedb = require("nedb-promise");
const productsDB = new nedb({ filename: "products.db", autoload: true });
