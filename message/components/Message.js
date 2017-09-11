import React from 'react';
import moment from 'moment';
require('moment/locale/zh-cn.js');
export default class Message extends React.Component{
  render(){
      return (
          <li className="list-group-item">
              {this.props.message.name}:{this.props.message.content}
              <button className="btn btn-danger btn-sm" onClick={()=>this.props.deleteMessage(this.props.message._id)} >删除</button>
              <span className="pull-right">{moment(this.props.message.createAt).fromNow()}</span>
          </li>
      )
  }
}