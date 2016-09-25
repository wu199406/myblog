
var mongoose = require("mongoose");    //引用mongoose模块

//mongoose.connect("mongodb://localhost/myblog");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName:String,
    passWord:String,
    createTime:{type: Date,default:Date.now()}
});

var userModel = mongoose.model("user",userSchema);//声明集合

/*user.save(function (err) {
 if (err)
 {
 console.log("err");
 console.log(err);
 }
 else
 {
 console.log("true");
 }

 });*/

/*userModel.find({},function (err,docs) {
    if (err)
    {
        console.log(err);
    }
    else
    {
        console.log("test2:"+docs);
    }
});*/

module.exports = userModel;



