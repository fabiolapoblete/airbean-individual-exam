const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const secretKey = "mySuperSecretKey123!";

router.post("/", async (req, res) => {
  const admin = req.admin;
  const token = jwt.sign(
    { username: admin.username, role: admin.role },
    secretKey,
    {
      expiresIn: 6000,
    }
  );

  res.send({ success: true, token: token });
});

module.exports = router;
