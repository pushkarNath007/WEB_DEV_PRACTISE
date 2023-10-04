const mongoose = require("mongoose");
const model = require("../model");

const checkSignUp = (req, res, next) => {
  console.log("checking 1");
  const result = model.findOne({
    $or: [{ user: req.body.user }, { gmail: req.body.gmail }],
  });
  result.exec((err, data) => {
    if (err) res.sendStatus(500);
    else if (data != null) {
      res.sendStatus(409);
    } else {
      next();
    }
  });
};
module.exports = checkSignUp;
