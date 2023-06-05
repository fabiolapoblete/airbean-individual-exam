const express = require("express");
const cors = require("cors");

const signupRouter = require("./routes/signup");

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
app.use("/api/user/signup", signupRouter);

app.listen(port, () => {
  console.log(`Server is listening to port ${port}...`);
});
