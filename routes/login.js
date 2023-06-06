const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const admin = req.admin;
  const token = jwt.sign(
    { username: admin.username, role: admin.role },
    "mySuperSecretKey123!",
    {
      expiresIn: 6000,
    }
  );

  res.send({ success: true, token: token });
});

module.exports = router;
