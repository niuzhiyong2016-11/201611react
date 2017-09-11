import React from 'react';
import {Link, hashHistory} from 'react-router';
export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        var userStr = localStorage.getItem('users');
        var users = userStr ? JSON.parse(userStr) : [];
        this.setState({users});
    }

    handleClick() {
        //跳转到新的路径里
        //hashHistory.push('/user/add');
        // console.log(this.context);
        //this.context.router.push('/user/add');

    }

    render() {
        return (
            <ul className="list-group">
                {/*    <li>
                 <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>跳转到添加用户路由</button>
                 </li>*/}
                {
                    this.state.users.map((item, index) => <li className="list-group-item"><Link
                        to={"/user/detail/" + item.id}>{item.name}</Link></li>)
                }
            </ul>
        )
    }
}

UserList.contextTypes = {
    router: React.PropTypes.object
}