const express = require("express");
const { hashPassword } = require("../bcrypt");
const { addNewAdmin } = require("../model/admin");
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await hashPassword(password);
  const key = generateApiKey();

  addNewAdmin(username, hashedPassword, key);

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
