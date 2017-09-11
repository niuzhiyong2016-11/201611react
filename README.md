## 1.初始化项目配置文件 
```
npm init -y
```
## 2. 创建webpack配置文件 webpack.config.js
```
module.exports = {
    //入口文件
    entry:'./app/index.js',
    //输出的目录和文件名
    output:{
        path:'./build',       //路径
        filename:'bundle.js'  //文件名
    }
}
```

## 3. 编写脚本
```
"scripts": {
    "build": "webpack"
  }
```

```
npm run build
```

执行此脚本的时候会去当前目录下的node_modules下找.bin目录，再找里面的webpack.cmd文件并执行


加载图片的加载器
````
npm install file-loader url-loader 
````

## 实现模块的热更新
```
devServer:{
        hot:true,//启动模块热更新
    },
```
安装并使用loader
```
npm install react-hot-loader --save-dev
  loaders:['react-hot','babel'],
```
增加一个插件
```
new webpack.HotModuleReplacementPlugin(),
```
