require("./connect");
// const { MongoErrorLabel } = require("mongodb")
const mongoose = require("mongoose");
const model = require("./model");
const cookieParser = require("cookie-parser");
mongoose.set("strictQuery", true);
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
// alowing cors
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   // res.header(
//   //   "Access-Control-Allow-Headers",
//   //   "Origin, X-Requested-With, Content-Type, Accept"
//   // );
//   next();
// });
const signup = require("./Router/signup");
const login = require("./Router/login");
const gmailer = require("./Router/gmailer");
app.use(signup);
app.use(login);
app.use(gmailer);

app.listen(4000, (err) => {
  if (err) console.log(err);
});
