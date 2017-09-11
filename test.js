var obj1 = {name:'zfpx1'};
var obj2 = {name:'zfpx2'};
function print(){
    console.log(this.name);
}
Function.prototype.zfbind = function(self){
  let _this = this;
  return function(){
      _this.apply(self);
  }
}

var fn1 = print.zfbind(obj1);
fn1();
var fn2 = fn1.zfbind(obj2);
fn2();