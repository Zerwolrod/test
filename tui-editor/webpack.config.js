// 因为 webpack 是基于 node
// 所以在配置文件里面 我们可以直接使用 node 的语法
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口
  entry: path.join(__dirname, './src/index.js'),
  // 出口
  output: {
    // 目录
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  // mode
  mode: 'development',
	plugins: [
		// 使用插件 指定模板
		new htmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html')
		})
	],
	module: {
		rules: [
				//1.处理 css
				// 注意点 use执行loader 顺序 从右往左
				// css-loader  :  读取css文件内容,将其转化为一个模块
				// style-loader : 拿到模块, 创建一个style标签,插入页面中
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			//2.处理 less
			{ test: /\.less$/, use: ['style-loader', 'css-loader','less-loader'] },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']   // 处理es6-最新   
					}
				}
			},
      {
        test: /\.md$/, // 匹配 Markdown 文件
        type: 'asset/source', // 使用 Webpack 5 的内置加载器
      },

		]
	},
	devServer:{
		port:9230,
		open:true
	}
}