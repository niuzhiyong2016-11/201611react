var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    //入口文件
    entry:'./message/index.js',
    //输出的目录和文件名
    output:{
        path:'./build',       //路径
        filename:'bundle.js'  //文件名
    },
    devServer:{
        //指定静态文件根目录为build
        contentBase:'./build',
        //源代码改变之后webpack会重新打包并通知浏览器重启
        inline:true,
        hot:true,//启动模块热更新
    },
    module:{
        loaders:[
            {
                //如果要加载的模板是以.js结尾的文件，那么使用babel来进行转编译
                test:/\.js$/,
                //增加一个loader ,把loader改成loaders, 后面改成数组
                loaders:['react-hot','babel'],
                exclude:/node_modules/
            },
            //加载CSS
            {
              test:/\.css$/,
              loader:'style!css'
            },
            //加载图片
            {
                test:/\.(gif|png|jpg)$/,
                loader:'url'
            },
            //加载 bootstrap内部的字体文件
            {
                test:/\.(woff|woff2|ttf|eot|svg)$/,
                loader:'url'
            }
        ]
    },
    plugins:[
        //使用插件实现热更新
        new webpack.HotModuleReplacementPlugin(),
        //自动产出html的插件
        new HtmlWebpackPlugin({
            template:'./message/index.html'
        }),
        //自动打开浏览器插件
        new OpenBrowserWebpackPlugin({
            url:'http://localhost:8080'
        })
    ]
}