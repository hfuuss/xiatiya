var url = require("url");
var Student = require("../models/Student.js");

exports.getAllstudents = function(req,res){
    var keyword = url.parse(req.url,true).query.keyword;
    Student.find({"name":new RegExp(keyword,"g")}).exec(function(err,docs){
        res.json({
            "result":docs
        })
    })
}
