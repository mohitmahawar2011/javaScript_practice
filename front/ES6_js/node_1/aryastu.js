const mongoose = require("mongoose");
let arya = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    income:String,
    password:String
});
module.exports = mongoose.model("aryastudents",arya);