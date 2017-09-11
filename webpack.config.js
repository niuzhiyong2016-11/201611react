var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
module.exports = {
    //入口文件
    entry:'./app/index.js',
    //输出的目录和文件名
    output:{
        path:'./build',       //路径
        filename:'bundle.js'  //文件名
    },
    devServer:{
        //指定静态文件根目录为build
        contentBase:'./build',
        //源代码改变之后webpack会重新打包并通知浏览器重启
        inline:true
    },
    module:{
        loaders:[
            {
                //如果要加载的模板是以.js结尾的文件，那么使用babel来进行转编译
                test:/\.js$/,
                loader:'babel',
                exclude:/node_modules/
            },
            {
              test:/\.css$/,
              loader:'style!css'
            },
            {
                test:/\.(gif|png|jpg)$/,
                loader:'url'
            }
        ]
    },
    plugins:[
        //自动产出html的插件
        new HtmlWebpackPlugin({
            template:'./app/index.html'
        }),
        //自动打开浏览器插件
        new OpenBrowserWebpackPlugin({
            url:'http://localhost:8080'
        })
    ]
}