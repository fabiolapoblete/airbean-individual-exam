const express = require("express");
const { hashPassword } = require("../bcrypt");
const addNewAdmin = require("../database/utils");
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await hashPassword(password);
  const key = generateApiKey();

  const newAdmin = {
    username: username,
    password: hashedPassword,
    role: "admin",
    key: key,
  };

  addNewAdmin(newAdmin);

  res.send({ success: true, message: "New admin was added", key: key });
});

function generateApiKey() {
  const allowed = "0123456789abcdef";
  let key = "";
  for (let i = 0; i < 12; i++) {
    let index = Math.floor(Math.random() * allowed.length);
    key += allowed[index];
  }
  return key;
}

module.exports = router;
