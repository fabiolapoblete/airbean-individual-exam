const jwt = require("jsonwebtoken");
const secretKey = "mySuperSecretKey123!";

function verifyToken(req, res, next) {
  // Hämta JWT från authorization headern
  //!!Kontrollera rollen admin
  if (req.headers.authorization) {
    const token = req.headers.authorization.replace("Bearer ", "");
    try {
      const data = jwt.verify(token, secretKey);

      console.log(data);
      req.username = data.username;

      next();
    } catch (error) {
      res.json({ success: false, error: "You do not have permission" });
    }
  } else {
    res.status(403).json({ message: "Ingen JWT tillhandahållen." });
  }

  // Verifiera JWT
  // jwt.verify(token, secretKey, (err, decoded) => {
  //   if (err) {
  //     console.log(token, secretKey);
  //     return res.status(401).json({ message: "Ogiltig JWT." });
  //   }

  //   // Kontrollera användarens roll
  //   if (decoded.role !== "admin") {
  //     return res.status(403).json({ message: "Åtkomst nekad." });
  //   }
  //   console.log(decoded.role);

  //   // Sparar användarens uppgifter i request-objektet för att användas i efterföljande rutter
  //   req.user = decoded;
  //   next();
  // });
}

module.exports = verifyToken;
