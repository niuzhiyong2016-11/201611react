import React from 'react';
import {Link} from 'react-router';
import {activeStyle} from './basic';
export default class App extends React.Component{
  render(){
      return (
          <div className="container">
               <nav className="navbar navbar-default" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a href="#/" className="navbar-brand">珠峰</a>
                        </div>
                        <div>
                            <ul className="nav navbar-nav">
                                <li><Link to="/home" activeStyle={activeStyle}>首页</Link></li>
                                <li><Link to="/user" activeStyle={activeStyle}>用户管理</Link></li>
                                <li><Link to="/profile" activeStyle={activeStyle}>个人设置</Link></li>
                            </ul>
                        </div>
                    </div>
               </nav>
              {this.props.children}
          </div>
      )
  }
}