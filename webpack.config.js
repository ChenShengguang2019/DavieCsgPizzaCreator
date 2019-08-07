const path = require('path');
const DIST_DIR = path.resolve(__dirname, "dist/");
const SOURCE_DIR = path.resolve(__dirname, "src/");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: `${SOURCE_DIR}/index.jsx`
    },
    output: {
        path: path.resolve(DIST_DIR),
        filename: '[name].js'
    },
    //react 调试工具
    devtool: 'source-map',
    resolve: {//指定可以被import的文件名后缀
        extensions: ['.js', '.jsx'],
      },
    // mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 8192 }
                    },
                    // {
                    //     loader: 'file-loader',
                    //     query: {
                    //         name: 'assets/[hash].[ext]'
                    //     }
                    // }
                ]
            },
            {
                test: /\.m?(js|jsx)$/, //正则匹配.js格式的文件 m?代表前面可以匹配1-无穷次
                exclude: /(node_modules|bower_components)/, //排除掉一些文件夹
                use: [
                    {
                        loader: 'babel-loader', //使用babel-loader为这些文件进行打包
                    }
                ]
            },
            {
                test: /\.(scss|css)$/, //正则匹配.js格式的文件
                exclude: /(node_modules)/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    'postcss-loader'
                ],
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                }
            }
        ]
    },
        //4、服务器依赖包配置
        devServer: {//注意：网上很多都有colors属性，但是实际上的webpack2.x已经不支持该属性了
            contentBase: DIST_DIR,//本地服务器所加载的页面所在的目录
            historyApiFallback: true,//不跳转
            inline: true//实时刷新
        },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${SOURCE_DIR}/index.html`,
            inject: true
        })
    ]

}