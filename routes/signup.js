const express = require("express");
const { hashPassword } = require("../bcrypt");
const { addNewAdmin } = require("../model/admin");
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await hashPassword(password);

  addNewAdmin(username, hashedPassword);

  res.send({ success: true, message: "New admin was added" });
});

module.exports = router;
