//默认导入React对象
import React from 'react';
require('./Slider.css');
//React.Component是一个组件的基数，如果我们在ES6自定义组件，就需要
//去继承这个基类
//export default表示 把此定义的组件类默认导出
export default class Slider extends React.Component{
   constructor(props){
       super(props);//先调用父类的构造函数，并接收属性对象
       //定义默认索引状态变量
       this.state = {index:0};
   }
   //这是一个固定的方法名，当界面初始化完成后执行
   componentDidMount(){
        this.timer = setInterval(()=>{
            this.go(1);
        },2000)
   }
   go(step){
        this.state.index += step;
        if(this.state.index >= this.props.images.length){
            this.state.index = 0;
        }
        if(this.state.index<0){
            this.state.index = this.props.images.length-1;
        }
        //只有调用setState方法才能重新刷新视图其实就是重新调用render方法
        this.setState({index:this.state.index});
   }
   //鼠标移上去之后 左右按钮出现
    handleMouseOver(){
        if(this.timer){
            clearInterval(this.timer);
            this.timer = null;
        }
        this.refs.arrows.style.opacity = 1;
    }
    //鼠标移上去之后 左右按钮消息
    handleMouseOut(){
        this.timer = setInterval(()=>{
            this.go(1);
        },2000)
        this.refs.arrows.style.opacity = 0;
    }
  //表示此组件将要被如何渲染
  render(){
     return (
             <div className="slider" onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
                 <ul className="items">
                     {
                         this.props.images.map((image,index)=>{
                             return <li className="item" style={{transitionDuration:'1s',opacity:this.state.index == index?1:0}} key={index}><img src={image.src} alt={image.alt}  /></li>
                         })
                     }
                 </ul>
                 <ul  ref="arrows" className="arrows">
                     <li onClick={()=>this.go(-1)} className="arrow">&lt;&lt;</li>
                     <li onClick={()=>this.go(1)} className="arrow">&gt;&gt;</li>
                 </ul>
                 <ul className="dots">
                     {
                         this.props.images.map((image,index)=>{
                             return <li className="dot" key={index} onClick={()=>this.go(index - this.state.index)}></li>
                         })
                     }
                 </ul>
             </div>
     )
  }
}
