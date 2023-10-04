const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sch = mongoose.Schema(
  {
    user: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    gmail: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
        },
      },
    ],
  },
  { strict: true, strictQuery: false }
);
sch.pre("save", function (next) {
  if (this.isModified("password")) {
    // first time or update
    this.password = bcrypt.hashSync(
      this.password,
      this.password.toString().length
    );
  }
  next();
});
sch.methods.authToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.key);
  this.tokens = this.tokens.concat({ token: token });
  this.save((err, result) => {
    if (err) console.log("not get saved token");
    console.log("token authfunction " + result);
  });
  return token;
};
module.exports = mongoose.model("user_detail", sch);
