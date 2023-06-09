const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const secretKey = "mySuperSecretKey123!";

// A token is created and returned when login is successful
router.post("/", async (req, res) => {
  const admin = req.admin;
  const token = jwt.sign(
    { username: admin.username, role: admin.role },
    secretKey,
    {
      expiresIn: 3600, //1h
    }
  );

  res.send({ success: true, token: token });
});

module.exports = router;
