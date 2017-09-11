require('bootstrap/dist/css/bootstrap.css');
import MessageBox from './components/MessageBox';
import React from 'react';
import ReactDOM from 'react-dom';
//引入此工具模块
let utils = require('./api');
//然后把此工作模块作为属性传递给组件
ReactDOM.render(<MessageBox utils={utils}></MessageBox>,document.getElementById('container'));