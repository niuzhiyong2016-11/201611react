import React from 'react';
import {hashHistory} from 'react-router';
export default class UserList extends React.Component{
    handleClick(){
        var userStr = localStorage.getItem('users');
        var users = userStr ? JSON.parse(userStr) : [];
        var user = {
            name:this.refs.name.value,
            email:this.refs.email.value
        }
        user.id = users.length>0?users[users.length-1].id+1:1;
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));
        hashHistory.push('/user/list');
    }
    render(){
        return (
            <form  className="form-horizontal" role="form">
                <div className="form-group">
                    <label className="control-label">姓名</label>
                    <input ref="name" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="control-label">邮箱</label>
                    <input ref="email" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <button type="button" onClick={this.handleClick.bind(this)} className="btn btn-primary">添加用户</button>
                </div>
            </form>
        )
    }
}