const nedb = require("nedb-promise");

// Create admin database
const adminDB = new nedb({ filename: "admin.db", autoload: true });

function addNewAdmin(newAdmin) {
  adminDB.insert({ newAdmin });
  console.log("utils.js: added new user with API key:", newAdmin.key);
}

module.exports = addNewAdmin;
