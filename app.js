const express = require("express");
const cors = require("cors");

const app = express();
const port = 80000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method}  ${req.url}`, req.body);
  next();
});

/*HÄR FINNS ALLA ROUTES



*/

app.listen(port, () => {
  console.log(`Server is listening to port ${port}...`);
});
