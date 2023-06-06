const { findAdmin } = require("../model/admin");
const { comparePassword } = require("../bcrypt");

async function validateCredentials(req, res, next) {
  const { username, password } = req.body;

  const admin = await findAdmin(username);
  const hashedPassword = admin.password;

  if (admin) {
    const matchedPassword = await comparePassword(password, hashedPassword);
    if (matchedPassword) {
      req.admin = admin;
      next();
    } else {
      res.status(401).send({ message: "Incorrect password" });
    }
  } else {
    res.status(404).send({ message: "Incorrect username" });
  }
}

module.exports = validateCredentials;
