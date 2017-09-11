var express = require('express');
let bodyParser = require('body-parser');
let Message = require('./model').Message;
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req,res,next){
    //允许客户端发送的来源
  res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
  //允许客户端发送的方法
  res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE');
  if(req.method == 'OPTIONS'){
      res.end();
  }else{
      next();
  }

});
/**
 * 还是restful风格接口来写
 * 操作资源的时候 url是一样
 */
//查询所有消息
app.get('/messages', function (req, res) {
    Message.find({}).then((messages) => {
        res.send(messages);
    }, (err) => {
        res.send(err);
    })
});
//增加消息
app.post('/messages', function (req, res) {
    let message = req.body;
    Message.create(message).then((doc) => {
        return Message.find({});
    }).then((messages) => {
        res.send(messages);
    }).catch((err)=>{
        res.end(err);
    })
});
//删除消息
app.delete('/messages', function (req, res) {
    Message.remove({_id: req.query._id})
        .then((result) => {
            return Message.find({});
        })
        .then((messages) => {
            res.send(messages);
        }).catch((err)=>{
        res.end(err);
    })
});

app.listen(3000);