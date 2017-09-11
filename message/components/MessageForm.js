import React from 'react';
export default class MessageForm extends React.Component{
    //在es5的react里,事件处理函数中的this指向实例
    //在es6的react里,事件处理函数中的this指向null
   handleSubmit(event){
       event.preventDefault();
       let name = this.refs.name.value;
       let content = this.refs.content.value;
       this.refs.content.value = '';
       this.props.addMessage({name,content});
   }
   render(){
       return (
           <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
               <div className="form-group">
                   <label htmlFor="name" className="control-label col-md-1">姓名</label>
                   <div className="col-md-11">
                       <input ref="name" id="name" name="name" type="text" className="form-control"/>
                   </div>
               </div>
               <div className="form-group">
                   <label htmlFor="content" className="control-label col-md-1">内容</label>
                   <div className="col-md-11">
                       <textarea ref="content" name="content" id="content" cols="30" rows="10" className="form-control"></textarea>
                   </div>
               </div>
               <div className="form-group">
                   <div className="col-md-offset-1 col-md-11">
                        <button className="btn btn-primary">留言</button>
                   </div>
               </div>
           </form>
       )
   }
}