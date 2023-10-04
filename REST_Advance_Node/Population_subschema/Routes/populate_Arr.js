const express = require("express");
const mongoose = require("mongoose");
const { dog, owner } = require("../schemamodel");
var todo = mongoose.Types.ObjectId;
const router = express.Router();
router.route("/updatearr").get((req, res, next) => {
  dog.findOne({ name: "tiger" }).exec((err, checkdata) => {
    // console.log(checkdata);
    req.childSchId = checkdata._id;
    // res.json(checkdata);
    // console.log(req.childSchId);
  });
  req.childSchId = todo(req.childSchId);
  console.log(req.childSchId);
  owner.findOneAndUpdate(
    { name: "abhiraj" },
    { $push: { doggie: req.childSchId } },
    (err, responds) => {
      if (err) throw err;
      console.log("updated");
      res.send("<h1>updated</h1>");
    }
  );
});
module.exports = router;
