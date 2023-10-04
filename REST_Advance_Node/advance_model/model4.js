// const { sanitize } = require('express-validator');
const mongoose = require('mongoose');
var sch = new mongoose.Schema({
    username: {
        type:String,
        Unique:true
    },
    password:  {
        type:String,
        Unique:true
    },
    gmail: {
        type: String
        // required: true// it  must be there inside data everytime
    },
    confirmpass: String,
    address: {
        type: String,
        // minlength:[3,"error please enter atleast 3 word "],
        Maxlength:60,
        trim:true
    },
    phone: {
        type: Number,
        default: 0,
        validate: function (value) {
            if (value < 10) {
                throw new error("value should be more than 9");
            }
        }
    },
    salary: Number,
    month: Number,
    total: Number
});
// sch.path('total').get((val) => {
//     return (this.month * this.salary);
// });
// sch.methods.totalscore=()=>{
//     return this.salary*this.month;
// }

module.exports = new mongoose.model('model4', sch);


