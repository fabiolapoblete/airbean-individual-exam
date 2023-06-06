const bcrypt = require("bcryptjs");

async function hashPassword(password) {
  const hashed = await bcrypt.hash(password, 10);
  return hashed;
}

async function comparePassword(password, hashedPassword) {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
}

module.exports = { hashPassword, comparePassword };
