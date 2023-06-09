const nedb = require("nedb-promise");

// Create admin database
const adminDB = new nedb({ filename: "admin.db", autoload: true });

function addNewAdmin(username, hashedPassword) {
  adminDB.insert({
    username: username,
    password: hashedPassword,
    role: "admin",
  });
}

async function findAdmin(username) {
  return await adminDB.findOne({ username: username });
}

module.exports = { addNewAdmin, findAdmin };
