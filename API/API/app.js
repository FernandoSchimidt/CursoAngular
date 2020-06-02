const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const departmentController = require("./controllers/departmentController");
const productsController = require("./controllers/productController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/http_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/departments", departmentController);
app.use("/products", productsController);

app.listen(3000, () => {
  console.log("App running");
});
