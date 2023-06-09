const jwt = require("jsonwebtoken");
const secretKey = "mySuperSecretKey123!";

function verifyToken(req, res, next) {
  // JWT from autorization in header.
  // Returns role of user
  if (req.headers.authorization) {
    const token = req.headers.authorization.replace("Bearer ", "");
    try {
      const data = jwt.verify(token, secretKey);

      req.role = data.role;

      if (data.role !== "admin") {
        res.status(403).send({ message: "Access denied" });
      } else {
        next();
      }
    } catch (error) {
      res.json({ success: false, error: "Invalid JWT" });
    }
  } else {
    res.status(403).json({ message: "No JWT provided." });
  }
}

module.exports = verifyToken;
