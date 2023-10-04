const express = require("express");
const router = express.Router();
const model = require("../model");
// const checksign = require("../middleware/login");
const bcrypt = require("bcryptjs");
router.route("/login").post((req, res, next) => {
  model.findOne({ gmail: req.body.gmail }).exec((err, result) => {
    console.log("position 1" + result);
    if (result != null) {
      console.log("position 2");
      bcrypt.compare(req.body.password, result.password, (err, data) => {
        if (data) {
          console.log("position 3");
          const token = result.authToken();
          console.log(token);
          res.cookie("token", token, {
            expires: new Date(Date.now() + 4000),
            httpOnly: true,
          });
          console.log("cookie token ->" + req.cookies.token);
          res.sendStatus(200);
        } else res.sendStatus(404);
      });
    } else {
      res.sendStatus(404);
    }
  });
});
module.exports = router;
