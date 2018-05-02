var Mock = require("mockjs");
var mongoose = require("mongoose");

var config = require('./config/db.js');

mongoose.connect(config.dbUrl);

var Student = require("./models/Student.js");

var arr = Mock.mock({
    "results|5000":[
        {
            "name":function(){
                return Mock.mock('@cname()')
            },
            "age|10-30":15,
            "sex|1":["男","女","未知"],
            "yuwen|0-100":50,
            "shuxue|0-100":50,
            "tiyu|0-100":50
        }
    ]
});

// 把数据插入到数据库中
// 先删除所有的数据
Student.remove({}).exec(function(err,docs){
    console.log(`已经删除了${docs}条数据`);
    Student.create(arr.results,function(err,docs){
        console.log(`已经插入了${docs.length}条数据`);
        mongoose.disconnect();
    })

})
