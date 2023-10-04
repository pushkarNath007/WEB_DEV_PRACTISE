require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const { MongoErrorLabel } = require("mongodb");
const router = express.Router();
const model = require("../model");

const func = async (mail_id) => {
  //   process.env.MAIL_ID = mail_id;
  const transport = await nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "21BCS6590@cuchd.in",
      pass: process.env.PASS,
    },
  });
  let code = Math.floor(Math.random() * (2034 - 1045) + 1045);
  code = code.toString();

  const sendedmail = await transport.sendMail(
    {
      from: "21BCS6590@cuchd.in",
      to: mail_id,
      subject: "Verfication code",
      text: code,
    },

    (err, data) => {
      if (err) throw err;
    }
  );
  return code;
};
router
  .route("/verification")
  .get((req, res, next) => {
    console.log(req.query._id);
    model.findById(req.query._id).exec((err, result) => {
      // console.log("point3");
      // if (err) throw err;
      if (result != null)
        res.cookie("code", func(result.gmail), {
          httpOnly: true,
          expires: new Date(Date.now() + 30000),
        });
      // console.log("Point 4");
      // console.log(result);
    });
  })
  .post((req, res, next) => {
    if (req.cookies.code == req.body.code) {
    } else {
      model.findByIdAndRemove(req.query._id).exec((err, result) => {
        if (err) throw err;
        res.sendStatus(403);
      });
    }
    console.log(req.cookies.code);
    res.clearCookie(code);
    res.sendStatus(200);
  });

module.exports = router;
