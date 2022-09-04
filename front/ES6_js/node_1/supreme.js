const mongoose = require('mongoose');
let supremeschema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name : String,
    email : String,
    classes : String,
    income : String
});
module.exports = mongoose.model('students',supremeschema);