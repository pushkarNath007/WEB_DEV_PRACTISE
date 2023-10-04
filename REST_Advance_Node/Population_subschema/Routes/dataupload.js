const mongoose = require("mongoose");
const { dog, owner } = require("../schemamodel");
const express = require("express");
const router = express.Router();

router.route("/data").get((req, res, next) => {
  const dogdata = [
    { name: "rambo", dogtype: "german shephard" },
    { name: "julie", dogtype: "lebra" },
    { name: "tiger", dogtype: "pitbull" },
  ];
  const ownerdata = [
    { name: "abhiraj", area: "rural" },
    { name: "supriya", area: "hilly" },
    { name: "uday", area: "plain" },
  ];
  // dog.create([
  //     {name:"rambo",dogtype:"german shephard"},
  //     {name:"julie",dogtype:"lebra"},
  //     {name:"tiger",dogtype:"pitbull"}
  // ],(err,dogresult)=>{
  //     if(err) throw err;
  //     console.log("dog data->"+dogresult);
  // })
  owner.create(ownerdata, (err, ownerres) => {
    if (err) throw err;
    // console.log("owner data->"+ownerres);
    console.log(ownerres);
    res.json(ownerres);
  });
  // owner.find({}).exec((err,result)=>{
  //     console.log("owner data->"+result);
  //     // res.json(result);
  // })
  // dog.find({}).exec((err,check)=>{
  //     // console.log("dog data->"+check);
  //     res.json(check);
  // })
});
module.exports = router;
