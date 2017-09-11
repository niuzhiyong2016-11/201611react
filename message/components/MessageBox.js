import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
export default class MessageBox extends React.Component{
   // 每个类都有一个构造函数
   constructor(props){
      super(props);
      //在父组件中定义初始消息数组
      this.state = {messages:[]};
   }
   //组件加载到页面之后
   componentDidMount(){
        this.props.utils.list().then((messages)=>{
            this.setState({messages});//短属性
        })
   }
   //修改状态对象中的messages属性，添加一个新的消息
   addMessage(message){
       this.props.utils.add(message).then((messages)=>{
           this.setState({messages});//短属性
       })
   }
   //删除消息
   deleteMessage(id){
       this.props.utils.remove(id).then((messages)=>{
           this.setState({messages});//短属性
       })
   }
   render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 style={{textAlign:'center'}}>珠峰留言版</h3>
                </div>
                <div className="panel-body">
                    <MessageList messages={this.state.messages} deleteMessage = {this.deleteMessage.bind(this)}></MessageList>
                </div>
                <div className="panel-footer">
                    <MessageForm addMessage={this.addMessage.bind(this)}></MessageForm>
                </div>
            </div>
        )
   }
}