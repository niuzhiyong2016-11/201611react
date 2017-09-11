const MESSAGES = 'MESSAGES';
module.exports = {
    //增加消息
    add(message){
        let messages = this.list();
        message.id = messages.length>0?messages[messages.length-1].id+1:1;
        message.createAt = new Date();
        messages.push(message);
        localStorage.setItem(MESSAGES,JSON.stringify(messages));
        return messages;
    },
    //删除消息
    remove(id){
        let messages = this.list();
        messages= messages.filter(item=>item.id != id);
        localStorage.setItem(MESSAGES,JSON.stringify(messages));
        return messages;
    },
    //从localStorage里查出所有的消息
    list(){
        //从localStorage中获取key对应的值
        let messageStr = localStorage.getItem(MESSAGES);
        let messages = [];//先定义一个空数组
        if(messageStr && messageStr.startsWith('[')){//如果storage中有值
           try{//尝试把它转成JSON对象
               messages = JSON.parse(messageStr);
               if(!(messages instanceof Array)){
                   messages = [];
               }
           }catch(e){//如果转换失败了，默认也返回空数组
               messages = [];
           }
        }
        return messages;
    }
}