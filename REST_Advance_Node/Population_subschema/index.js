require("dotenv").config();
require("./connection");
// const mongoose = require("mongoose");
const dataUploadRouter = require("./Routes/dataupload");
const express = require("express");
const updaterouter = require("./Routes/populateOne");
const updateArrRouter = require("./Routes/populate_Arr");
const app = express();
const { dog, owner } = require("./schemamodel");
app.use(dataUploadRouter);
app.use(updateArrRouter);
app.route("/actual").get(async (req, res, next) => {
  await owner
    .findOne({ name: "pushkar" })
    .populate("dogs")
    .exec((err, result) => {
      console.log(result);
      res.json(result);
    });
});
app.use(updaterouter);
app.listen(process.env.PORT, (err) => {
  if (!err) console.log("launched");
});
