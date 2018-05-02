var mongoose = require("mongoose");

module.exports = mongoose.model("Student",{
    "name":String,
    "age":Number,
    "sex":String,
    "huji":String,
    "shuxue":Number,
    "yuwen":Number,
    "tiyu":Number
})