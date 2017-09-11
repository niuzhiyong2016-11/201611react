var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://127.0.0.1/messages');
//搭建骨架
let MessageSchema = new mongoose.Schema({
    name:String,
    content:String,
    createAt:{type:Date,default:new Date()}
});
//定义模型并导出
exports.Message = mongoose.model('Message',MessageSchema);