import Slider from './Slider';
import React from 'react';
import ReactDOM from 'react-dom';
let images = [
    {src:require('./images/banner1.jpg'),alt:'banner1'},
    {src:require('./images/banner2.jpg'),alt:'banner2'},
    {src:require('./images/banner3.jpg'),alt:'banner3'}
]
ReactDOM.render(<Slider images={images}></Slider>,document.getElementById('container'));
