const express = require("express");
const mongoose = require("mongoose");
const { dog, owner } = require("../schemamodel");
var todo = mongoose.Types.ObjectId;
const router = express.Router();
router.route("/update").get((req, res, next) => {
  const dogupdata = todo("63d7d0edcb1b1f198a21d1a1");
  owner.findByIdAndUpdate(
    "63d7d0edcb1b1f198a21d1a4",
    {
      dogs: dogupdata,
    },
    (err) => {
      if (err) throw err;
    }
  );
});
module.exports = router;
