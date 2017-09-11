import React from 'react';
import Message from './Message';
export default class MessageList extends React.Component{
   render(){
       return (
           <ul className="list-group">
               {
                   this.props.messages.map((message,index)=>{
                       return <Message deleteMessage = {this.props.deleteMessage} message={message} key={index}></Message>
                   })
               }
           </ul>
       )
   }
}