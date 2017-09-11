import React from 'react';

export default class UserDetail extends React.Component {
    //props是属性对象
    constructor(props) {
        super(props);
        //内部初始
        this.state = {user:{}};
    }

    //组件加载完毕
    componentDidMount() {
        var userStr = localStorage.getItem('users');
        var users = userStr ? JSON.parse(userStr) : [];
        let id = this.props.params.id;
        let user = users.find((user)=>user.id == id);
        this.setState({user});
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            用户名:{this.state.user.name}
                        </li>
                        <li className="list-group-item">
                            邮箱:{this.state.user.email}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}