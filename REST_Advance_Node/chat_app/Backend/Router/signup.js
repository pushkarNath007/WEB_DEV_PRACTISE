const express = require("express");
const router = express.Router();
const model = require("../model");
const checksign = require("../middleware/signup");
router.route("/signup").post((req, res, next) => {
  // console.log("point 1");
  //   console.log(req.body);
  const { user, gmail, password } = req.body;
  //   console.log(user, gmail, password);
  model.create({ user, gmail, password }, (err, result) => {
    if (err) throw err;
    req.gmail = result.gmail;
    res.sendStatus(200);
  });
});
module.exports = router;
