const nedb = require("nedb-promise");

// Create admin database
const adminDB = new nedb({ filename: "admin.db", autoload: true });

function addNewAdmin(username, hashedPassword, key) {
  adminDB.insert({
    username: username,
    password: hashedPassword,
    role: "admin",
    key: key,
  });
  console.log("utils.js: added new user with API key:", key);
}

async function findAdmin(username) {
  return await adminDB.findOne({ username: username });
}

module.exports = { addNewAdmin, findAdmin };
