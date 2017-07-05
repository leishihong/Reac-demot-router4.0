var webpack = require('webpack');
var hwp=require("html-webpack-plugin")
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {//输出目录
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        //loaders加载器
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: ["babel"]
            }
        ]
    },
    //webpack-dev-server配置
    devServer: {
    
    },
    resolveLoader:{
        moduleExtensions:["-loader"]
    },
    plugins:[
        new webpack.BannerPlugin({banner:"1506F"}),
        //注入依赖
        new hwp({
            title: 'this is react-demo',
            template:__dirname+'/build/index.html',
            inject:"body"
        })
    ],
};