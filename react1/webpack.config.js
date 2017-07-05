var webpack = require('webpack');//引入Webpack模块供我们调用，这里只能使用ES5语法，使用ES6语法会报错
var hwp=require("html-webpack-plugin")
//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {//注意这里是exports不是export
	devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
    entry: __dirname + "/app/main.js",//唯一入口文件，就像Java中的main方法
    output: {//输出目录
        path: __dirname + "/build",//打包后的js文件存放的地方
        filename: "bundle.js"//打包后的js文件名
    },

    //配置公共的-loader的简写模式
	resolveLoader:{
		moduleExtensions:["-loader"]
	},
    module: {
        //loaders加载器
        loaders: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel'//loader的名称（必须）
            }
        ]
    },

    //webpack-dev-server配置
    devServer: {
        // contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        // colors: true,//在cmd终端中输出彩色日志
        // historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8080,//设置默认监听端口，如果省略，默认为"8080"
        open: true
    },

    plugins:[
		new webpack.BannerPlugin({banner:"1506F"}),
		//注入依赖
		new hwp({
			title: 'this is react-demo',//标题的配置
			template:__dirname+'/build/index.html',//注入的首页
			inject:"body"
		})
	],
};

// var path = require('path')
// var webpack = require('webpack')
// var HtmlwebpackPlugin = require('html-webpack-plugin')

// var ROOT_PATH = path.resolve(__dirname)
// var APP_PATH = path.resolve(ROOT_PATH, 'app')
// var BUILD_PATH = path.resolve(ROOT_PATH, 'build')
// module.exports= {
//   entry:{
//     app: path.resolve(APP_PATH, 'app.js')
//   },
//   output: {
//     path: BUILD_PATH,
//     filename: 'bundle.js'
    
//   },
//   //enable dev source map
//   devtool: 'eval-source-map',
//   //enable dev server
//   devServer: {
//     inline: true,
//     port:9090,
//     open:true
//   },
//   resolve: {
//        extensions: ['', '.js', '.jsx']
//    },
//   //babel重要的loader在这里
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         loader: 'babel',
//         include: APP_PATH
//       }
//       // {
//       //   test: /\.scss$/,
//       //   loaders: ['style', 'css', 'sass']
//       // }
//     ]
//   },
//   //配置公共的-loader的简写模式
// 	resolveLoader:{
// 		moduleExtensions:["-loader"]
// 	},
//   plugins: [
//     new HtmlwebpackPlugin({
//       title: 'My first react app',
//       template:__dirname+'/index.html',//注入的首页
// 	  inject:"body"
//     })
//   ]
// }
//  