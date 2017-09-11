import React from 'react';
import {Link} from 'react-router';
import {activeStyle} from './basic';
export default class User extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-2">
                    <ul className="nav nav-pills nav-stacked" role="tablist">
                        <li role="presentation">
                            <Link activeStyle={activeStyle} to="/user/list">用户列表</Link>
                        </li>
                        <li role="presentation" >
                            <Link activeStyle={activeStyle} to="/user/add">新增用户</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10">
                    {this.props.children}
                </div>
            </div>
        )
    }
}