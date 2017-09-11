const MESSAGES = 'MESSAGES';
const URL = 'http://localhost:3000/messages';
import $ from 'jquery';
module.exports = {
    //增加消息
    add(message){
        return $.post(URL,message);
    },
    //删除消息
    remove(_id){
        //在客户端跨域访问服务器的时候会先发送 OPTIONS请求，用来询问服务器支持的方法
        return $.ajax({
            url:URL+`?_id=${_id}`,
            method:'DELETE'
        })
    },
    //查出所有的消息
    list(){
        //$.get 返回一个promise -> then
        return $.get(URL);
    }
}