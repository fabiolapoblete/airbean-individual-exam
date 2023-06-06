const express = require("express");
const cors = require("cors");

const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const productsRouter = require("./routes/products");
const validateCredentials = require("./middleware/login");

const app = express();
const port = 8000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method}  ${req.url}`, req.body);
  next();
});

/*HÄR FINNS ALLA ROUTES


*/

// POST /signup
app.use("/api/admin/signup", signupRouter);

// POST /login
app.use("/api/admin/login", validateCredentials);
app.use("/api/admin/login", loginRouter);

// GET /products
app.use("/api/products", productsRouter);

// app.use( '/api', accessControl )
// // accessControl stoppar request till /api/books om man inte har API-nyckel

app.listen(port, () => {
  console.log(`Server is listening to port ${port}...`);
});
