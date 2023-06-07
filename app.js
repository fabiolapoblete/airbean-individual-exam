const express = require("express");
const cors = require("cors");

const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const productsRouter = require("./routes/products");
const validateCredentials = require("./middleware/login");
const { validateProduct, productExists } = require("./middleware/products");
const verifyToken = require("./middleware/auth");

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

// GET/POST/DELETE /products
app.use("/api/products", productsRouter);

app.use("/api/products/add", verifyToken);
app.use("/api/products/add", validateProduct);
app.use("/api/products/add", productsRouter);

app.use("/api/products/remove", verifyToken);
app.use("/api/products/remove", productExists);
app.use("/api/products/remove", productsRouter);

app.use("/api/products/update", verifyToken);
app.use("/api/products/update", productExists);
app.use("/api/products/update", productsRouter);

// app.use( '/api', accessControl )
// // accessControl stoppar request till /api/books om man inte har API-nyckel

app.listen(port, () => {
  console.log(`Server is listening to port ${port}...`);
});
