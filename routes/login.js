const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  //hur får jag admin från min middleware?
  const token = jwt.sign({ username: user.username }, "a1b1c1", {
    expiresIn: 600,
  });

  res.send({ success: true, token: token });
});

module.exports = router;
