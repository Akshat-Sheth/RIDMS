const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error")
const fileUpload = require("express-fileupload");
const path = require("path");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}


const product = require("./routes/productRoute");
const order = require("./routes/orderRoute");
const user = require("./routes/userRoute")
const payment = require("./routes/paymentRoute")

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('api/v1',product)
app.use("/api/v1", order);
app.use("/api/v1",user)
app.use("/api/v1",payment)

app.use(errorMiddleware)

module.exports = app;
