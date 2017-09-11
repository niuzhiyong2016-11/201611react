import React from 'react';
import ReactDOM  from 'react-dom';
import {App,Home,Profile,User,UserAdd,UserList,UserDetail} from './components';
require('bootstrap/dist/css/bootstrap.css');
require('./index.css');
/**
 * Router 路由容器
 * Route 路由规则
 */
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
// Router会成一切组件的容器和管理者
//hashHistory 就是以#作为路径
// path是路径 components是当路径匹配的时候渲染的组件
// IndexRoute 默认路由
ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" components={App}>
                        <IndexRoute components={Home}/>
                        <Route path="home" components={Home}/>
                        <Route path="user" components={User}>
                            <Route path="list" components={UserList}/>
                            <Route path="add" components={UserAdd}/>
                            <Route path="detail/:id" components={UserDetail}/>
                        </Route>
                        <Route path="profile" components={Profile}/>
                    </Route>
                </Router>,
    document.querySelector('#container'));
{/*<App>
   <User/>
</App>*/}
